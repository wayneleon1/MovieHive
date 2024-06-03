import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Explore from "../screens/Explore";
import MyList from "../screens/MyList";
import More from "../screens/More";
import Icon from "react-native-vector-icons/AntDesign";
import { COLORS } from "../components/constraint";

const Tab = createBottomTabNavigator();

export default function ButtonRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.VERYDARK,
          borderColor: COLORS.VERYDARK,
          height: 70,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home";
              break;
            case "Explore":
              iconName = focused ? "search1" : "search1";
              break;
            case "MyList":
              iconName = focused ? "folderopen" : "folderopen";
              break;
            case "More":
              iconName = focused ? "appstore-o" : "appstore-o";
              break;
            default:
              iconName = "circle";
              break;
          }
          const iconSize = focused ? size + 10 : size + 8;
          return <Icon name={iconName} size={iconSize} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="MyList" component={MyList} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}
