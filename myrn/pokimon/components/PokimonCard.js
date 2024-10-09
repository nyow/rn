import { View, Text, StyleSheet, Platform, Image } from 'react-native';

const getBenderDetails = (bender) => {
    switch (bender.toLowerCase()) {
        case 'air':
            return {emoji: '💨', borderColor: '#ACACAC'};
        case 'fire':
            return {emoji: '🔥', borderColor: '#FF5733'};
        case 'water':
            return {emoji: '💧', borderColor: '#6393EA'};
        case 'earth':
            return {emoji: '🌍', borderColor: '#8B4513'};
        default:
            return {emoji: '❓', borderColor: '#A0A0A0'};
    }
}
export default function PokimonCard({ name, image, bender, hp, moves, weaknesses, strengths }) {
    const {emoji, borderColor} = getBenderDetails(bender);
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} accessibilityLabel={`${name} Avatar`} resizeMode='contain'/>
            <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.hp}>❤️{hp}</Text>
            </View>
            <View style={styles.typesContainer}>
                <View style={[styles.badge, { borderColor: borderColor }]}>
                    <Text style={styles.benderEmoji}>{emoji}</Text>
                    <Text style={styles.benderText}>{bender}</Text>
                </View>
            </View>
            <View style={styles.movesContainer}>
                <Text style={styles.moves}>Moves: {moves.join(', ')}</Text>
            </View>
            <View style={styles.weaknessesContainer}>
                <Text style={styles.weaknesses}>Weaknesses: {weaknesses.join(', ')}</Text>
            </View>
            <View style={styles.weaknessesContainer}>
                <Text style={styles.weaknesses}>Strengths: {strengths.join(', ')}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        borderWidth: 2,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowColor: '#333',
                shadowOffset: { width: 1, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            }
        })
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    hp: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
    typesContainer: {
        alignItems: 'center',
        marginBottom: 40
    },
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 2,
    },
    benderEmoji: {
        fontSize: 30,
        marginRight: 12,
    },
    benderText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    movesContainer: {
        marginBottom: 8
    },
    moves: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    weaknessesContainer: {
        marginBottom: 8
    },
    weaknesses: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

