import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainDrawer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Register} name="Register" />
        <Stack.Screen name="HomeScreen">
          {() => (
            <Drawer.Navigator
              screenOptions={{
                drawerStyle: {
                  backgroundColor: "#6b3fa0",
                  width: 230,
                },
              }}
            >
              <Drawer.Screen
                name="HomeScreen"
                component={HomeScreen}
              />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainDrawer;
