import React,{useEffect,useState} from 'react';
import {View,Text,TextInput,TouchableOpacity,ScrollView,Alert} from 'react-native';
import {Page,Heading,Card,Action,C,SmallButton} from '../../components/UI';
import {read,write} from '../../components/Store';
type Task={id:string,title:string,done:boolean};
export default function Today(){
 const [tasks,setTasks]=useState<Task[]>([]);const [draft,setDraft]=useState('');const [plan,setPlan]=useState('');
 useEffect(()=>{read<Task[]>('tasks',[]).then(setTasks)},[]);
 async function update(next:Task[]){setTasks(next);await write('tasks',next)}
 async function add(){if(!draft.trim())return;await update([{id:Date.now().toString(),title:draft.trim(),done:false},...tasks]);setDraft('');}
 async function suggest(){const api=process.env.EXPO_PUBLIC_API_URL;if(!api){setPlan('Demo tip: Pick your three most important tasks, schedule breaks, and start with the smallest one. Add a Gemini API URL to enable personalized AI planning.');return;}try{const r=await fetch(api+'/api/plan',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({tasks:tasks.filter(t=>!t.done).map(t=>t.title)})});const d=await r.json();setPlan(d.plan||'No suggestion returned.');}catch{setPlan('Could not reach the AI server. Check your API URL and network.');}}
 const done=tasks.filter(t=>t.done).length;
 return <Page><ScrollView showsVerticalScrollIndicator={false}>
 <Heading title="Good day!" sub="A little structure makes a big difference."/>
 <Card><Text style={{fontSize:13,color:C.muted}}>TODAY'S PROGRESS</Text><Text style={{fontSize:30,fontWeight:'800',color:C.ink,marginTop:5}}>{done}/{tasks.length} tasks done</Text><View style={{height:8,backgroundColor:'#EEEEF5',borderRadius:8,marginTop:12,overflow:'hidden'}}><View style={{height:8,width:`${tasks.length?done/tasks.length*100:0}%`,backgroundColor:C.primary}}/></View></Card>
 <Text style={{fontSize:19,fontWeight:'800',color:C.ink,marginBottom:10}}>My tasks</Text>
 <View style={{flexDirection:'row',gap:8,marginBottom:14}}><TextInput value={draft} onChangeText={setDraft} placeholder="Add a task..." style={{flex:1,backgroundColor:'white',borderWidth:1,borderColor:C.line,borderRadius:12,padding:12}}/><SmallButton title="Add" onPress={add}/></View>
 {tasks.length===0?<Card><Text style={{color:C.muted}}>No tasks yet. Add something you want to get done today.</Text></Card>:tasks.map(t=><Card key={t.id}><TouchableOpacity onPress={()=>update(tasks.map(x=>x.id===t.id?{...x,done:!x.done}:x))} style={{flexDirection:'row',alignItems:'center',gap:12}}><Text style={{fontSize:21,color:t.done?C.green:C.muted}}>{t.done?'☑':'○'}</Text><Text style={{fontSize:16,color:C.ink,flex:1,textDecorationLine:t.done?'line-through':'none'}}>{t.title}</Text><TouchableOpacity onPress={()=>update(tasks.filter(x=>x.id!==t.id))}><Text style={{color:'#B34D5B'}}>Remove</Text></TouchableOpacity></TouchableOpacity></Card>)}
 <Text style={{fontSize:19,fontWeight:'800',color:C.ink,marginTop:8}}>AI day planner</Text><Text style={{color:C.muted,marginTop:4}}>Get a simple plan based on your unfinished tasks.</Text><Action title="Create my day plan" onPress={suggest}/>{!!plan&&<Card><Text style={{color:C.ink,lineHeight:22}}>{plan}</Text></Card>}
 </ScrollView></Page>
}
