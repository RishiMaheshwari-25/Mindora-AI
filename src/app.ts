import express from "express";
import runGraph from "./ai/graph.ai.js"
const app=express();

app.get("/",async (req,res)=>{
    
    const result=await runGraph("wriye a factorial of a number in js?")
    res.json(result);
})
export default app;