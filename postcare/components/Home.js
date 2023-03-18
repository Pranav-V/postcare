import {
  SafeAreaView,
  Linking,
  StyleSheet,
  Text,
  Image,
  ScrollView
} from 'react-native';

import {Button} from '@rneui/themed'

const Home = ({navigation}) => {

    return (
        <>  
            <SafeAreaView style = {{flex: .85, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {styles.title}>PostCare</Text>
                <Text style = {styles.subtitle}>Select Operation</Text>
                <Button
                    title = "Vasectomy"
                    buttonStyle = {{backgroundColor: '#94c942'}}
                    containerStyle = {styles.primaryButton}
                    titleStyle = {styles.button}
                    radius = 'md'
                    onPress={() =>
                        navigation.navigate('VasectomyHome')
                    }
                />
                <Button
                    title = "Kidney Stone Removal"
                    buttonStyle = {{backgroundColor: '#94c942'}}
                    containerStyle = {styles.primaryButton}
                    titleStyle = {styles.button}
                    radius = 'md'
                    onPress={() =>
                      navigation.navigate('KidneyHome')
                  }
                />
                <Button
                    title = "More"
                    buttonStyle = {{backgroundColor: '#464646'}}
                    containerStyle = {styles.secondaryButton}
                    titleStyle = {styles.button}
                    radius = 'md'
                />
            </SafeAreaView>
            <SafeAreaView  style = {{flex: .15, justifyContent: 'center', alignItems: 'center'}}>
              <Image 
                    source={require('./images/logo.png')} 
                    style = {styles.logo} 
                    resizeMode = 'contain'
              />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 40,
      fontWeight: '700',
      textAlign: 'center',
      margin: '5%'
    },
    subtitle: {
      fontSize: 25,
      fontWeight: '500',
      textAlign: 'center',
      margin: '5%'
    },
    button: {
      fontSize: 20,
      fontWeight: '500',
      textAlign: 'center',
      margin: 10
    },
    primaryButton: {
      marginVertical: 10,
      marginLeft: '15%',
      marginRight: '15%',
      width: '70%',
    },
    secondaryButton: {
      marginVertical: 10,
      marginLeft: '30%',
      marginRight: '30%',
      width: '40%',
    },
    logo: {
      width: undefined, 
      height: '100%', 
      aspectRatio: 1,
    }
});

export default Home;

