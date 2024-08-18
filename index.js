const express = require('express');

const users = [
    {
        productId: '1',
        image:"https://assets.unileversolutions.com/v1/1868094.png?im=AspectCrop=(351,351);Resize=(351,351)",
        name:"Vanila",
        price:18,
        status: false,
    },{
        productId:'2',
        image:"https://assets.unileversolutions.com/v1/1868175.png?im=AspectCrop=(351,351);Resize=(351,351)",
        name:"choclate",
        price:22,
        status: false,
    },{
     productId:'3'  ,
     image:"https://assets.unileversolutions.com/v1/1868113.png?im=AspectCrop=(351,351);Resize=(351,351)",
     name: "Strawberry",
     price:18,
     status: false,
    },{
        productId: '4' ,
        image:"https://assets.unileversolutions.com/v1/1868177.png?im=AspectCrop=(680,680);Resize=(680,680)",
        name: "AamRas Bar",
        price:27,
        status: false,
     },
    ,{
        productId: '5' ,
        image:"https://assets.unileversolutions.com/v1/1869482.png?im=AspectCrop=(351,351);Resize=(351,351)",
        name: "feast Bar",
        price: 40,
        status: false,
       
    },{
        productId: '6' ,
        image:"https://assets.unileversolutions.com/v1/1862862.png?im=AspectCrop=(680,680);Resize=(680,680)",
        name: "Choco-Vanila",
        price: 27,
        status: false,
       
    },{
        productId: '7' ,
        image:"https://assets.unileversolutions.com/v1/1862828.png?im=AspectCrop=(680,680);Resize=(680,680)",
        name: "Butter-Scothch",
        price:23,
        status: false,
    },
    {
      productId: '8' ,
      image:"https://assets.unileversolutions.com/v1/1862841.png?im=AspectCrop=(270,270);Resize=(270,270)",
      name: "Chocobar",
      price:18,
      status: false,
    },
    {
      productId: '7' ,
      image:"https://assets.unileversolutions.com/v1/33714264.png?im=AspectCrop=(680,680);Resize=(680,680)",
      name: "Desi-Kulfi",
      price:54,
      status: false,
    },
    {
      productId: '7' ,
      image:"https://assets.unileversolutions.com/v1/1862840.png?im=AspectCrop=(270,270);Resize=(270,270)",
      name: "Double-Choclate",
      price:23,
      status: false,
    },
]

const app = express();
const PORT = 8000;
 

//html rendering

// app.get("/users",(req,res)=>{
//     const Html = `
//     <ul>
//     ${users.map((user) =>`<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `
//     res.send(Html);
// })

app.get("/api/users", (req,res)=>{
    return res.json(users)
})

app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.productId === id);
    return res.json(user)
})   




app.listen(PORT,()=> console.log(`Server Strated at Port ${PORT}`))    
  

