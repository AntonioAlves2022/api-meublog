import { PrismaClient } from "@prisma/client";
import {hash} from "bcrypt";

const prisma = new PrismaClient();

const createUsers = async () =>{
    const pwdHash = await hash("123456789", 8);
    await prisma.user.create({
        data:{
            name: "Arthur A. Alves",
            email: "arthur.alves1@gmail.com",
            password: pwdHash
        }
    });
}

createUsers();