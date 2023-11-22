
import React, {useCallback} from 'react';
import {StyleSheet,Button,View,SafeAreaView,Alert,TextInput, Image,Text,Linking,Pressable,TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CustomButton from './CustomButton';
import CustomButton4 from './CustomButton4';



const link1 = 'https://www.paypal.com/paypalme/getupandmove?country.x=US&locale.x=en_US';
const link2='https://www.paypal.com/paypalme/getupandmove?country.x=US&locale.x=en_US'


const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
  
};
<Image
   source={require('./newLogo.png')}
   style={{width: 10, height: 10,
   resizeMode:'contain',
   justifyContent:'right'}}
/>
const Teams = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return(
    <View style = {styles.container}>
      
      
                  <View style = {styles.button}>
                  <Text style={styles.buttonText}>
                  <OpenURLButton title="Create Teams" url={link1}>Create Teams</OpenURLButton></Text></View>
                  <CustomButton4 title="Join Team" onPress={()=> navigation.push("JoinTeam")}></CustomButton4>
                  <CustomButton4 title="Current Teams" onPress={()=> navigation.push("CurrentTeams")}></CustomButton4>
                  <CustomButton4 title="About Teams" onPress={()=> navigation.push("AboutTeams")}></CustomButton4>
                  <View style = {styles.button}>
                  
                  <OpenURLButton url={link2}>Paypal</OpenURLButton>
                  <Text style={styles.buttonText}></Text>
               </View>
      
              
 

      <Text testID="pressable_press_console"></Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'deepskyblue',
  },
button:{
    borderRadius:1,
    padding:1,
    backgroundColor:'darkseagreen',
    justifyContent:'center',
    alignItems:'center'
},
buttonText:{
  color:'#ggg' 
}
});

export default Teams