import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return ( 
   <KeyboardAvoidingView style={styles.background}>
    <View style={styles.containerLogo}>
    <MaterialCommunityIcons name="power-sleep" size={80 } color="#7b68ee"/>   
    </View>
    
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder='Email'
      autoCorrect={false}
      />

    <TextInput
      style={styles.input}
      placeholder='Senha'
      autoCorrect={false}
      />

      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.submitText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnRegister}>
        <Text style={styles.registerText}>Criar conta gratuita</Text>
      </TouchableOpacity>

    </View>

   </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f1f1f',
  },
  containerLogo:{
    flex: 1,
    justifyContent: 'center',    
  },
  container:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },
  input:{
    backgroundColor: '#fff',
    width:'90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit:{
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: '#7b68ee',
  },
  submitText:{
    color: '#FFF',
    fontSize: 18
  },
  btnRegister: {  
    marginTop: 10,
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: '#7b68ee',
  },
  registerText:{
    color: '#FFF'
  },
});
