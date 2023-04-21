import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Button, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SleepRemiders = ({navigation}) => { 
  const [clock, setClock] = useState([
    {clock: '14:00', key: '1'},
    {clock: '8:00', key: '2'},
    {clock: '20:00', key: '3'},
  ]);
    
  const pressHandler = (key) => {
    setClock((prevClock) => {
      return prevClock.filter(clock => clock.key != key);
    });
  }

  const [newclock, setNewClock] = useState('');

  const changeHandler = (val) => {
    setNewClock(val);
  }

  const submitHandler = (newclock) => {
    setClock((prevClock)=>{
      return[
        {clock: newclock, key: Math.random().toString()},
        ...prevClock
      ];
    });
  }

  return(
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Text onPress={()=> navigation.navigate('SleepReminder')} style={{ fontSize: 26, fontWeight: 'bold', color:'#777'}}></Text>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, {flex: 1, width: 0}]}
              placeholder='Adicionar lembrete'
              placeholderTextColor='white'
              onChangeText={changeHandler}
            />
            <View style={styles.buttonContainer}>
              <Button onPress={() => submitHandler(newclock)} title='+' color='#7b68ee'/>
            </View>
          </View>
          <View style={styles.list}>
            <FlatList
              data={clock}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => pressHandler(item.key)}>
                  <View style={styles.delItem}>
                    <MaterialIcons name="delete-outline" size={24} color="black" />
                    <Text style={styles.itemList}>{item.clock}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
  title:{
    color: 'white',
    fontSize: 18,
  },
  header:{
    height: 80,
    paddingTop: 28,
    backgroundColor: '#0f0f0f'
  },
  content: {
    flex:1,
    padding: 20,
    marginTop: 20,
  },
  list:{
    flex:1,
    marginTop: 30,
  },
  delItem:{
    padding: 16,
    marginTop: 16,
    borderColor: '#7b68ee',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemList:{
    color: 'white',
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    width: 50,
    marginLeft: 10,
  },      
  input:{
    color: 'white',
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  }
})

export default SleepRemiders;