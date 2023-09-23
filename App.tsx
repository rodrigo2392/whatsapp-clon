import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/views/Home';
import MessageScreen from './src/views/Message';
import TabContext from './src/context/TabsContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <TabContext>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Message" component={MessageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TabContext>
  );
}

export default App;
