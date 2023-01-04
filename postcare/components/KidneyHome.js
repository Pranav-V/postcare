import {
    SafeAreaView,
    StyleSheet,
    Text
  } from 'react-native';
  
  import {Button} from '@rneui/themed'
  
  const KidneyHome = ({navigation}) => {
      return (
          <>
              <SafeAreaView style = {{flex: 2, justifyContent: 'center'}}>
                  <Text style = {styles.title}>{`Kidney Stone \nRemoval Hub`}</Text>
                  <Button
                      title = "Dietary Changes"
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
                      title = "Patient Portal"
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
          </>
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
      }
  });
  
  export default KidneyHome;