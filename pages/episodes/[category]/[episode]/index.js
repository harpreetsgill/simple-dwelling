import { Fragment } from "react";
import YouTubeFrame from "@/components/UI/YouTubeEmbed";
import { queryDatabase, getPageContent, retrievePage } from "@/lib/notion";
import PlaceholderImage from "@/public/placeholder.png";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

const databaseId = process.env.EPISODES_DB_ID;

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "column_list":
      return (
        <div className={styles.row}>
          {block.children
            ? block.children.map((child) => (
                <Fragment key={Math.floor(Math.random() * 10000)}>
                  {renderBlock(child)}
                </Fragment>
              ))
            : ""}
        </div>
      );
    case "column":
      let classes = styles.column;
      if (block.children.length === 1 && block.children[0].type === "image") {
        classes = styles.column + " " + styles["image-column"];
      }
      return (
        <div className={classes}>
          {block.children.map((child) => (
            <Fragment key={Math.floor(Math.random() * 10000)}>
              {renderBlock(child)}
            </Fragment>
          ))}
        </div>
      );
    case "heading_1":
      return (
        <h1>
          {value.rich_text.map((text) => {
            let textOutput = text.plain_text;

            const isBold = text.annotations.bold;
            const isItalic = text.annotations.italic;
            const isUnderlined = text.annotations.underline;
            const isStrikedThrough = text.annotations.strikethrough;

            const hasLink = text.href;

            if (isBold) {
              textOutput = <strong>{textOutput}</strong>;
            }
            if (isItalic) {
              textOutput = <em>{textOutput}</em>;
            }
            if (isUnderlined) {
              textOutput = <u>{textOutput}</u>;
            }
            if (isStrikedThrough) {
              textOutput = <s>{textOutput}</s>;
            }
            if (hasLink) {
              return (
                <Fragment key={Math.floor(Math.random() * 10000)}>
                  <a href={text.href}>{textOutput}</a>
                </Fragment>
              );
            }
            return (
              <Fragment key={Math.floor(Math.random() * 10000)}>
                {textOutput}
              </Fragment>
            );
          })}
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          {value.rich_text.map((text) => {
            let textOutput = text.plain_text;

            const isBold = text.annotations.bold;
            const isItalic = text.annotations.italic;
            const isUnderlined = text.annotations.underline;
            const isStrikedThrough = text.annotations.strikethrough;

            const hasLink = text.href;

            if (isBold) {
              textOutput = <strong>{textOutput}</strong>;
            }
            if (isItalic) {
              textOutput = <em>{textOutput}</em>;
            }
            if (isUnderlined) {
              textOutput = <u>{textOutput}</u>;
            }
            if (isStrikedThrough) {
              textOutput = <s>{textOutput}</s>;
            }
            if (hasLink) {
              return (
                <Fragment key={Math.floor(Math.random() * 10000)}>
                  <a href={text.href}>{textOutput}</a>
                </Fragment>
              );
            }
            return (
              <Fragment key={Math.floor(Math.random() * 10000)}>
                {textOutput}
              </Fragment>
            );
          })}
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          {value.rich_text.map((text) => {
            let textOutput = text.plain_text;

            const isBold = text.annotations.bold;
            const isItalic = text.annotations.italic;
            const isUnderlined = text.annotations.underline;
            const isStrikedThrough = text.annotations.strikethrough;

            const hasLink = text.href;

            if (isBold) {
              textOutput = <strong>{textOutput}</strong>;
            }
            if (isItalic) {
              textOutput = <em>{textOutput}</em>;
            }
            if (isUnderlined) {
              textOutput = <u>{textOutput}</u>;
            }
            if (isStrikedThrough) {
              textOutput = <s>{textOutput}</s>;
            }
            if (hasLink) {
              return (
                <Fragment key={Math.floor(Math.random() * 10000)}>
                  <a href={text.href}>{textOutput}</a>
                </Fragment>
              );
            }
            return (
              <Fragment key={Math.floor(Math.random() * 10000)}>
                {textOutput}
              </Fragment>
            );
          })}
        </h3>
      );
    case "paragraph":
      return (
        <p>
          {value.rich_text.map((text) => {
            let textOutput = text.plain_text;

            const isBold = text.annotations.bold;
            const isItalic = text.annotations.italic;
            const isUnderlined = text.annotations.underline;
            const isStrikedThrough = text.annotations.strikethrough;

            const hasLink = text.href;

            if (isBold) {
              textOutput = <strong>{textOutput}</strong>;
            }
            if (isItalic) {
              textOutput = <em>{textOutput}</em>;
            }
            if (isUnderlined) {
              textOutput = <u>{textOutput}</u>;
            }
            if (isStrikedThrough) {
              textOutput = <s>{textOutput}</s>;
            }
            if (hasLink) {
              return (
                <Fragment key={Math.floor(Math.random() * 10000)}>
                  <a href={text.href}>{textOutput}</a>
                </Fragment>
              );
            }
            return (
              <Fragment key={Math.floor(Math.random() * 10000)}>
                {textOutput}
              </Fragment>
            );
          })}
        </p>
      );
    case "image":
      return (
        <div className={styles.image}>
          <Image
            src={value[value.type].url}
            fill
            sizes="(max-width: 768px) 60vw,
    50vw"
            alt="placeholder alt"
          />
        </div>
      );
    case "video":
      return (
        <YouTubeFrame
          videoUrl={value[value.type].url}
          width="100%"
          thumbnailQuality="maxresdefault"
        />
      );
    default:
      return <p></p>;
  }
};

export default function EpisodePage({ pageProperties, pageContentBlock }) {
  const title = pageProperties.title;
  const desc = pageProperties.desc;
  const date = pageProperties.date;
  const categoryName = pageProperties.category.name;
  const categorySlug = pageProperties.category.slug;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>
      <article className={styles.header}>
        <h1>{title}</h1>
        <time dateTime={date}>{date}</time>
        <Link href={`/episodes/${categorySlug}`} className={styles.category}>
          {categoryName}
        </Link>
        <section className={styles.content}>
          {pageContentBlock.map((content) => (
            <Fragment key={content.id}>{renderBlock(content)}</Fragment>
          ))}
        </section>
      </article>
    </>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.episode;

  const pageContentBlock = await getPageContent(databaseId, slug);
  const pageId = pageContentBlock[0].parent.page_id;
  const pageBlock = await retrievePage(pageId);

  const pageProperties = {
    image: pageBlock.cover
      ? pageBlock.cover[pageBlock.cover.type].url
      : PlaceholderImage.src,
    title:
      pageBlock.properties.Title.title.length > 0
        ? pageBlock.properties.Title.title[0].plain_text
        : "",
    desc:
      pageBlock.properties.Description.rich_text.length > 0
        ? pageBlock.properties.Description.rich_text[0].plain_text
        : "",
    date: pageBlock.properties["Publish Date"].date
      ? new Date(
          pageBlock.properties["Publish Date"].date.start
        ).toLocaleDateString()
      : "",
    category: pageBlock.properties.Category.select
      ? {
          name: pageBlock.properties.Category.select.name,
          slug: pageBlock.properties.Category.select.name
            .toLowerCase()
            .replace(" ", "-"),
        }
      : {
          name: "",
          slug: "",
        },
  };

  return {
    props: {
      pageProperties,
      pageContentBlock,
    },
  };
}

export async function getStaticPaths() {
  const databasePages = await queryDatabase(
    databaseId,
    "Category",
    "is_not_empty",
    "Publish Date",
    1
  );
  const episodesPermalinks = databasePages.map((page) => {
    return {
      params: {
        category: page.properties.Category.select.name
          .toLowerCase()
          .replace(" ", "-"),
        episode: page.properties.Permalink.rich_text[0].plain_text,
      },
    };
  });
  return {
    paths: episodesPermalinks,
    fallback: false,
  };
}
