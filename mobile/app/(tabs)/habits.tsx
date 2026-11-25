import React,{useEffect,useState} from 'react';
import {Text,TouchableOpacity,ScrollView,View} from 'react-native';
import {Page,Heading,Card,C,Field,SmallButton} from '../../components/UI';
import {read,write} from '../../components/Store';
type Habit={id:string,name:string,done:boolean};
export default function Habits(){const [items,setItems]=useState<Habit[]>([]);const [draft,setDraft]=useState('');
 useEffect(()=>{read<Habit[]>('habits',[]).then(setItems)},[]);
 async function save(v:Habit[]){setItems(v);await write('habits',v)}
 return <Page><Heading title="Habits" sub="Build consistency, one check-in at a time."/><View style={{flexDirection:'row',gap:8,marginBottom:16}}><Field value={draft} onChangeText={setDraft} placeholder="e.g. Read 10 pages"/><SmallButton title="Add" onPress={()=>{if(draft.trim()){save([{id:Date.now().toString(),name:draft.trim(),done:false},...items]);setDraft('')}}}/></View><ScrollView>{items.length===0?<Card><Text style={{color:C.muted}}>Add habits you want to practice every day.</Text></Card>:items.map(h=><Card key={h.id}><TouchableOpacity onPress={()=>save(items.map(x=>x.id===h.id?{...x,done:!x.done}:x))} style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}><Text style={{fontSize:16,color:C.ink}}>{h.name}</Text><Text style={{fontSize:22,color:h.done?C.green:C.muted}}>{h.done?'✓':'○'}</Text></TouchableOpacity></Card>)}</ScrollView><Text style={{color:C.muted,marginTop:10}}>{items.filter(x=>x.done).length} of {items.length} habits completed today</Text></Page>}
