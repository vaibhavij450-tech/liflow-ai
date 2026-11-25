import React,{useEffect,useState} from 'react';
import {Text,View,TouchableOpacity,ScrollView} from 'react-native';
import {Page,Heading,Card,C,Field,SmallButton} from '../../components/UI';
import {read,write} from '../../components/Store';
type Item={id:string,name:string,checked:boolean};
export default function Groceries(){const [items,setItems]=useState<Item[]>([]);const [draft,setDraft]=useState('');
 useEffect(()=>{read<Item[]>('groceries',[]).then(setItems)},[]);
 async function save(v:Item[]){setItems(v);await write('groceries',v)}
 return <Page><Heading title="Groceries" sub="Your shopping list, ready when you are."/><View style={{flexDirection:'row',gap:8,marginBottom:15}}><Field value={draft} onChangeText={setDraft} placeholder="Add grocery item"/><SmallButton title="Add" onPress={()=>{if(draft.trim()){save([{id:Date.now().toString(),name:draft.trim(),checked:false},...items]);setDraft('')}}}/></View><ScrollView>{items.length===0?<Card><Text style={{color:C.muted}}>Your list is empty. Add items before your next shop.</Text></Card>:items.map(x=><Card key={x.id}><View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}><TouchableOpacity onPress={()=>save(items.map(y=>y.id===x.id?{...y,checked:!y.checked}:y))}><Text style={{fontSize:16,color:x.checked?C.muted:C.ink,textDecorationLine:x.checked?'line-through':'none'}}>{x.checked?'☑':'○'}  {x.name}</Text></TouchableOpacity><TouchableOpacity onPress={()=>save(items.filter(y=>y.id!==x.id))}><Text style={{color:'#B34D5B'}}>Remove</Text></TouchableOpacity></View></Card>)}</ScrollView><Text style={{color:C.muted,marginTop:10}}>{items.filter(x=>x.checked).length}/{items.length} items collected</Text></Page>}
