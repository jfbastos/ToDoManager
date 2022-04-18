import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import App from '../screens/App';
import DoneTasks from '../screens/DoneTasks';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Task from '../screens/Task';
import ToDoTasks from '../screens/ToDoTasks';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export const TaskTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'skyblue',
                inactiveTintColor: 'gray',
                iconStyle: { width: 20, height: 20 },
            }}>
            <Tab.Screen name="To Do" component={ToDoTasks} />
            <Tab.Screen name="Done" component={DoneTasks} />
        </Tab.Navigator>
    );
};
const Routes = () => {
    return (
        <Stack.Navigator headerMode="screen">
            <Stack.Screen name="App" component={App} options={{ headerShown: false }} />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="TaskList" component={TaskTab} />
            <Stack.Screen name="Task" component={Task}/>
        </Stack.Navigator>
    );
};
export default Routes;