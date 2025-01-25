import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ["*.md", "*.mdx"], base: "src/data/post" }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    thumbnail: z.string().optional(),

    category: z.string().optional(),
    slug: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const talks = z.object({
  title: z.string(),
  description: z.string(),
  versionNumber: z.string().optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
  slug: z.string().optional(),
  author: z.string().optional(),
  // Transform string to Date object
  date: z.date({ coerce: true }).optional(),
});

const events = defineCollection({
  loader: glob({ pattern: ["*.md", "*.mdx"], base: "src/data/events" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      versionNumber: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      slug: z.string().optional(),
      location: z.string().optional(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),

      meetupLink: z.string().optional(),
      talks: z.array(talks).optional(),
    }),
});

export const collections = {
  post: postCollection,
  events: events,
};
