import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

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

function HomeScreen({navigation}) {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <View style={{flex: 1}}>
      <Text>HomeScreen</Text>
      <TabView
        style={{flex: 1}}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={i => {
          setIndex(i);
          console.log('onIndexChange', i);
        }}
        initialLayout={{width: layout.width}}
      />
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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
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
