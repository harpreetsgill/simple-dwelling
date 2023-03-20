import Head from "next/head";
import Hero from "@/components/UI/Hero";
import LatestEpisodes from "@/components/UI/LatestEpisodes";
import { queryDatabase } from "@/lib/notion";

const databaseId = process.env.EPISODES_DB_ID;

export default function Home({ episodes }) {
  return (
    <>
      <Head>
        <title>Simple Dwelling</title>
        <meta
          name="description"
          content="Simple Dwelling is devoted to simple and sustainable design and living."
        />
      </Head>
      <Hero>
        Simple Dwelling explores sustainability and simplicity in homes, design
        and living.
      </Hero>
      <LatestEpisodes data={episodes} view={true} />
    </>
  );
}

export async function getStaticProps() {
  const databasePages = await queryDatabase(
    databaseId,
    "Category",
    "is_not_empty",
    "Publish Date",
    3
  );
  const episodes = databasePages.map((page) => {
    return {
      id: page.id,
      image: page.cover
        ? page.cover[page.cover.type].url
        : PlaceholderImage.src,
      title:
        page.properties.Title.title.length > 0
          ? page.properties.Title.title[0].plain_text
          : "",
      desc:
        page.properties.Description.rich_text.length > 0
          ? page.properties.Description.rich_text[0].plain_text
          : "",
      date: page.properties["Publish Date"].date
        ? new Date(
            page.properties["Publish Date"].date.start
          ).toLocaleDateString()
        : "",
      category: page.properties.Category.select
        ? {
            name: page.properties.Category.select.name,
            slug: page.properties.Category.select.name
              .toLowerCase()
              .replace(" ", "-"),
          }
        : {
            name: "Empty",
            slug: "empty",
          },
      permalink:
        page.properties.Permalink.rich_text.length > 0
          ? page.properties.Permalink.rich_text[0].plain_text
          : "",
    };
  });

  return {
    props: {
      episodes,
    },
    revalidate: 1
  };
}
