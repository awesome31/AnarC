import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IssueListScreen from '../screens/IssueList/IssueList.screen';
import IssueDetailsScreen from '../screens/IssueDetails/IssueDetails.screen';

const MainStack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <MainStack.Navigator
      initialRouteName="IssueList"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="IssueList" component={IssueListScreen} />
      <MainStack.Screen name="IssueDetails" component={IssueDetailsScreen} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
