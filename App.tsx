import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, View, Button} from 'react-native';
import Video from 'react-native-video';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',
      }}>
      <Video
        repeat={false}
        fullscreenAutorotate={false}
        // Can be a URL or a local file.
        source={{
          // uri: 'https://videos.pexels.com/video-files/4121820/4121820-sd_640_360_25fps.mp4',
          // uri: 'https://videos.pexels.com/video-files/5538183/5538183-sd_960_506_25fps.mp4'
          // uri: 'https://xsj-video.699pic.com/03/dw/1z.mp4',
          uri: 'https://xsj-video.699pic.com/04/22/a9.mp4',
        }}
        style={{flex: 1, borderWidth: 2, width: '100%'}}
        progressUpdateInterval={30}
        resizeMode="contain"
        automaticallyWaitsToMinimizeStalling={false}
        preferredForwardBufferDuration={3000}
      />
      <Button
        title="Navigate to Detail"
        onPress={() => navigation.navigate('Details')}
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
