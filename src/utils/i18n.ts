import fs from 'fs';
import yaml from 'js-yaml';
import merge from 'lodash.merge';

export interface I18NConfig {
    language: string;
    textDirection: string;
    dateFormatter?: Intl.DateTimeFormat;
  }


const config = yaml.load(fs.readFileSync('src/config/i18n.yaml', 'utf8')) as {
    i18n?: I18NConfig;
  };

const getI18N = () => {
    const _default = {
      language: 'en',
      textDirection: 'ltr',
    };
  
    const value = merge({}, _default, config?.i18n ?? {});
  
    return Object.assign(value, {
      dateFormatter: new Intl.DateTimeFormat(value.language, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
      }),
    }) as I18NConfig;
  };


export const i18n = getI18N();