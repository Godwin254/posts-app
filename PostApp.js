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
    
    </div>
  )
}

export default PostApp;
