import { DataSource, DataSourceOptions } from "typeorm";
import config from "../config";

export const options = { ...config.database.options } as DataSourceOptions
export const typeorm = new DataSource(options);
export const initialize = async () => { await typeorm.initialize() }
