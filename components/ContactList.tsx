import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            "numberrange": "1",
            "name": "Kyle Barlow",
            "address": "Ap #421-5024 Suspendisse St.",
            "phone": "1-183-462-8864",
            image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
        },
        {
            uid: 2,
            "numberrange": "7",
            "name": "Ivy Bray",
            "address": "434-8202 Egestas. Avenue",
            "phone": "(429) 982-5827",
            image: 'https://images.pexels.com/photos/4450341/pexels-photo-4450341.jpeg'
        },
        {
            uid: 3,
            "numberrange": "3",
            "name": "Craig Crawford",
            "address": "P.O. Box 128, 1708 In Av.",
            "phone": "1-474-774-8014",
            image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
        },
        {
            uid: 4,
            "numberrange": "1",
            "name": "Aiko Crawford",
            "address": "Ap #123-5094 Quam, Av.",
            "phone": "1-474-475-8145",
            image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
        },
        {
            uid: 5,
            "numberrange": "5",
            "name": "Devin Burns",
            "address": "4614 Non, Rd.",
            "phone": "(384) 561-5367",
            image: 'https://images.pexels.com/photos/4450341/pexels-photo-4450341.jpeg'
        }
    ];

    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >
                {contacts.map(({ uid, numberrange, name, address, phone, image }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: image
                            }}
                            style={styles.contactImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userAddress}>{address}</Text>
                            <Text style={styles.userPhone}>{phone}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8

    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8d3daf',
        padding:  8,
        borderRadius: 8

    },
    userName: {
        fontSize: 16,
        fontWeight: '700',
        color:  '#ffffff'
    },
    userAddress: {
        fontSize: 12,
        
    },
    userPhone: {},
    contactImage: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    }
})