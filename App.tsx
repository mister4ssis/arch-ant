import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button,TouchableOpacity, Image, ImageBackground, Linking } from "react-native";
import { LinearGradient } from "react-native-svg";

import { useFonts, Inter_900Black, Inter_700Bold } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    Inter_700Bold
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ImageBackground
    source={require("./assets/bg2.jpg")}
    style={{ width: "100%", height: "100%" }}
    >
      <Text style={{fontFamily: 'Inter_900Black',color:"white", fontSize:50, top:70, left:10}}>ARC</Text>
      <Text style={{fontFamily: 'Inter_900Black',color:"white", fontSize:50, top:35, left:10}}>BUILDING</Text>
      <View style={{flex:1, alignItems:"flex-start", flexDirection:"row", top:60, left:10}}>
          <Text style={{fontFamily: 'Inter_700Bold', fontSize:13, color:"#ddd"}}>CONSTRUA SUA NOVA CASA, DO SEU JEITO</Text>
      </View>
      <TouchableOpacity style={{position: "absolute", top: 300, right: 10, borderRadius:30, backgroundColor:"linear-gradient"}} onPress={() => {console.log("teste");
      }}>
                <Text style={{fontFamily: 'Inter_700Bold', fontSize:20, color:"#ddd"}}>Começar -{`>`}</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={{position: "absolute", top: 60, right: 10, borderRadius:30}}>
                <Text style={{fontFamily: 'Inter_700Bold', fontSize:20, color:"#ddd"}}>Começar -{`>`}</Text>
      </TouchableOpacity> */}
    </ImageBackground>
    
  );
}
