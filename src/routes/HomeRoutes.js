import { createStackNavigator } from "@react-navigation/stack";
import Featured from "../screens/Featured";
import Series from "../screens/Series";
import Original from "../screens/Original";
import Films from "../screens/Films";

const Stack = createStackNavigator();

export default function HomeRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Featured"
    >
      <Stack.Screen name="Featured" component={Featured} />
      <Stack.Screen name="Films" component={Films} />
      <Stack.Screen name="Series" component={Series} />
      <Stack.Screen name="Original" component={Original} />
    </Stack.Navigator>
  );
}
