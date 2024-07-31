import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    const openWebsite = (websiteLink: string) => {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in Javascript 21 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://images.pexels.com/photos/18207346/pexels-photo-18207346/free-photo-of-bergen-zand-bomen-auto.jpeg'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        De eerste versie van JavaScript werd in 1995 ontwikkeld door Brendan Eich van Netscape Communications Corporation voor gebruik in Netscape Navigator. Aanvankelijk was de naam Mocha en vervolgens LiveScript. De taal werd hernoemd tot JavaScript in de tijd dat in de Netscape-browser ook ondersteuning voor Java-applets werd ingebouwd.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://nl.wikipedia.org/wiki/JavaScript')}
                    >
                        <Text style={styles.socialLinks}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                       onPress={() => openWebsite('https://x.com')}
                    >
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8

    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#e07c24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 200
    },
    bodyContainer: {
        padding: 10
        
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 6,
 
    }
})