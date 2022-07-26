"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("./classes/server"));
const default_routes_1 = __importDefault(require("./routes/default.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const cors_1 = __importDefault(require("cors"));
const pelicula_routes_1 = __importDefault(require("./routes/pelicula.routes"));
const genero_routes_1 = __importDefault(require("./routes/genero.routes"));
const actor_routes_1 = __importDefault(require("./routes/actor.routes"));
const role_routes_1 = __importDefault(require("./routes/role.routes"));
const seedDb_1 = __importDefault(require("./classes/seedDb"));
const server = new server_1.default();
server.app.use((0, cors_1.default)());
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use('/', default_routes_1.default);
server.app.use('/user', user_routes_1.default);
server.app.use('/pelicula', pelicula_routes_1.default);
server.app.use('/genero', genero_routes_1.default);
server.app.use('/actor', actor_routes_1.default);
server.app.use('/role', role_routes_1.default);
mongoose_1.default.connect('mongodb://localhost:27017/bdaiepflix', (error) => {
    if (error) {
        throw error;
    }
    console.log('Base de datos online');
});
server.Start(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Servidor corriendo en puerto:${server.port}`);
    yield seedDb_1.default.seedRole();
}));
