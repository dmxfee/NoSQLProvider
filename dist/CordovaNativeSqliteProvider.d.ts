/**
 * CordovaNativeSqliteProvider.ts
 * Author: David de Regt
 * Copyright: Microsoft 2015
 *
 * NoSqlProvider provider setup for cordova-native-sqlite, a cordova plugin backed by sqlite3.
 */
import SyncTasks = require('synctasks');
import NoSqlProvider = require('./NoSqlProviderInterfaces');
import SqlProviderBase = require('./SqlProviderBase');
export declare class CordovaNativeSqliteProvider extends SqlProviderBase.SqlProviderBase {
    private _plugin;
    constructor(_plugin?: SqlitePlugin);
    private _db;
    open(dbName: string, schema: NoSqlProvider.DbSchema, wipeIfExists: boolean, verbose: boolean): SyncTasks.Promise<void>;
    close(): SyncTasks.Promise<void>;
    openTransaction(storeNames: string | string[], writeNeeded: boolean): SyncTasks.Promise<SqlProviderBase.SqlTransaction>;
}
