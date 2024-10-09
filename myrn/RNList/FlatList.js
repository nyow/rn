import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import PokimonList from './data.json';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
        <FlatList
          data={PokimonList}
          renderItem={({ item }) => {
            console.log(item) ;
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.type}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={ <View style={{ height: 16 }} />}
          ListEmptyComponent={<Text>No data found</Text>}
          ListHeaderComponent={<Text style={{ fontSize: 30, marginTop: 16, textAlign: 'center' }}>List Header</Text>}
          ListFooterComponent={<Text style={{ fontSize: 24, marginBottom: 16, textAlign: 'center' }}>List Footer</Text>}
        />
      {/* </ScrollView> */}
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
