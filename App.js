import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStory from './screens/WriteStory'
import ReadStory from './screens/ReadStory'
import { render } from 'react-dom';

export default class App extends React.Component{
  render(){
   return (
   
     <AppContainer/>
    
    );
   }
}

const TabNavigator=createBottomTabNavigator({
  WriteScreen:{screen:WriteStory},
  ReadScreen:{screen:ReadStory}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon: ()=>{
      const routeName=navigation.state.routeName;
      console.log(route)
      if(routeName==="WriteScreen"){
        return(
          <Image
          source={require('./images/write.png')}
          style={{width:50,height:50}}/>
        )
      }
      else if(routeName==="ReadScreen"){
        return(
          <Image
          source={require('./images/read.png')}
          style={{width:100,height:100}}/>
        )
      }
    }
  })
}
)

const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
