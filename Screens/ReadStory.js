import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View>
          <TouchableOpacity style={styles.header}>
            <Text style={styles.headerText}>Story Hub App</Text>
          </TouchableOpacity>

          <Text style={styles.displayText}>
            Sorry but this screen will be updated soon and become an amazing
            place to read stories!!
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#39b39c',
  },
  headerText: {
    color: '#fa8469',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  displayText: {
    fontSize: 20,
    padding: 15,
  },
});
