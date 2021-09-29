import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import {style} from './styles';
import Card from '../../core/components/card';

const Home = ({navigation}) => {
  const [posts, setPosts] = useState(null);

  const getPosts = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_page=1',
      );
      const json = await response.json();
      setPosts(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={style.view}>
      <Text style={style.headerTitle}>Posts</Text>
      {posts && (
        <FlatList
          data={posts}
          renderItem={Card}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};
export default Home;
