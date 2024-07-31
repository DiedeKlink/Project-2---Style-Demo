import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Spaarne_met_Teylers_Museum%2C_de_Waag_en_de_Bavo.jpg/1280px-Spaarne_met_Teylers_Museum%2C_de_Waag_en_de_Bavo.jpg'
                    }}
                    style={styles.cardImage}
                />

                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Haarlem</Text>
                    <Text style={styles.cardLabal}>Noord-holland</Text>
                    <Text style={styles.cardDescription}>Prachtige stad in Noord-Holland. Niet geheel toevallig ook mijn woonplaats.</Text>
                    <Text style={styles.cardFooter}>12 minutes away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,

    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16

    },
    cardElevated: {
        backgroundColor: '#ffffff',
        elevation: 3,
        borderRadius: 6,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabal: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6

    },
    cardDescription: {
        color: '#242b2e',
        fontSize: 12,
        marginBottom: 12,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000'

    },
})