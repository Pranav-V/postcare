import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useState, useEffect} from 'react';
import {Button} from '@rneui/themed';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {Fumi} from 'react-native-textinput-effects';



const VasectomyHome = ({navigation}) => {

    const [error, setError] = useState('')
    const [hasData, setData] = useState(false);
    const [date, setDate] = useState('');
    const [MRN, setMRN] = useState('');

    const storeData = async (key, value) => {
      try {
        await AsyncStorage.setItem(key, value)
        return value;
      } catch (e) {
        return null;
      }
    }

    const getData = async (key) => {
      try {
        const value = await AsyncStorage.getItem(key);
        return value;
      } catch(e) {
        return null;
      }
    }
    

    useEffect(() => {
      getData('v_MRN')
        .then(res => {
          if (res != null) {
            setData(true)
          }
        })
    }, [])

    return (
        (!hasData ?
        <>
          <SafeAreaView style = {{flex: 1, justifyContent: 'center'}}>
            <Text style = {[styles.title, {margin:'10%'}]}>Create Profile</Text>
            <Fumi
              style = {styles.inputField}
              label={'Procedure Date'}
              passiveIconColor='#000000'
              labelStyle={{color:'#000000'}}
              iconClass={FontAwesomeIcon}
              iconName={'calendar'}
              iconColor={'#94c942'}
              iconSize={20}
              iconWidth={40}
              inputPadding={22}
              inputStyle={{color:'#000000'}}
              value = {date}
              onChangeText = {setDate}
            />
            <Fumi
              style = {styles.inputField}
              label={'Medical Record Number'}
              passiveIconColor='#000000'
              labelStyle={{color:'#000000'}}
              iconClass={FontAwesomeIcon}
              iconName={'medkit'}
              iconColor={'#94c942'}
              iconSize={20}
              iconWidth={40}
              inputPadding={22}
              inputStyle={{color:'#000000'}}
              value = {MRN}
              onChangeText = {setMRN}
            />
            {error != '' ? <Text style = {styles.error}>{error}</Text> : <></>}
            <Button
                title = "Submit"
                buttonStyle = {{backgroundColor: '#000000'}}
                containerStyle = {[styles.primaryButton, {marginVertical: 30}]}
                titleStyle = {styles.button}
                radius = 'md'
                onPress = {() => {
                  var date_regex = /^\d{2}\/\d{2}\/\d{4}$/ ;
                  var medical_regex = /[Mm][Rr]\d{5,6}/g;
                  if (date == '' || MRN == '') {
                    setError('All fields are required.')
                  } else if (!date_regex.test(date)) {
                    setError('Incorrect date format.\nUse MM/DD/YYYY.')
                  } else if (!medical_regex.test(MRN)) {
                    setError('Incorrect MRN format. \nPlease try again.')
                  }
                  else {
                    storeData('v_MRN', MRN)
                    storeData('v_date', date)
                    setData(true)
                  }
                }}
            />
          </SafeAreaView>
        </>
        :
        <>
          <SafeAreaView style = {{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {styles.subtitle}>👋 Hey there!{`\n`} Ready to check-in?</Text>
            <Text style = {styles.title}>Vasectomy Hub</Text>
            <Button
                title = "Ejaculation Log"
                buttonStyle = {{backgroundColor: '#94c942'}}
                containerStyle = {styles.primaryButton}
                titleStyle = {styles.button}
                radius = 'md'
                onPress={() =>
                  navigation.navigate('EjaculationLog')
                }
            />
            <Button
                title = "Post-Operation Timeline"
                buttonStyle = {{backgroundColor: '#94c942'}}
                containerStyle = {styles.primaryButton}
                titleStyle = {styles.button}
                radius = 'md'
                onPress={() =>
                  navigation.navigate('EjaculationTimeline')
                }
            />
            <Button
                title = "Patient-Portal"
                buttonStyle = {{backgroundColor: '#94c942'}}
                containerStyle = {styles.primaryButton}
                titleStyle = {styles.button}
                radius = 'md'
                onPress={() =>
                  AsyncStorage.clear()
                }
            />
            <Button
                title = "Recovery Log"
                buttonStyle = {{backgroundColor: '#94c942'}}
                containerStyle = {styles.primaryButton}
                titleStyle = {styles.button}
                radius = 'md'
            />
            <Button
                title = "Schedule Appointment"
                buttonStyle = {{backgroundColor: '#94c942'}}
                containerStyle = {styles.primaryButton}
                titleStyle = {styles.button}
                radius = 'md'
                onPress = {() => {Linking.openURL('https://austinurologyinstitute.com/contact/')}}
            />
            <Image 
                  source={require('./images/logo.png')} 
                  style = {{width: undefined, height: '15%', marginTop: '5%', aspectRatio: 1}} 
                  resizeMode = 'contain'
                />
          </SafeAreaView>
        </>)
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: '700',
      textAlign: 'center',
      margin: '5%'
    },
    subtitle: {
      fontSize: 25,
      fontWeight: '500',
      textAlign: 'center',
      color: '#464646'
    },
    error: {
      fontSize: 18,
      fontWeight: '500',
      textAlign: 'center',
      color: 'red',
      margin: 5
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
    },
    inputField: {
      marginVertical: 10,
      marginLeft: '15%',
      marginRight: '15%',
      width: '70%',
      borderWidth: 2,
      borderColor: '#464646',
      justifyContent:'center',
      borderRadius: 8
    }
});

export default VasectomyHome;