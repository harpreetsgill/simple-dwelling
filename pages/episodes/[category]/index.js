import { useState } from "react";
import { useRouter } from "next/router";
import LatestEpisodes from "@/components/UI/LatestEpisodes";
import { queryDatabase, retrieveDatabase } from "@/lib/notion";
import PlaceholderImage from "@/public/placeholder.png";
import { toTitleCase } from "@/lib/functions";

const databaseId = process.env.EPISODES_DB_ID;

export default function CategoryPage({ episodes, categories }) {
  const [currentView, setCurrentView] = useState(true);
  const router = useRouter();
  const currentPageSlug = router.query.category;

  function viewHandler() {
    setCurrentView((prevView) => !prevView);
  }

  function categoryHandler(event) {
    if (event.target.value === "all") {
      router.push("/episodes");
    } else {
      router.push(`/episodes/${event.target.value}`);
    }
  }

  return (
    <>
      <div className="sort-view">
        <form onChange={categoryHandler} className="form-filter">
          <div className="radio-button">
            <input
              key="input-all"
              id="all"
              type="radio"
              name="category"
              value="all"
            />
            <label key="label-all" htmlFor="all">
              All
            </label>
          </div>
          {categories.map((category) => (
            <div className="radio-button" key={`div-${category.slug}`}>
              <input
                key={`input-${category.slug}`}
                id={category.slug}
                type="radio"
                name="category"
                value={category.slug}
                defaultChecked={
                  category.slug === currentPageSlug ? true : false
                }
              />
              <label key={`label-${category.slug}`} htmlFor={category.slug}>
                {category.name}
              </label>
            </div>
          ))}
        </form>
        <form className="view-filter" onChange={viewHandler}>
          <div className="radio-button">
            <input
              id="icons"
              type="radio"
              name="view"
              value="icons"
              defaultChecked
            />
            <label htmlFor="icons">Icons</label>
          </div>
          <div className="radio-button">
            <input id="list" type="radio" name="view" value="list" />
            <label htmlFor="list">List</label>
          </div>
        </form>
      </div>
      <LatestEpisodes data={episodes} view={currentView} />
    </>
  );
}

export async function getStaticProps(context) {
  const currentPageSlug = context.params.category;
  const currentCategoryName = toTitleCase(currentPageSlug);

  const databaseObject = await retrieveDatabase(databaseId);
  const categories = databaseObject.properties.Category[
    databaseObject.properties.Category.type
  ].options.map((option) => {
    return {
      name: option.name,
      slug: option.name.toLowerCase().replace(" ", "-"),
    };
  });

  const databasePages = await queryDatabase(
    databaseId,
    "Category",
    currentCategoryName,
    "Publish Date",
    100
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
      categories,
    },
  };
}

export async function getStaticPaths() {
  const databaseObject = await retrieveDatabase(databaseId);
  const categories = databaseObject.properties.Category[
    databaseObject.properties.Category.type
  ].options.map((option) => {
    return {
      params: { category: option.name.toLowerCase().replace(" ", "-") },
    };
  });
  return {
    paths: categories,
    fallback: false,
  };
}
