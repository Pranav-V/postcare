import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image
  } from 'react-native';
  
  import {Button} from '@rneui/themed'
  
  const KidneyHome = ({navigation}) => {
      return (
          <>
              <SafeAreaView style = {{flex: .85, justifyContent: 'center'}}>
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
                      title = "Schedule Appointment"
                      buttonStyle = {{backgroundColor: '#94c942'}}
                      containerStyle = {styles.primaryButton}
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
      }, logo: {
        width: undefined, 
        height: '100%', 
        aspectRatio: 1,
      }
  });
  
  export default KidneyHome;