declare module "better-sqlite3" {
  interface Options {
    readonly memory?: boolean;
    readonly readonly?: boolean;
    readonly fileMustExist?: boolean;
    readonly verbose?: (...args: any[]) => void;
  }

  interface Statement {
    run(...params: any[]): { changes: number; lastInsertRowid: number };
    get(...params: any[]): any;
    all(...params: any[]): any[];
    iterate(...params: any[]): IterableIterator<any>;
    bind(...params: any[]): this;
  }

  class Database {
    constructor(filename: string, options?: Options);
    prepare(sql: string): Statement;
    exec(sql: string): void;
    close(): void;
  }

  export default Database;
}
