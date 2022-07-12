import React from 'react';
import './App.css';
import axios from 'axios';

const jsonapi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

function App() {
  const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   jsonapi
  //     .get('/1')
  //     .then((response) => {
  //       setPost(response.data);
  //       console.log('updated');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  React.useEffect(() => {
    async function getPost() {
      const response = await jsonapi.get('/1');
      setPost(response.data);
      console.log('fetched post');
    }
    getPost();
  }, []);

  // function createPost() {
  //   jsonapi
  //     .post('', { title: 'Hello Create', body: 'This is a new post' })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  async function createPost() {
    const response = await jsonapi.post('', {
      title: 'Hello Create',
      body: 'This is a new post',
    });
    setPost(response.data);
  }

  // function updatePost() {
  //   jsonapi
  //     .put('/1', {
  //       title: 'Hello Update',
  //       body: 'this is an updated post',
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  async function updatePost() {
    const response = await jsonapi.put('/1', {
      title: 'Hello Update',
      body: 'This is an updated post',
    });
    setPost(response.data);
  }

  // function deletePost() {
  //   jsonapi.delete('/1').then(() => {
  //     alert('post deleted');
  //     setPost(null);
  //   });
  // }

  async function deletePost() {
    await jsonapi.delete('/1');
    alert('Post Deleted');
    setPost(null);
  }

  if (!post)
    return (
      <div>
        <h2>no post</h2>
        <button onClick={createPost}>Create Post</button>
      </div>
    );

  return (
    <div className='App'>
      <h2>Axios</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}

export default App;
