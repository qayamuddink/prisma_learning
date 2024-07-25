"use strict";
// import { PrismaClient } from "@prisma/client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// const prisma =new PrismaClient();
// async function insertUser(username:string, password : string ,firstname : string , lastname : string) {
//    const response = await prisma.user.create({
//         data : {
//             username ,
//             password,
//             firstname ,
//             lastname
//         }
//     })
//     console.log(response)
// }
// insertUser('hana' ,'hey' ,'hanaka jana' ,'khana')
// //pg , mongoose
// /*
// app.get("/users" ,(req,res) => {
//     User.find({
//         where :{
//             id: req.query.id
//         }
//     } ,(err,users) => {
//     })
// })
// */
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient() ;
// async function getTodos(user_id: number) {
// const response = await prisma.todo.findMany({
//     where : {
//         user_id : user_id
//     }
//    })
//     console.log(response);
// }
// getTodos(1);
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient() ;
// async function getTodos(user_id: number) {
// const response = await prisma.todo.create({
//     data:{
//         title : 'LEARN PRISMA',
//         description : "learn prisma with typescript",
//         user_id : 2
//     }
//    })
//     console.log(response);
// }
// getTodos(2);
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getTodosAndUsersDetails(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.findMany({
            where: {
                user_id: user_id
            },
            select: {
                id: true,
                title: true,
                description: true,
                user: true
            }
        });
        console.log(response);
    });
}
getTodosAndUsersDetails(1);
