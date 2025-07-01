import { useState } from 'react'
import './App.css'
import MainContent from './Components/MainContent'
import PostForm from './Components/PostForm'
import PostContainer from './Components/PostContainer'
import PostItem from './Components/PostItem'

function App() {

  const [post, setPost] = useState([]);

  return (
    <>
      <MainContent>
        <PostForm post={post} setPost={setPost}/>
        <PostContainer>
          {post.map((post, index) => {
            return <PostItem username={post.username}/>
          })}
        </PostContainer>
        </MainContent>
    </>
  )
}

export default App
