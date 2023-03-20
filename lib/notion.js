import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });

export const retrieveDatabase = async (databaseId) => {
  const response = await notion.databases.retrieve({ database_id: databaseId });
  return response;
};

export const queryDatabase = async (
  databaseId,
  filterProperty,
  filterValue,
  sortProperty,
  numberOfResults
) => {
  const filterCondition =
    filterValue === "is_not_empty"
      ? { is_not_empty: true }
      : { equals: filterValue };

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: filterProperty,
          select: filterCondition,
        },
        {
          property: "Status",
          status: {
            equals: "Live",
          },
        },
      ],
    },
    sorts: [
      {
        property: sortProperty,
        direction: "descending",
      },
    ],
    page_size: numberOfResults,
  });
  return response.results;
};

export const retrievePage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlock = async (blockId) => {
  const { results } = await notion.blocks.children.list({
    block_id: blockId,
  });
  const childBlocks = results.map(async (block) => {
    if (block.has_children) {
      const children = await getBlock(block.id);
      return { ...block, children };
    }
    return block;
  });

  return await Promise.all(childBlocks).then((blocks) => {
    return blocks.reduce((acc, curr) => {
      if (curr.type === "bulleted_list_item") {
        if (acc[acc.length - 1]?.type === "bulleted_list") {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "bulleted_list",
            bulleted_list: { children: [curr] },
          });
        }
      } else if (curr.type === "numbered_list_item") {
        if (acc[acc.length - 1]?.type === "numbered_list") {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "numbered_list",
            numbered_list: { children: [curr] },
          });
        }
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
  });
};

export const getPageContent = async (databaseId, slug) => {
  const databaseResponse = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Permalink",
      rich_text: {
        equals: slug,
      },
    },
  });
  const pageId = databaseResponse.results[0].id;
  const pageBlock = await getBlock(pageId);
  return pageBlock;
};
