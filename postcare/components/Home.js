
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
            <SafeAreaView style = {{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
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
                    style = {{marginTop: '5%'}}
                    title = "Austin Urology Institute"
                    buttonStyle = {{backgroundColor: '#464646'}}
                    containerStyle = {styles.secondaryButton}
                    titleStyle = {styles.button}
                    radius = 'md'
                    onPress = {() => Linking.openURL('https://austinurologyinstitute.com')}
                />
                <Button
                    title = "More"
                    buttonStyle = {{backgroundColor: '#464646'}}
                    containerStyle = {styles.secondaryButton}
                    titleStyle = {styles.button}
                    radius = 'md'
                />
                <Image 
                  source={require('./images/logo.png')} 
                  style = {{width: undefined, height: '15%', marginTop: '5%', aspectRatio: 1}} 
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
      marginLeft: '15%',
      marginRight: '15%',
      width: '70%',
    }
});

export default Home;

