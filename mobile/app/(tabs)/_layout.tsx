import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const icons: Record<string, any> = { index:'calendar-outline', habits:'checkmark-circle-outline', expenses:'wallet-outline', groceries:'cart-outline' };
export default function TabLayout() {
 return <Tabs screenOptions={({route})=>({headerShown:false, tabBarActiveTintColor:'#5B5BD6', tabBarInactiveTintColor:'#8A8A9A', tabBarStyle:{height:66,paddingTop:8,paddingBottom:8,borderTopColor:'#EEEEF3'}, tabBarIcon:({color,size})=><Ionicons name={icons[route.name] || 'ellipse'} color={color} size={size}/>})}>
  <Tabs.Screen name="index" options={{title:'Today'}}/><Tabs.Screen name="habits" options={{title:'Habits'}}/><Tabs.Screen name="expenses" options={{title:'Expenses'}}/><Tabs.Screen name="groceries" options={{title:'Groceries'}}/>
 </Tabs>;
}
