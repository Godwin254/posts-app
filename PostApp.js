import React, {useEffect, useState} from 'react';

function PostApp(){

  const [post, setPost] = useState({});
  const [error, setError] = useState('')
  const [count, setCount] = useState(1)
  

  useEffect(()=>{
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${count}`)
      .then(res => {
        console.log(res);
        setPost(res.data)
      })
      .catch(err => {
        console.log(err)
        setError(error = 'failed to fetch post');
      })
  })

  return (
    <div>
      <button type='button' onClick={() => setCount(count + 1)}>next post</button>
      <button type='button' onClick={() => setCount(count - 1)}>prev post</button>

      <div>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <h5>{error}</h5>
      </div>
    </div>
  )
}

export default PostApp;
