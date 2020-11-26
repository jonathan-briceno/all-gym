
import React, { Component } from 'react';
import YouTube from 'react-native-youtube'
import { ScrollView, View, StyleSheet, Button , Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import t from 'tcomb-form-native'; // 0.6.9


const Form = t.form.Form;
const Stack = createStackNavigator();

const User = t.struct({
  Edad: t.String,
  peso: t.String,
  "tomas alguna dieta?": t.Boolean,
  cintura: t.String,
  pecho: t.String,
  abdomen: t.String,
  estatura: t.String 
});

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Ingresa tus datos"
        onPress={() => navigation.navigate('All Gym - Datos')}
      />
    </View>
  );
}

function GymForm({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
     <View style={styles.container}>
      <Form 
        type={User} 
      />
      <Button
        title="Finalizar"
        onPress={() => navigation.navigate('All Gym - Rutina')}
      />
    </View>
  </ScrollView>
  );
}


function gymRoutine() {
  return (
    <View style={styles.container}>
        <YouTube
        apiKey="XXXXXXXXXX"
        videoId="iQ3g-gqKe_A" // The YouTube video ID
        play // control playback of video with true/false
        fullscreen={false} // video should play in fullscreen or inline
        loop={false} // control whether the video should loop when ended
        style={styles.youtube}
        />
      </View>

  );
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="All Gym - Inicio" component={HomeScreen} />
          <Stack.Screen name="All Gym - Datos" component={GymForm} />
          <Stack.Screen name="All Gym - Rutina" component={gymRoutine} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  youtube: {
    alignSelf: 'stretch',
    height: 300
    }
});
