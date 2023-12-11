import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Splash(){
  const navigation = useNavigation();
  return(
    <View style={style.container}>
      
      <View style={style.logo}>
        <Image source={require("./assets/splashHours.png")}
        style={style.logoHours}
        />
      </View>

      <View style={style.about}>

        <Text style={style.frase}>Tempo bem gerenciado é sucesso garantido.</Text>
        
        <View style={style.posButtom}>
          <TouchableOpacity style={style.buttom} onPress={() => navigation.navigate('Home')}>
            <Text style={style.login}>Começar</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  }, 
  logo:{
    flex: 2,
    backgroundColor: "#fffffd",
    justifyContent: "center",
    alignItems: "center",
  },
  about:{
    flex: 1,
    backgroundColor: "#28346d",
    borderTopLeftRadius: 50,
  },
  buttom:{
    backgroundColor: "#fffffd",
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  login:{
    color: "#28346d",
  }, 
  frase:{
    color: "#fffffd",
    fontSize: 25,
    marginLeft: 25,
    marginTop: 50,
  },
  logoHours:{
    width: 300,
    height:300,
  },
  posButtom:{
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  }
});