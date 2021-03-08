import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as typegoose from '@midwayjs/typegoose';

export const mongoose: typegoose.DefaultConfig = {
  uri: 'mongodb+srv://localhost:27017/',
  options: { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    dbName: 'amst'
  }
}

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614933038853_3753';

  // add your config here
  config.middleware = [];
  
  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true      
  }

  return config;
};
