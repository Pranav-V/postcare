
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Alert,
    Linking
  } from 'react-native';
  
import {Button} from '@rneui/themed'
import {useEffect, useState} from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';
import AsyncStorage from '@react-native-async-storage/async-storage';


const EjaculationCounter = ({navigation}) => {

    const [ejaculation, setEjaculations] = useState(0);
    const [test, setTest] = useState(false)
    const [testNumber, setTestNum] = useState(1)
    const [passed, setPassed] = useState(false)

    const [iseen, setIseen] = useState(false)
    const [text, setText] = useState(false)

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
        getData('v_ejaculations')
            .then(res => {
                if (res != null) {
                    setEjaculations(Number(res))
                }
            })
        getData('v_hometest')
        .then(res => {
            if (res != null) {
                if (res == 'passed') {
                    setPassed(true)
                } else {
                    setPassed(false)
                }   
                setTest(true)
            }
        })
        getData('v_ejaculation_message')
        .then(res => {
            if (res != null) {
                setIseen(true)
            }
        })
    }, [])
    
    return (
        iseen ?
        <>
            <SafeAreaView style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {[styles.subtitle, styles.note, {borderColor: '#94c942'}]}>{ejaculation < 15 ? `Keep on going! \n` : (ejaculation < 25 ? `Almost there! \n` : (ejaculation == 30 ? `🎊 Complete! 🎊\n` : `Just a bit more! \n`))} <Text style = {{color: '#94c942'}}>{30 - ejaculation}</Text> ejaculation{ejaculation != 29 ? "s" : ""} left.</Text>
                <CircularProgress
                    value={ejaculation}
                    radius={140}
                    duration={900}
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
                {
                    ejaculation < 30 ? 
                    <Button
                        title = {"Record Ejaculation"}
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

                                            Alert.alert('🎉 Congratulations!\nYou have completed the necessary amount of ejaculations needed in order to "clean your pipes". \nPlease perform your at-home test given to you by AUI to ensure your recovery process is on track.')
                                        }

                                    }
                                })
                        }}
                    />
                    :
                    <>
                        <Text style = {[styles.subtitle, {marginTop: '15%', marginBottom: '0%'}]}>At-Home Test #{testNumber} Results</Text>
                        {
                            passed || !test? 
                            <Button
                                title = {"Passed"}
                                buttonStyle = {{backgroundColor: '#4cb2f9'}}
                                containerStyle = {[styles.primaryButton, {marginTop: '5%'}]}
                                titleStyle = {styles.button}
                                radius = 'md'
                                onPress = {() => {
                                    if (testNumber == 1) {
                                        setTestNum(2)
                                        Alert.alert('🎉 Congratulations! TODO')
                                    } else {
                                        storeData('v_hometest', 'passed')
                                        .then(res => {
                                            setPassed(true)
                                            setTest(true)
                                        })
                                    }
                                }}
                            />
                            :
                            <Text  style = {[styles.subtitle, {marginTop: '5%', color: '#fa7988', fontSize: 20}]}>Please book telehealth {'\n'}appointment with AUI.</Text>
                        }
                        {
                            !passed || !test?
                            <Button
                                title = {!test ? "Failed" : "Schedule Here"}
                                buttonStyle = {{backgroundColor: '#fa7988'}}
                                containerStyle = {[styles.primaryButton, {marginTop: '5%'}]}
                                titleStyle = {styles.button}
                                radius = 'md'
                                onPress = {() => {
                                    if (test) {
                                        Linking.openURL('https://austinurologyinstitute.com/contact/')
                                    } else {
                                        storeData('v_hometest', 'failed')
                                            .then(res => {
                                                setPassed(false)
                                                setTest(true)
                                            })
                                    }
                                }}
                            />
                            :
                            <Text  style = {[styles.subtitle, {marginTop: '5%', color: '#4cb2f9', fontSize: 20}]}>Great News! Please follow the {`\n`}post-operation timeline {`\n`}for next steps.</Text>
                        }
                    </>
                }               
            </SafeAreaView>
        </>
        :
        <>
            <SafeAreaView style = {{flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: '5%', marginRight: '5%'}}>
                <Text style = {[styles.subtitle, styles.note, {color: '#000000'}]}>{`The ejaculation log will digitally record the number of ejaculations logged post-operation, and will notify you once the thirty ejaculations needed before conducting the at-home test are completed.`}</Text>
                {
                    text || true?
                    <Button
                        title = "Proceed"
                        buttonStyle = {{backgroundColor: '#000000'}}
                        containerStyle = {[styles.primaryButton, {marginVertical: 30}]}
                        titleStyle = {styles.button}
                        radius = 'md'
                        onPress = {() => {
                            storeData('v_ejaculation_message', 'true')
                                .then(res => {
                                    setIseen(true)
                                })
                        }}
                    />
                    :
                    <></>
                }   
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
    note: {
        borderColor: '#00000',
        padding: 10,
        borderWidth: 3,
        borderRadius: 9,
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
    },
    subsubtitle: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        margin: '5%',
        color: '#464646'
    }
});

export default EjaculationCounter;

