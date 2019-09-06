import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function HomePage(props) {
  const initialPostState = {
    posts: []
  }

  const [posts, setPosts] = useState(initialPostState)

  useEffect(() => {
    const getPosts = async () => {
        const { data } = await axios('/.netlify/functions/getPosts')

        console.log(data)
        setPosts(data)
    }

    getPosts()
  }, [])
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        <Link to="/taniarascia">taniarascia</Link> on GitHub.
      </p>
    </div>
  )
}
