"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const prisma = new client_1.PrismaClient();
const createUsers = async () => {
    const pwdHash = await (0, bcrypt_1.hash)("123456789", 8);
    await prisma.user.create({
        data: {
            name: "Arthur A. Alves",
            email: "arthur.alves1@gmail.com",
            password: pwdHash
        }
    });
};
createUsers();
