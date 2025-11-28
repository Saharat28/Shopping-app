import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import MainPage from "./pages/MainPage";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import UserProfile from "./pages/UserProfile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#3b82f6" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="HomeMain"
        component={MainPage}
        options={{ title: "Home" }}
      />
      <Stack.Screen name="Detail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}></Text>
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={ShoppingCart}
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}></Text>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={UserProfile}
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}></Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
