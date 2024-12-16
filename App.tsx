import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {
  KeyboardProvider,
  useReanimatedKeyboardAnimation,
} from 'react-native-keyboard-controller';
import Reanimated, {useAnimatedStyle} from 'react-native-reanimated';
function FirstRoute() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>FirstRoute</Text>
    </View>
  );
}

function SecondRoute() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>SecondRoute</Text>
    </View>
  );
}

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const routes = [
  {key: 'first', title: 'First'},
  {key: 'second', title: 'Second'},
];

const Stack = createStackNavigator();

const AnimatedTextInput = Reanimated.createAnimatedComponent(TextInput);

function HomeScreen({navigation}) {
  const {height} = useReanimatedKeyboardAnimation();

  const textInputStyle = useAnimatedStyle(
    () => ({
      height: 50,
      width: '100%',
      backgroundColor: '#BCBCBC',
      transform: [{translateY: height.value}],
    }),
    [],
  );

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <Text>HomeScreen</Text>
      <AnimatedTextInput style={textInputStyle} />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>DetailsScreen</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
