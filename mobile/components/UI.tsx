import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
export const C={bg:'#F6F7FB',ink:'#20213A',muted:'#77798D',primary:'#5B5BD6',card:'#FFFFFF',line:'#E9EAF1',green:'#16865B'};
export function Page({children}:any){return <View style={s.page}>{children}</View>}
export function Heading({title,sub}:any){return <View style={{marginBottom:20}}><Text style={s.title}>{title}</Text>{sub?<Text style={s.sub}>{sub}</Text>:null}</View>}
export function Card({children}:any){return <View style={s.card}>{children}</View>}
export function Field({value,onChangeText,placeholder}:any){return <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor="#A2A3B1" style={s.input}/>}
export function Action({title,onPress}:any){return <TouchableOpacity onPress={onPress} style={s.action}><Text style={{color:'white',fontWeight:'700'}}>{title}</Text></TouchableOpacity>}
export function SmallButton({title,onPress}:any){return <TouchableOpacity onPress={onPress} style={s.small}><Text style={{color:C.primary,fontWeight:'700'}}>{title}</Text></TouchableOpacity>}
const s=StyleSheet.create({page:{flex:1,backgroundColor:C.bg,padding:20,paddingTop:58},title:{fontSize:29,fontWeight:'800',color:C.ink},sub:{fontSize:14,color:C.muted,marginTop:5},card:{backgroundColor:C.card,borderRadius:18,padding:16,marginBottom:13,borderWidth:1,borderColor:'#F0F0F5'},input:{backgroundColor:'white',borderWidth:1,borderColor:C.line,borderRadius:12,padding:13,fontSize:15,flex:1,color:C.ink},action:{backgroundColor:C.primary,padding:14,borderRadius:12,alignItems:'center',marginTop:10},small:{paddingHorizontal:12,paddingVertical:9,backgroundColor:'#EEEEFF',borderRadius:10}});
