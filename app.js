import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24c28d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header: {
    height: '10%', 
    backgroundColor: '#24c28d',
    width: '100%',
  },
  Body: {
    flex: 1, 
    backgroundColor: '#eaead4', 
    width: '96%',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  Footer: {
    height: '10%', 
    backgroundColor: '#24c28d', 
    width: '100%',
  }, 
  title: {
    fontSize: 24, // Tamanho do título
    fontWeight: 'bold', // Negrito
    marginTop: 50, // Espaçamento acima do título
    marginLeft: 15
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#24c28d',
    backgroundColor: '#24c28d',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width: '100%',
    marginBottom: 0,
    marginRight: "100%"
    
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  conteudo: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    width: '96%',
  },
});

function Header() {
  return (
    <View style={styles.Header}>
      <Text></Text> 
    </View>
  );
}

function Body() {
  return (
    <View style={styles.Body}>
      <Text style={styles.title}>Cadastre-se</Text> {/* Título maior */}
      <View style={styles.conteudo}>
        <View>
          <Text style={styles.label}>Nome</Text>
          <View style={styles.inputContainer}>
            <Icon name="user" size={20} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Nome"
            />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <Icon name="inbox" size={20} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
            />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Confirmar senha</Text>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirmar senha"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.buttonStyle}>
          <TouchableOpacity style={styles.button}>
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.Footer}>
      <Text></Text> 
    </View>
  );
}
