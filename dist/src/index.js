"use strict";
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
app.get("/users", async (request, response) => {
    const users = await prisma.user.findMany();
    return response.status(200).json(users);
});
app.listen(port, () => console.log("Server is running on port ", port));
