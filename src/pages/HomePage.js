import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'

const PostItem = (post) => {
    return (
        <div className="post-item">
            <div className="title">
                <Link to={"/post/"+post.ref['@ref']['id']}>{ post.data.title }</Link>
            </div>
            <div className="extra">
                <div className="left">
        {
            post.data.tag.map(tag => {
                        return (
                            <span className="tag is-light">{ tag }</span>
                        )
                    })
        }
                </div>
                <div className="right">
                    { dayjs(post.ts/1000).format('YYYY-MM-DD') }
                </div>
            </div>
        </div>
    )
}
export default function HomePage(props) {
  const initialPostState = {
    posts: []
  }

  const [posts, setPosts] = useState(initialPostState)

  useEffect(() => {
    const getPosts = async () => {
        const { data } = await axios('/.netlify/functions/getPosts')

        console.log(data)
        setPosts(data.sort((p1, p2) => p2.ts - p1.ts))
    }

    getPosts()
  }, [])
  return (
    <div className="container">
      <h1>Wizard Blog</h1>
      <div className="posts">
      {
        posts.length ? (
            posts.map(PostItem)
        ) : (
            <div>No Post</div>
        )
    }
      </div>
    </div>
  )
}
