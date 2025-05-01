const express = require('express');
const connection = require('./connection');
const app = express();
app.use(express.json()); // To understand JSON
const port = 3000
app.listen(port,()=>{
    console.log(`Server is up! Jump here: http://localhost:${port}`);
});

app.get("/expenses",(request,response)=>{
    const sql = 'SELECT * FROM expenses;';
    connection.query(sql, (error,data)=>{
        if (error) {return response.status(500).json({message: `Internal Server Error: ${error}`})}
        else{return response.status(200).json({message:"Records fetched successfully!",data})}
    })
});

app.get("/expenses/:id",(request,response)=>{
    const sql = "SELECT * FROM expenses WHERE ID = ?;";
    let id = request.params.id;
    connection.query(sql,id,(error,data)=>{
        if(error){return response.status(500).json({message:`Internal Server Error: ${error}`})}
        else{return response.status(200).json(data)}
    })
})

app.post("/expenses",(request,response)=>{
    const sql = "INSERT INTO expenses (name,description,category_id,value) VALUES (?)";
    let values = [request.body.name,request.body.description,request.body.category_id,request.body.value];
    connection.query(sql,[values],(error,data)=>{
        if(error){return response.status(500).json({message:`Internal Server Error: ${error}`})}
        else{return response.status(201).json({message: "Record created successfully!"})}
    });
})

app.delete("/expenses/:id",(request,response)=>{
    const sql = "DELETE FROM expenses WHERE ID = ?";
    let id = request.params.id
    connection.query(sql,id,(error,data)=>{
        if(error){return response.status(500).json({message:`Internal Server Error: ${error}`})}
        else{return response.status(201).json({message: "Record created successfully!"})}
    });
})
// app.post("/expenses")