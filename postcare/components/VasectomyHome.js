import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import {useState, useEffect} from 'react'
import {Button} from '@rneui/themed'

import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';

const VasectomyHome = ({navigation}) => {
    var hasData = false

    return (
        (!hasData ?
        <>
          <SafeAreaView style = {{flex: 1, justifyContent: 'center'}}>
            <Text style = {styles.title}>Create Profile</Text>
            <Kohana
              style={{ backgroundColor: '#f9f5ed' }}
              label={'Line'}
              iconClass={MaterialsIcon}
              iconName={'directions-bus'}
              iconColor={'#f4d29a'}
              inputPadding={16}
              labelStyle={{ color: '#91627b' }}
              inputStyle={{ color: '#91627b' }}
              labelContainerStyle={{ padding: 20 }}
              iconContainerStyle={{ padding: 20 }}
              useNativeDriver
            />
          </SafeAreaView>
        </>
        :
        <>
          <SafeAreaView style = {{flex: 2, justifyContent: 'center'}}>
            <Text style = {styles.title}>Vasectomy Hub</Text>
            <Button
                title = "Ejaculation Counter"
                buttonStyle = {{backgroundColor: '#94c942'}}
                containerStyle = {styles.primaryButton}
                titleStyle = {styles.button}
                radius = 'md'
            />
            <Button
                title = "Post-Operation Timeline"
                buttonStyle = {{backgroundColor: '#94c942'}}
                containerStyle = {styles.primaryButton}
                titleStyle = {styles.button}
                radius = 'md'
            />
            <Button
                title = "Patient-Portal"
                buttonStyle = {{backgroundColor: '#94c942'}}
                containerStyle = {styles.primaryButton}
                titleStyle = {styles.button}
                radius = 'md'
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
      margin: '10%'
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
    },
});

export default VasectomyHome;