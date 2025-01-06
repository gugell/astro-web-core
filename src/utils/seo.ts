import type { MetaData } from "@/types";
import fs from "fs";
import yaml from "js-yaml";
import merge from "lodash.merge";
import { getSite } from "./config";

export interface MetaDataConfig extends Omit<MetaData, "title"> {
  title?: {
    default: string;
    template: string;
  };
}

const config = yaml.load(fs.readFileSync("src/config/seo.yaml", "utf8")) as {
  metadata?: MetaDataConfig;
};

const DEFAULT_SITE_NAME = "Website";

const getMetadata = () => {
    const siteConfig = getSite();
  
    const _default = {
      title: {
        default: siteConfig?.name || DEFAULT_SITE_NAME,
        template: '%s',
      },
      description: '',
      robots: {
        index: false,
        follow: false,
      },
      openGraph: {
        type: 'website',
      },
    };
  
    return merge({}, _default, config?.metadata ?? {}) as MetaDataConfig;
  };

export const metadata = getMetadata();
