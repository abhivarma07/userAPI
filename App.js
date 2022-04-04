import React , {useState , useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Axios from 'axios'
import {Button, Center , Nati, NativeBaseProvider} from 'native-base'
import User from './components/User';

// const key = 'smkwn'
// const URL = 'https://randomuser.me/api/${key}/params'


const App = () => {


  const [details, setdetails] = useState(null)

  const fetchDetails = async () => {
    try{
    
      const {data} = await Axios.get('https://randomuser.me/api/')
      const details = data.results[0]

      console.log(details.email)

      setdetails(details)


    } catch (error){
      console.log(error)
    }
  }


  useEffect(() => {
    fetchDetails()
  }, [])

  if(!details){
    return (
      <View style={styles.container}>
        <Text>Loading..</Text>
      </View>
    )
  }

  else{
    return(
      <NativeBaseProvider styles = {styles.container}>
        <View style = {styles.container}>
          <View style = {styles.container}>
            <User/>
            <Button
            size = "md"
            style = {styles.button}
            onPress = {() => fetchDetails()}
            colorScheme = "primary"
            >
            <Text>Welcome</Text>
            </Button>
          </View>
        </View>
      </NativeBaseProvider>
      
    )
  }

  
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex : 1 ,
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "#222831"
  },

  button : {
    marginTop : 30,
    paddingHorizontal : 30 ,
  }
})
