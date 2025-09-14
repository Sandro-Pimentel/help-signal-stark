import { createStackNavigator } from "@react-navigation/stack";

const { Screen, Navigator } = createStackNavigator();

import Home from "../screens/Home/Home";
import HelpForm from "../screens/HelpForm/HelpForm";
import Success from "../screens/Success/Success";

export default function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="home"
                component={Home}
                options={{
                    //title: "Main Menu",
                    //headerTintColor: "blue",
                    headerShown: false,
                }}
            />
            <Screen
                name="helpform"
                component={HelpForm}
                options={{
                    headerShown: false,
                }}
            />
            <Screen
                name="success"
                component={Success}
                options={{
                    headerShown: false,
                }}
            />
        </Navigator>
    )
}
