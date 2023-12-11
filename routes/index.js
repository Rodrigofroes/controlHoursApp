import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './pages/Splash';
import Home from './pages/Home';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}