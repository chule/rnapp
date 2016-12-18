import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  RegisterComponent,
  ScrollView,
  Alert 
} from 'react-native';

export default class Todo extends Component {
  constructor () {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  handleChange (text) {
    this.setState({newTodo: text});
  }

  handlePress () {
    if (this.state.newTodo !== '') {
      const todos = [...this.state.todos, this.state.newTodo]
      this.setState({
        todos: todos,
        newTodo: '',
      }); 
    }
  }

  removeTodo (index) {
    const currentTodos = this.state.todos;

    function remove () {
      this.setState({
        todos: currentTodos.filter((d,i) => index !== i)
      });
    }

    Alert.alert(
            'Todo removal',
            'Todo \"' + currentTodos[index] + '\" will be removed!',
            [
              {text: 'Cancel'},
              {text: 'OK', onPress: remove.bind(this)},
            ]              
    )
    
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.titleAndDesc}>
          <Text style={styles.title}>
            My todos:
          </Text>
          <Text>
            {this.state.todos.length !== 0 ? "(Click on todo to remove it)" : ""}
          </Text>
        </View>


        <ScrollView style={styles.body}>
          {this.state.todos.map(
            (todo,i) => (<Text style={styles.todos} key={i} onPress={this.removeTodo.bind(this, i)}>
                            { i + 1 + '. ' + todo}
                          
                        </Text>)
            )
          }
        </ScrollView>
	    

        <View  style={styles.head}>
          <TextInput underlineColorAndroid='#ffffff' style={styles.textInput} value={this.state.newTodo} onChangeText={this.handleChange.bind(this)}></TextInput>
          <TouchableHighlight style={styles.button} onPress={this.handlePress.bind(this)}>
            <Text>Add todo</Text>
          </TouchableHighlight>        
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#979983',
    justifyContent: 'space-between'
  },
  head: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#A40D14',

  },
  body: {
    flex: 1,
    margin: 15,
    marginVertical: 0
    
  },
  todos: {
    fontSize: 20
  },
  textInput: {
    flex: 0.8,
    fontSize: 20,
    color: "white"
  },
  button: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',   
    borderWidth: 1,
    margin: 5,
    borderRadius: 15, 
    borderColor: "#A40D14",
    backgroundColor: "#AD441C"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    fontSize: 40
  },
  titleAndDesc: {
    alignItems: 'center', 
    padding: 15
  }
});
