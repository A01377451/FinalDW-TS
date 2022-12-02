"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PREFIX_NAME = exports.DB_HOST = exports.DB_PASSWORD = exports.DB_USER = exports.DB_NAME = exports.NODE_ENV = exports.PORT = void 0;
exports.PORT = process.env.PORT ? +process.env.PORT : 8082;
exports.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
exports.DB_NAME = process.env.DB_NAME ? process.env.DB_NAME : 'prueba';
exports.DB_USER = process.env.DB_USER ? process.env.DB_USER : 'root';
exports.DB_PASSWORD = process.env.DB_PASSWORD ? process.env.DB_PASSWORD : 'root';
exports.DB_HOST = process.env.DB_HOST ? process.env.DB_HOST : 'localhost';
exports.PREFIX_NAME = exports.NODE_ENV === 'production' ? '' : '-DEV';
//# sourceMappingURL=index.js.map