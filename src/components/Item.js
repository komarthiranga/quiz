import { StyleSheet, SafeAreaView, Image, Text, View } from 'react-native';
import Card from './Card';

const Item = () => {

    return(
        <Card>
            <View style={styles.container}>
                <SafeAreaView>
                  <Image source={require('../../assets/images/glass.png')}  style={styles.imageContainer}/> 
                </SafeAreaView>    
                <SafeAreaView style={styles.textContainer}>
                    <Text style={styles.text}> verre </Text>
                </SafeAreaView>    
            </View>
        </Card>
    )

}

const styles = StyleSheet.create({
    container: {
        margin: 10, 
        padding: 10
    },
    imageContainer: {
        borderRadius: 20,
        width: 120,
        height: 120
    },

    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontFamily: 'Helvetica-BoldOblique',
        paddingTop: 10
    }
});

export default Item;



