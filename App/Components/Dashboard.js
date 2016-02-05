var React = require('react-native');

var {
    Text,
    View,
    StyleSheet
} = React;

var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        flex: 1
    },
    image: {
        height: 350
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    }
});

class Dashboard extends React.Component{
    render(){
        // React Native does not let you print an object to the view
        return (
            <View style={styles.container}>
                <Text> This is the dashboard </Text>
                <Text>{this.props.userInfo.login}</Text>
                <Text>{this.props.userInfo.id}</Text>
                <Text>{this.props.userInfo.avatar_url}</Text>
                <Text>{this.props.userInfo.url}</Text>
            </View>
        )
    }
};

module.exports = Dashboard;
