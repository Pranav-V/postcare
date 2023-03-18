import {
    SafeAreaView,
    StyleSheet,
    Text,
    ScrollView,
    View
  } from 'react-native';

import {useState, useEffect} from 'react'
import {AccordionList} from 'react-native-accordion-list-view'

const VasectomyFAQ = ({navigation}) => {
    const data = [
        {
            id: 0,
            title: "I am still having bruising, swelling, and/or discomfort several days out, a week out, two weeks out, etc. When should these symptoms alleviate? When should I be concerned? What can I do to help reduce these symptoms?",
            body: "Bruising and swelling are common up to 10 days after the date of your procedure. Discomfort for the first week or two is completely normal. If you are experiencing bruising, swelling, and/or discomfort beyond the described period of time, we can schedule a Telehealth appointment to address any of your questions/concerns. To help reduce these symptoms you can intermittently ice, use scrotal support, lessen activities, take the provided pain medication (Celebrex) for the first seven days after your procedure, and take over-the-counter Tylenol.",
        },
        {
            id: 1,
            title: 'I feel a hard lump or nodule in my scrotum. Is this normal? When should I be concerned? Is there anything I can do to help with the healing process?',
            body: "At the very end of your recovery, you may feel a pea-sized lump at the vasectomy site. This is where the vas deferens was tied off with suture and is no reason to be concerned. Outside of that, pea-sized to peanut-M&M sized lumps are normal after the procedure and may appear many weeks after your vasectomy. Lumps can take several weeks to dissolve and usually go away on their own. The lump itself may be tender to the touch. If painful to the touch or causing difficulty walking, we can schedule an appointment to address this issue. If the lump does not go away on its own in about six weeks, contact us to schedule an appointment as well. We recommend intermittent icing and scrotal support to help with the healing process.",
        },
        {
          id: 2,
          title: 'It has been 2-3 weeks and my stitches have not dissolved and are still present. What should I do?',
          body: "We recommend applying Neosporin once or twice a day to help soften the suture. If the stiches are still present after 4-6 weeks, we can schedule an appointment for you to come into the office and have the stitches removed.",
        },
        {
          id: 3,
          title: 'What underwear/scrotal support should I wear?',
          body: 'Tight-fitting underwear including jockstraps, compression underwear, and tighter boxer briefs are all options that can be worn after your vasectomy to provide scrotal support and aid in your recovery. Wearing supportive underwear day and night reduces the tension on the spermatic cords (a structure that facilitates testicular blood supply) which can help to relieve scrotum pain. Jockstraps offer the greatest scrotal support, with compression underwear and tighter boxer briefs following behind. The type of underwear you choose to wear can be a personal choice based off what you believe is needed at that time in your recovery process.'
        },
        {
          id: 4,
          title: 'Is there a general summary detailing all of the information for when I can begin exercising after my procedure?',
          body: 'Yes! After one week you may begin upper extremity exercises. After two weeks, you can begin lower extremity exercises such as running as well as swimming. At four weeks, you may begin cycling and full exercise routines such as heavy lifting and more physical sports such as soccer, wrestling, jiujitsu, etc.'
        },
        {
          id: 5,
          title: 'If I complete the 30 ejaculations before the 90-day period is over, can I take the two SpermCheck tests early, and assuming I am negative on both, have unprotected sex at that time?',
          body: 'NO! Please remember, you are NOT sterile directly after the procedure. You must complete both requirements – 30 ejaculations and wait a 90-day period – before engaging in unprotected sex. This is because there is still sperm in your semen for the time directly after the procedure. While your vas deferens has been cut, there is still sperm stored that must be given time to fully clear out. Fulfilling these two requirements ensures that this has occurred.'
        },
        {
          id: 6,
          title: 'Are there any abnormalities that should cause me concern or need to schedule an appointment?',
          body: 'As a general rule of thumb, pain or swelling that increases on a day-by-day basis is a reason to schedule an appointment. Each day after the date of your procedure should be better than the last.'
        },
        {
          id: 7,
          title: 'Will there be any discharge in my urine following the procedure? Is there any discharge that I should be concerned about?',
          body: 'Discharge in the urine is normal for the first 24 hours. However, if you notice any white, yellow, or green discharge in the urine after the first 24 hours, please contact us and schedule an appointment immediately.'
        },
        {
          id: 8,
          title: 'What is Celebrex?',
          body: 'Celebrex is an anti-inflammatory drug and is not a narcotic. It is used to treat pain and inflammation during the days directly following your procedure and can be taken with food. It is safe to drive with.'
        },
        {
          id: 9,
          title: "Do I need to take all seven days' worth of Celebrex?",
          body: 'No! If your pain is tolerable and you feel the pain medication is no longer necessary, you do not need to take the entire seven-day course of Celebrex.'
        },
        {
          id: 10,
          title: 'What additional medication can I take besides Celebrex to help reduce pain?',
          body: 'If additional pain medication is necessary, you can take over-the-counter Tylenol. Please avoid Advil or Motrin (ibuprofen) as these are similar to Celebrex and can lead to an overdose.'
        },
        {
          id: 11,
          title: 'Are there any anatomical differences that I may notice once my recovery is complete?',
          body: 'Anatomical differences caused by the procedure itself are minimal. The only noticeable change will be a painless pea-sized lump at the vasectomy site where the vas deferens was tied off with suture. The stitch or stitches on your scrotum used to close the skin should fall off around two to three weeks after your procedure. The small incision made in your scrotum is typically no longer visible at six weeks.'
        },
        {
          id: 12,
          title: 'Will I notice any changes in my semen after my recovery is complete?',
          body: 'Visually, no you will not. You will still make semen and have an ejaculate. The only difference is that the semen will not contain any sperm. Semen is a complex fluid made of several different components including sperm, seminal vesicle fluid, prostatic fluid, and bulbourethral fluid. Sperm itself makes up less than 10% of semen volume. After your vasectomy, you will simply be missing the sperm content of your semen while still having an ejaculate composed of the other three fluids.'
        },
        {
          id: 13,
          title: 'Will I notice any changes in my testosterone levels after my recovery is complete?',
          body: 'No! A vasectomy will not affect your testosterone levels. This is because testosterone is secreted by the testes directly into the bloodstream, not into the vas deferens. As a result, there should also be no changes in your libido.'
        },
        {
          id: 14,
          title: 'How does the SpermCheck test work? How accurate is it?',
          body: 'The SpermCheck Vasectomy® test is a highly sensitive lateral flow immunochromatographic diagnostic device utilizing monoclonal antibodies (man-made antibodies) that recognize the sperm-specific acrosomal protein SP-10. Essentially, the SpermCheck test takes advantage of the specificity of antibodies and their respective antigens to detect proteins unique to sperm, thus identifying the presence (or absence) of sperm in your semen. In a clinical trial, SpermCheck Vasectomy® was 96% accurate in predicting whether sperm counts were greater or less than a threshold of 250,000 sperm per milliliter, a level that is associated with little or no risk of pregnancy.'
        },
        {
          id: 15,
          title: 'What should I do if I test positive on a SpermCheck test?',
          body: 'If you test positive on either of the two SpermCheck test, you are not safe to have unprotected sex. This stays true even if one of the two SpermCheck tests were negative. If this happens, please contact us right away to schedule an appointment.'
        },
        {
          id: 14,
          title: 'When can my significant other come off of her birth control?',
          body: 'Your significant other should only come off their birth control once you have tested negative on BOTH SpermCheck tests.'
        },
    ]

    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, [])

    return (
        <>  
            <SafeAreaView style = {{flex: 1, alignItems: 'center'}}>
                <Text style = {styles.subtitle}></Text>
                <Text style = {styles.title}>Frequently Asked Questions </Text>
                <View style = {{flex: 1}}>
                  <AccordionList
                      data={data}
                      customTitle={item => <Text style = {styles.faq}><Text style={{fontWeight:'bold'}}>Q: </Text>{item.title}</Text>}
                      customBody={item => <View><Text style = {styles.faqa}><Text style={{fontWeight:'bold'}}>{"\n"}A: </Text>{item.body}</Text></View>}
                      animationDuration={400}
                      expandMultiple={false}
                      style = {{width:'90%'}}
                      scrollEnabled = {true}
                      showsVerticalScrollIndicator = {false}
                      containerItemStyle = {{backgroundColor: 'transparent', borderColor: '#000000', borderWidth: 2, borderRadius: 8, marginBottom: 18}}
                      customIcon = {() => <View></View>}
                  />
                </View>
            </SafeAreaView>
        </>
    )
}

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
    faq: {
      fontSize: 18,
      fontWeight: '500',
      textAlign: 'left',
      color: '#000000'
    },
    faqa: {
      fontSize: 18,
      fontWeight: '500',
      textAlign: 'left',
      color: '#94c942'
    }
});
export default VasectomyFAQ;
  
  