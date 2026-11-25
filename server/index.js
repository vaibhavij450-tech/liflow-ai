require('dotenv').config();
const express=require('express');
const cors=require('cors');
const {GoogleGenerativeAI}=require('@google/generative-ai');
const app=express();
app.use(cors());
app.use(express.json({limit:'32kb'}));
app.get('/health',(_,res)=>res.json({ok:true,service:'LifeFlow AI API'}));
app.post('/api/plan',async(req,res)=>{
 const tasks=Array.isArray(req.body.tasks)?req.body.tasks.slice(0,20).map(String):[];
 if(!tasks.length)return res.status(400).json({error:'Add at least one unfinished task.'});
 if(!process.env.GEMINI_API_KEY)return res.json({plan:'Demo plan: Start with your most important task, group similar small tasks together, take a short break, and leave a little buffer time. Add GEMINI_API_KEY to enable personalized AI planning.'});
 try{
  const genAI=new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model=genAI.getGenerativeModel({model:process.env.GEMINI_MODEL||'gemini-2.5-flash'});
  const prompt=`Create a realistic, encouraging daily schedule for these tasks. Prioritize them, include breaks, and keep the answer concise with time blocks. Do not invent fixed appointments. Tasks: ${tasks.join('; ')}`;
  const result=await model.generateContent(prompt);
  res.json({plan:result.response.text()});
 }catch(e){console.error(e);res.status(502).json({error:'AI planning failed. Check the server API key and try again.'});}
});
const port=Number(process.env.PORT)||4000;
app.listen(port,'0.0.0.0',()=>console.log(`LifeFlow API listening on ${port}`));
