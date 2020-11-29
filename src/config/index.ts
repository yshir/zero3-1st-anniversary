import { EnvType } from '../types/EnvType';
import development from './development';
import production from './production';

export const config = {
  development,
  production,
}[process.env.APP_ENV as EnvType];
