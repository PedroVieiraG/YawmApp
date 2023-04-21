import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SleepRemiders from './scr/SleepReminder';
import SleepScreen from './scr/SleepDiary';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="SleepReminder"
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: '#333',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === 'SleepReminder') {
              iconName = focused ? 'bed' : 'bed-outline';
            } else if(rn === 'SleepDiary'){
                iconName = focused ? 'book' : 'book-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#7b68ee',
          inactiveTintColor: '#777',
          tabStyle: { backgroundColor: '#1f1f1f' },
        }}
      >
        <Tab.Screen name="SleepReminder" component={SleepRemiders}/>
        <Tab.Screen name="SleepDiary" component={SleepScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
