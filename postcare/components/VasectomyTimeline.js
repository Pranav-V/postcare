
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




const VasectomyTimeline = ({navigation}) => {

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
        "date": date + (97 * day),
        "data": [
            {
            "title": " + 97 Days",
            "subtitle": "Conduct the second SpermCheck test and record your results in the Recovery log. May begin unprotected sex provided negative SpermCheck on BOTH tests. 🍑🍆",
            "date": date + (97 * day)
            },
        ]
    },
    {
        "date": date + (90 * day),
        "data": [
            {
            "title": " + 90 Days",
            "subtitle": "Conduct the first SpermCheck test and record your results in the Recovery Log. 💉",
            "date": date + (90 * day)
            },
        ]
    },
    {
      "date": date + (42 * day),
      "data": [
          {
          "title": " + 6 Weeks",
          "subtitle": "The small incision made in your scrotum is typically no longer visible.",
          "date": date + (42 * day)
          },
      ]
    },
    {
      "date": date + (28 * day),
      "data": [
          {
          "title": " + 4 Weeks",
          "subtitle": "May begin cycling and full exercise routines such as heavy lifting. May also begin more physical sports such as soccer, wrestling, jujitsu, etc. 🚴",
          "date": date + (28 * day)
          },
      ]
    },
    {
      "date": date + (21 * day),
      "data": [
          {
          "title": " + 2-3 Weeks",
          "subtitle": "Stitches should fall off by themselves.",
          "date": date + (21 * day)
          },
      ]
    },
    {
      "date": date + (14 * day),
      "data": [
          {
          "title": " + 2 Weeks",
          "subtitle": "May begin lower extremity exercise such as running as well as swimming. Pain should be minimal to a trace of discomfort. 🏊",
          "date": date + (14 * day)
          },
      ]
    },
    {
      "date": date + (10 * day),
      "data": [
        {
          "title": " + 10 Days",
          "subtitle": "Bruising and swelling is common up to 10 days. Pea-sized nodules are normal and can take several weeks to dissolve. You may feel a pea-sized lump at the vasectomy site. This is where the vas deferens was tied off with suture and is no reason to be concerned!",
          "date": date + (10 * day)
        },
      ]
    },
    {
      "date": date + (7 * day),
      "data": [
        {
          "title": " + 1 Week",
          "subtitle": "May begin upper extremity exercise and resume intercourse with protection and masturbation. Please use the Ejaculation Counter to keep track of your 30 ejaculations!",
          "date": date + (7 * day)
        },
      ]
    },
    {
      "date": (date + (6 * day)),
      "data": [
        {
          "title": "+ 6 Days",
          "subtitle": "You should have completed taking the provided daily pain medication (Celebrex). 💊",
          "date": date + (6 * day)
        }
      ]
    },
    {
      "date": date + day,
      "data": [
        {
          "title": "+ 1 Day",
          "subtitle": "Recommended to shower like normal. Allow soap to flow over the general area rather than directly scrubbing the stitch. Rather. No baths until two weeks. 🚿",
          "date": date + day
        }
      ]
    },
    {
      "date": date,
      "data": [
        {
          "title": "Operation Date",
          "subtitle": "Ice intermittently and keep young children and pets off the lap area. No lifting over 10 pounds for the upcoming week.\n\nWe recommend using a jockstrap, compression underwear, or some other form of scrotal support for at least a week.",
          "date": date
        }
      ]
    },
    {
        "date": date,
        "data": [
          {
            "title": "Operation Date",
            "subtitle": "You did it ✂️🍆😫! Please plan a relaxing few days over the following 72 hours.\n\nLess is more! Taking it easy will ensure a speedy recovery. You do not want to turn a six-day recovery into six weeks.",
            "date": date
          }
        ]
      }
    ]
    
    return (
        <> 
            <Text style = {[styles.subtitle, {marginTop: '10%', marginBottom: '7%'}]}>SpermCheck in <Text style = {{color: '#94c942', fontWeight: 'bold'}}>{Math.max(0, Math.ceil(((date + (90 * day)) - new Date().getTime())/day))}</Text> day{Math.max(0, Math.ceil(((date + (90 * day)) - new Date().getTime())/day)) == 1 ? '' : 's'}.</Text>
            <Timeline 
                data={data}
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

export default VasectomyTimeline;

