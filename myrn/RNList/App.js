import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import PokimonList from './data.json';
import groupData from './group-data.json';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 16}}>
        <SectionList
          sections={groupData}
          renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.heading_text}>{section.type}</Text>}
          ItemSeparatorComponent={ () => <View style={{ height: 10 }} />}
          SectionSeparatorComponent={ () => <View style={{ height: 30 }} />}
          ListEmptyComponent={<Text>No data found</Text>}
          ListHeaderComponent={<Text style={{ fontSize: 30, marginTop: 16, textAlign: 'center' }}>List Header</Text>}
          ListFooterComponent={<Text style={{ fontSize: 24, marginBottom: 16, textAlign: 'center' }}>List Footer</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  heading_text: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'red',
  },
  item: {
    backgroundColor: '#f6f6f6',
    padding: 20,
    // marginVertical: 12,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
});
