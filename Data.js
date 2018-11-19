import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Linking} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
const URL = "https://skole.rasmuslumholdt.dk/CA3-Backend-1.0-SNAPSHOT";

export default class DataScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            tableHead: ['Name', 'Height', 'Mass', 'Birth Year', 'Home World'],
        };
    }
    static navigationOptions = {
        title: 'Data',
    };
    componentDidMount = async () => {
        const fetchData = await fetch(URL + "/api/sw/people");
        const data = await fetchData.json();
        this.setState({ people: data.results });
    }
    render() {
        const { navigate } = this.props.navigation;
        const state = this.state;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.h1}>Star Wars Characters{"\n"}</Text>
                    {/* {this.state.people.map((el, index) =>
                        <Person key={index} data={el} />)} */}
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    {this.state.people.map((el, index) => 
                    <PersonTable key={index} data={el} />)}
                    </Table>
                    <Text>{"\n"}</Text>
                    <Button
                        title="Go back"
                        onPress={() => navigate('Welcome')}
                    />
                </ScrollView>
            </View>
        );
    }

}

class Person extends Component {
    render() {
        return (
            <View>
                <Text>Name: {this.props.data.name}{"\n"}
                    Height: {this.props.data.height}{"\n"}
                    Mass: {this.props.data.mass}{"\n"}
                    Birth Year: {this.props.data.birth_year}{"\n"}
                    Home World:{"\n"}
                    <Text style={{ color: 'blue' }}
                        onPress={() => Linking.openURL(this.props.data.homeworld)}>
                        {this.props.data.homeworld}{"\n"}
                    </Text>
                </Text>
            </View>
        );
    }
}

class PersonTable extends Component {
    p = [this.props.data.name, this.props.data.height, this.props.data.mass, this.props.data.birth_year, this.props.data.homeworld]
    render() {
        return (
            <Row data={this.p} textStyle={styles.text} />
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    h1: {fontSize: 30, textAlign: 'center', fontWeight: 'bold'}
});