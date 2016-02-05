var React = require('react-native');
var Main = require('./App/Components/Main');


var {
    AppRegistry,
    StyleSheet,
    Text,
    NavigatorIOS,
    View,
    } = React;

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

class githubNotetaker extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Github NoteTaker',
          component: Main
        }} />
    );
  }
}

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
