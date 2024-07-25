
// import { PrismaClient } from "@prisma/client";

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



import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient() ;

async function getTodosAndUsersDetails(user_id: number) {

const response = await prisma.todo.findMany({
    where : {
        user_id : user_id
    },
    select: {
        id: true ,
        title : true ,
        description : true ,
        user : true
    }
   })
    console.log(response);
}

getTodosAndUsersDetails(1);