import { SafeAreaView, StyleSheet } from 'react-native';

const Card = ({children}) => {

    return (
        <SafeAreaView style={styles.container}>
                {children}
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 12
    }
});

export default Card;

