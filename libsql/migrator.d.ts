import { LibSQLDatabase } from "./driver-core.js";
import { AnyRelations } from "../relations.js";
import { MigrationConfig } from "../migrator.js";

//#region src/libsql/migrator.d.ts
declare function migrate<TSchema extends Record<string, unknown>, TRelations extends AnyRelations>(db: LibSQLDatabase<TSchema, TRelations>, config: MigrationConfig): Promise<{
  exitCode: "databaseMigrations";
} | {
  exitCode: "localMigrations";
} | undefined>;
//#endregion
export { migrate };
//# sourceMappingURL=migrator.d.ts.map