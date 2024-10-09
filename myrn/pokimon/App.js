import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, ScrollView } from 'react-native';
import PokimonCard from './components/PokimonCard';

export default function App() {
  const aang = {
    name: 'Aang',
    image: require('./assets/aang.png'),
    bender: 'Air',
    hp: 100,
    moves: ['Avalanche', 'Ice Whip', 'Blizzard'],
    weaknesses: ['Fire', 'Earth', 'Metal'],
    strengths: ['air', 'Water'],
  }
  const zuko = {
    name: 'Zuko',
    image: require('./assets/zuko.webp'),
    bender: 'Fire',
    hp: 100,
    moves: ['fire whip', 'fire whip', 'fire whip'],
    weaknesses: ['Air', 'Earth', 'Metal'],
    strengths: ['Fire','Water'],
  }
  const appa = {
    name: 'Appa',
    image: require('./assets/appa.png'),
    bender: 'Air',
    hp: 100,
    moves: ['drive', 'fly', 'water whip'],
    weaknesses: ['Fire', 'Earth', 'Metal'],
    strengths: ['Air', 'Water'],
  }
  const katara = {
    name: 'Katara',
    image: require('./assets/katara.png'),
    bender: 'Water',
    hp: 100,
    moves: ['water whip', 'water whip', 'water whip'],
    weaknesses: ['Fire', 'Earth', 'Metal'],
    strengths: ['Water','Air'],
  }
  const sokka = {
    name: 'Sokka',
    image: require('./assets/sokka.png'),
    bender: 'Earth',
    hp: 100,
    moves: ['earth whip', 'earth whip', 'earth whip'],
    weaknesses: ['Fire', 'Earth', 'Metal'],
    strengths: ['Water','Air'],
  }
  const toph = {
    name: 'Toph',
    image: require('./assets/toph.png'),
    bender: 'Earth',
    hp: 100,
    moves: ['earth whip', 'earth whip', 'earth whip'],
    weaknesses: ['Fire', 'Metal'],
    strengths: ['Earth','Air'],
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokimonCard {...aang} />
        <PokimonCard {...zuko} />
        <PokimonCard {...appa} />
        <PokimonCard {...katara} />
        <PokimonCard {...sokka} />
        <PokimonCard {...toph} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
