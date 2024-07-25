import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Modal,
  Pressable,
  TextInput,
  Alert,
  StatusBar,
} from 'react-native';
import {LOCAL_IP} from '@env';
import {SafeAreaView} from 'react-native-safe-area-context';

type TPost = {
  title: string;
  id: string;
  content: string;
};

type TFormData = {
  title: string;
  content: string;
};

const Networking = () => {
  const [data, setData] = useState<TPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<TFormData>({
    title: '',
    content: '',
  });
  const [errors, setErrors] = useState({title: '', content: ''});

  const localIp = LOCAL_IP;

  const validateForm = () => {
    const errors = {title: '', content: ''};

    if (formData.title.length === 0) {
      errors.title = 'Title is required';
    }

    if (formData.content.length === 0) {
      errors.content = 'Content is required';
    }

    setErrors(errors);

    return formData.title.length > 0 && formData.content.length > 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await fetch(`http://${localIp}:3000/api/data`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();

        setData(prev => [...prev, data.data]);

        console.log(data);

        Alert.alert('Success', data.message);

        setFormData({title: '', content: ''});
        setIsVisible(false);
        setErrors({title: '', content: ''});
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const wait = async (ms: number) => {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    };

    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://${localIp}:3000/api/data`);
        const data = await response.json();
        await wait(500);
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [localIp]);

  return isLoading ? (
    <SafeAreaView style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#f2f2f2" />
    </SafeAreaView>
  ) : (
    <View style={styles.container}>
      <Text>Networking</Text>
      <Pressable
        style={{
          padding: 10,
          backgroundColor: 'lightblue',
          borderRadius: 10,
          margin: 10,
        }}
        onPress={() => setIsVisible(true)}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          Open Modal
        </Text>
      </Pressable>
      <FlatList
        style={{
          width: '100%',
          padding: 10,
        }}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.post}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postContent}>{item.content}</Text>
          </View>
        )}
      />
      <Modal visible={isVisible}>
        <View
          style={{
            margin: 20,
            borderRadius: 40,
            backgroundColor: 'slateblue',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              width: '80%',
            }}>
            <Text style={{fontSize: 40, color: 'white'}}>Add post</Text>
            <Text style={{fontSize: 20, color: 'white'}}>Title</Text>
            <TextInput
              style={{backgroundColor: 'white', padding: 10}}
              value={formData.title}
              onChangeText={text =>
                setFormData(prev => {
                  return {...prev, title: text};
                })
              }
            />
            {errors.title.length > 0 && (
              <Text style={{color: 'red'}}>{errors.title}</Text>
            )}
            <Text style={{fontSize: 20, color: 'white'}}>Content</Text>
            <TextInput
              style={{
                backgroundColor: 'white',
                padding: 10,
                height: 200,
                textAlignVertical: 'top',
              }}
              value={formData.content}
              multiline={true}
              numberOfLines={6}
              onChangeText={text =>
                setFormData(prev => {
                  return {...prev, content: text};
                })
              }
            />
            {errors.content.length > 0 && (
              <Text style={{color: 'red'}}>{errors.content}</Text>
            )}
            <Pressable
              style={{
                padding: 10,
                backgroundColor: 'lightblue',
                borderRadius: 10,
                margin: 10,
              }}
              onPress={async () => await handleSubmit()}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}>
                Add post
              </Text>
            </Pressable>
          </View>
          <Pressable
            onPress={() => setIsVisible(false)}
            style={{
              position: 'absolute',
              top: 30,
              right: 30,
            }}>
            <Text
              style={{
                fontSize: 30,
                color: 'white',
                padding: 20,
                backgroundColor: '#000000c7',
                borderRadius: 200,
              }}>
              X
            </Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: StatusBar.currentHeight || 0,
  },
  post: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: 'lightblue',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postContent: {
    fontSize: 18,
  },
});

export default Networking;
