import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Platform,
} from 'react-native';

type TError = {
  [key: string]: string | null;
  email: string | null;
  password: string | null;
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<TError>({
    email: null,
    password: null,
  });

  const validatedForm = () => {
    let validationErrors: TError = {
      email: '',
      password: '',
    };

    if (!formData.email) {
      validationErrors.email = 'Email is required';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }

    setErrors(validationErrors);

    return Object.keys(errors).every(key => errors[key] === '');
  };

  const handleSubmit = () => {
    if (validatedForm()) {
      console.log('Form is valid');
      console.log(formData);
      setFormData({
        email: '',
        password: '',
      });
      setErrors({
        email: null,
        password: null,
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Login form</Text>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          value={formData.email}
          onChangeText={text => setFormData({...formData, email: text})}
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        <Text style={styles.label}>Password:</Text>
        <TextInput
          value={formData.password}
          onChangeText={text => setFormData({...formData, password: text})}
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
        <View style={{marginTop: 20}}>
          <Button title="Login" onPress={() => handleSubmit()} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  form: {
    minWidth: '80%',
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 4,
    elevation: 5,
  },
  formTitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },

  label: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
