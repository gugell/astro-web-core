import slugify from "limax";

import { siteConfig } from "./config";
import { trim } from "./utils";
import { blog } from "./blog";

export const trimSlash = (s: string) => trim(trim(s, "/"));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join("/");
  return "/" + paths + (siteConfig.trailingSlash && paths ? "/" : "");
};

const BASE_PATHNAME = siteConfig.base || "/";

export const cleanSlug = (text = "") =>
  trimSlash(text)
    .split("/")
    .map((slug) => slugify(slug))
    .join("/");

/** */
export const getCanonical = (path = ""): string | URL => {
  const url = String(new URL(path, siteConfig.site));
  if (siteConfig.trailingSlash == false && path && url.endsWith("/")) {
    return url.slice(0, -1);
  } else if (siteConfig.trailingSlash == true && path && !url.endsWith("/")) {
    return url + "/";
  }
  return url;
};

export const BLOG_BASE = cleanSlug(blog?.list?.pathname);
export const CATEGORY_BASE = cleanSlug(blog?.category?.pathname);
export const TAG_BASE = cleanSlug(blog?.tag?.pathname) || "tag";

/** */
export const getPermalink = (slug = "", type = "page"): string => {
  let permalink: string;

  switch (type) {
    case "category":
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;

    case "tag":
      permalink = createPath(TAG_BASE, trimSlash(slug));
      break;

    case "post":
      permalink = createPath(trimSlash(slug));
      break;

    case "page":
    default:
      permalink = createPath(slug);
      break;
  }

  return definitivePermalink(permalink);
};

/** */
export const getHomePermalink = (): string => getPermalink("/");

/** */
export const getBlogPermalink = (): string => getPermalink(BLOG_BASE);

/** */
export const getAsset = (path: string): string =>
  "/" +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join("/");

/** */
const definitivePermalink = (permalink: string): string =>
  createPath(BASE_PATHNAME, permalink);
