import express, { response } from "express";
import {PrismaClient} from "@prisma/client";

const port =4000;
const app = express();
const prisma = new PrismaClient({log: ['query']})
app.use(express.json());

app.get("/home", (request, response) =>{
    return response.status(200).json({message: "Hello World"})
})

app.get("/users", async (request, response) =>{
    const users = await prisma.user.findMany();
    return response.status(200).json(users);
});

app.listen(port, () => console.log("Server is running on port ", port));