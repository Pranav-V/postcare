
import {
    SafeAreaView,
    ScrollView, 
    StyleSheet,
    Text,
  } from 'react-native';
  
import {Button} from '@rneui/themed'
import {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Timeline from "react-native-beautiful-timeline";
import { ceil } from 'react-native-reanimated';




const EjaculationTimeline = ({navigation}) => {

    const [date, setDate] = useState(1574342522000)
    const day = 86400000

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
        getData('v_date')
            .then(res => {
                if (res != null) {
                    var date= res.split("/");
                    var f = new Date(date[2], date[0] - 1, date[1]);
                    setDate(f.getTime());
                }
            })
            .catch(err => console.log(err))
    }, [])

    var data = [
        {
            "date": date + (90 * day),
            "data": [
                {
                "title": " + 90 Days",
                "subtitle": "Conduct SpermCheck test.",
                "date": date + (90 * day)
                },
            ]
        },
        {
            "date": date + (90 * day),
            "data": [
                {
                "title": " + 90 Days",
                "subtitle": "May begin unprotected sex provided negative SpermCheck results.",
                "date": date + (90 * day)
                },
            ]
        },
        {
            "date": date + (14 * day),
            "data": [
                {
                "title": " + 2 Week",
                "subtitle": "May begin swimming and vigorous activity in lower extremities.",
                "date": date + (14 * day)
                },
            ]
        },
        {
          "date": date + (7 * day),
          "data": [
            {
              "title": " + 1 Week",
              "subtitle": "May begin sport activities and sexual intercourse.",
              "date": date + (7 * day)
            },
          ]
        },
        {
          "date": (date + (4 * day)),
          "data": [
            {
              "title": "+ 4 Days",
              "subtitle": "Stop taking daily pain tablets.",
              "date": date + (4 * day)
            }
          ]
        },
        {
          "date": date + day,
          "data": [
            {
              "title": "+ 1 Day",
              "subtitle": "Recommended to begin showering.",
              "date": date + day
            }
          ]
        },
        {
            "date": date,
            "data": [
              {
                "title": "Operation Date",
                "subtitle": "You did it!",
                "date": date
              }
            ]
          }
    ]
    
    return (
        <> 
            <Text style = {[styles.subtitle, {marginTop: '10%', marginBottom: '7%'}]}>SpermCheck in <Text style = {{color: '#94c942'}}>{Math.max(0, Math.ceil(((date + (90 * day)) - new Date().getTime())/day))}</Text> day(s)</Text>
            <Timeline 
                data={data}
                timelineStyle = {{color: 'blue'}}
                dashColor = '#94c942'
                dashThickness = {2}
            />
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

export default EjaculationTimeline;

