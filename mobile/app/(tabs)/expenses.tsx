import React,{useEffect,useState} from 'react';
import {Text,View,ScrollView} from 'react-native';
import {Page,Heading,Card,C,Field,SmallButton} from '../../components/UI';
import {read,write} from '../../components/Store';
type Expense={id:string,title:string,amount:number};
export default function Expenses(){const [items,setItems]=useState<Expense[]>([]);const [title,setTitle]=useState('');const [amount,setAmount]=useState('');
 useEffect(()=>{read<Expense[]>('expenses',[]).then(setItems)},[]);
 async function add(){const n=Number(amount);if(!title.trim()||!Number.isFinite(n)||n<=0)return;const next=[{id:Date.now().toString(),title:title.trim(),amount:n},...items];setItems(next);await write('expenses',next);setTitle('');setAmount('');}
 const total=items.reduce((s,x)=>s+x.amount,0);
 return <Page><Heading title="Expenses" sub="Keep an eye on everyday spending."/><Card><Text style={{color:C.muted}}>TOTAL RECORDED</Text><Text style={{fontSize:32,fontWeight:'800',color:C.ink,marginTop:6}}>₹{total.toFixed(2)}</Text></Card><View style={{gap:8,marginBottom:14}}><Field value={title} onChangeText={setTitle} placeholder="What did you spend on?"/><Field value={amount} onChangeText={setAmount} placeholder="Amount in ₹"/><SmallButton title="Add expense" onPress={add}/></View><Text style={{fontWeight:'800',fontSize:18,color:C.ink,marginBottom:10}}>Recent expenses</Text><ScrollView>{items.map(x=><Card key={x.id}><View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:C.ink,fontSize:16}}>{x.title}</Text><Text style={{color:C.ink,fontWeight:'700'}}>₹{x.amount.toFixed(2)}</Text></View></Card>)}</ScrollView></Page>}
