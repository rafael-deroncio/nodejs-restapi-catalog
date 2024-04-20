import { ObjectLiteral, Repository } from "typeorm";

interface IBaseConnection<T extends ObjectLiteral> {

  start(): Promise<void>;
  commit(): Promise<void>;
  rollback(): Promise<void>;
  connection(): Repository<T>;

  total(): Promise<number>;
}

export default IBaseConnection;
