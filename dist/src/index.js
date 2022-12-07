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
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const port = 4000;
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient({ log: ['query'] });
app.use(express_1.default.json());
app.get("/home", (request, response) => {
    return response.status(200).json({ message: "Hello World" });
});
app.get("/users", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    return response.status(200).json(users);
}));
app.listen(port, () => console.log("Server is running on port ", port));
