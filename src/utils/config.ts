import type { MetaData } from "@/types";
import fs from "fs";
import yaml from "js-yaml";
import merge from "lodash.merge";

export interface SiteConfig {
  name: string;
  site?: string;
  base?: string;
  trailingSlash?: boolean;
  googleSiteVerificationId?: string;
  ui?: UIConfig;
}

export interface UIConfig {
    theme: string;
  }
  

export interface AnalyticsConfig {
    vendors: {
      googleAnalytics: {
        id?: string;
        partytown?: boolean;
      };
    };
  }

export interface MetaDataConfig extends Omit<MetaData, "title"> {
  title?: {
    default: string;
    template: string;
  };
}

const config = yaml.load(fs.readFileSync("src/config/config.yaml", "utf8")) as {
  site?: SiteConfig;
  analytics?: AnalyticsConfig;
};

const DEFAULT_SITE_NAME = "Website";

export const getSite = () => {
  const _default = {
    name: DEFAULT_SITE_NAME,
    site: undefined,
    base: "/",
    trailingSlash: false,

    googleSiteVerificationId: "",
  };

  return merge({}, _default, config?.site ?? {}) as SiteConfig;
};

const getAnalytics = () => {
    const _default = {
      vendors: {
        googleAnalytics: {
          id: undefined,
          partytown: true,
        },
      },
    };
  
    return merge({}, _default, config?.analytics ?? {}) as AnalyticsConfig;
  };

export const siteConfig = getSite();

export const analyticsConfig = getAnalytics();
