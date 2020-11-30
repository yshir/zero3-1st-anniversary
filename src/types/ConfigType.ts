import { EnvType } from './EnvType';

export type ConfigType = {
  APP_ENV: EnvType;
  GA_TRACKING_ID: string | null;
};
