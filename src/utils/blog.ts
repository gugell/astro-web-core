import fs from "fs";
import yaml from "js-yaml";
import merge from "lodash.merge";

export interface AppBlogConfig {
  isEnabled: boolean;
  postsPerPage: number;
  isRelatedPostsEnabled: boolean;
  relatedPostsCount: number;
  post: {
    isEnabled: boolean;
    permalink: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  list: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  category: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  tag: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
}

const config = yaml.load(fs.readFileSync("src/config/blog.yaml", "utf8")) as {
  blog?: AppBlogConfig;
};

const getAppBlog = () => {
  const _default = {
    isEnabled: false,
    postsPerPage: 6,
    isRelatedPostsEnabled: false,
    relatedPostsCount: 4,
    post: {
      isEnabled: true,
      permalink: "/articles/%slug%",
      robots: {
        index: true,
        follow: true,
      },
    },
    list: {
      isEnabled: true,
      pathname: "articles",
      robots: {
        index: true,
        follow: true,
      },
    },
    category: {
      isEnabled: true,
      pathname: "category",
      robots: {
        index: true,
        follow: true,
      },
    },
    tag: {
      isEnabled: true,
      pathname: "tag",
      robots: {
        index: false,
        follow: true,
      },
    },
  };

  return merge({}, _default, config?.blog ?? {}) as AppBlogConfig;
};

export const blog = getAppBlog();

export const isBlogEnabled = blog.isEnabled;
export const isRelatedPostsEnabled = blog.isRelatedPostsEnabled;
export const isBlogListRouteEnabled = blog.list.isEnabled;
export const isBlogPostRouteEnabled = blog.post.isEnabled;
export const isBlogCategoryRouteEnabled = blog.category.isEnabled;
export const isBlogTagRouteEnabled = blog.tag.isEnabled;

export const blogListRobots = blog.list.robots;
export const blogPostRobots = blog.post.robots;
export const blogCategoryRobots = blog.category.robots;
export const blogTagRobots = blog.tag.robots;

export const blogPostsPerPage = blog?.postsPerPage;
