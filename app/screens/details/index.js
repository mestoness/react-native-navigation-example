import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {style} from './styles';
const Details = ({route}) => {
  const [post, setPost] = useState(null);

  const getPost = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${route.params.id}`,
      );
      const json = await response.json();
      setPost(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <View>
      {post && (
        <View style={style.view}>
          <Text style={style.postTitle}>{post.title}</Text>
          <Text style={style.postBody}>{post.body}</Text>
        </View>
      )}
    </View>
  );
};

export default Details;
