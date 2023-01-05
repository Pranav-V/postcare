
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Alert
  } from 'react-native';
  
import {Button} from '@rneui/themed'
import {useEffect, useState} from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';
import AsyncStorage from '@react-native-async-storage/async-storage';



const EjaculationLog = ({navigation}) => {

    const [ejaculation, setEjaculations] = useState(0);

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
        AsyncStorage.clear()
        getData('v_ejaculations')
            .then(res => {
                if (res != null) {
                    console.log(res)
                    setEjaculations(Number(res))
                }
            })
    }, [])
    
    return (
        <>
            <SafeAreaView style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {styles.subtitle}>{ejaculation < 15 ? `Keep on going! \n` : (ejaculation < 25 ? `Almost there! \n` : (ejaculation == 30 ? `🎊 Complete! \n` : `Just a bit more! \n`))} <Text style = {{color: '#94c942'}}>{30 - ejaculation}</Text> ejaculation(s) left.</Text>
                <CircularProgress
                    value={ejaculation}
                    radius={140}
                    duration={500}
                    progressValueColor={'#94c942'}
                    maxValue={30}
                    inActiveStrokeColor={'#94c942'}
                    inActiveStrokeOpacity={0.2}
                    activeStrokeColor={'#94c942'}
                    inActiveStrokeWidth={20}
                    activeStrokeWidth={30}
                    title={'Ejaculations'}
                    titleColor={'#94c942'}
                    titleStyle={{fontSize: 25}}
                />
                <Button
                    title = {ejaculation == 30 ? "Finished" : "Record Ejaculation"}
                    buttonStyle = {{backgroundColor: '#94c942'}}
                    containerStyle = {[styles.primaryButton, {marginTop: '15%'}]}
                    titleStyle = {styles.button}
                    radius = 'md'
                    onPress = {() => {
                        if (ejaculation >= 30) {
                            return
                        }
                        storeData('v_ejaculations', String(ejaculation + 1))
                            .then(res => {
                                if (res != null) {
                                    setEjaculations(ejaculation + 1)

                                    if (ejaculation + 1 == 30) {

                                        Alert.alert('🎉 Congratulations!\n30 Ejaculations Finished.')
                                    }

                                }
                            })
                    }}
                />
            </SafeAreaView>
        </>
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
        margin: '5%',
        color: '#464646'
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

export default EjaculationLog;

