//import packages
import express from "express";
import morgan from "morgan";
import ViteExpress from 'vite-express';
import handlerFunctions from "./controller.js";

//set up app instance
const app = express()

//set up middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(express.json())


//* Routes go here:
const {getInvoices, addItem, deleteItem, editItem} = handlerFunctions

app.get('/invoice', getInvoices)
app.post('/addInvoice', addItem)
app.delete('/removeInvoice/:id', deleteItem)
app.put('/editInvoice/:id', editItem)

//open up door to server
ViteExpress.listen(app,2222,() => console.log(`Server running at 2222. http://localhost:2222`))