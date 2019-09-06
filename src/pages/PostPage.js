import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'

export default function PostPage(props) {
  const initialPostState = {
    post: []
  }

  const [post, setPost] = useState(initialPostState)

  useEffect(() => {
    const getPost = async () => {
        const { data } = await axios(`/.netlify/functions/getPost/${props.match.params.id}`)

        console.log(data)
        setPost(data)
    }

    getPost()
  }, [])
    
  async function handleDelete () {
    await axios.post(`/.netlify/functions/deletePost/${props.match.params.id}`)
    window.history.back()
  }  
  return (
    <div className="container">
      <h1>Wizard Blog</h1>
      <div className="post-detail">
        {
            post.data ? (
            <div>
                <div className="post-title title">
                    { post.data.title }
                </div>
                <div className="extra">
                    <span className="author">{ post.data.author }</span>
                    <span className="date">{ dayjs(post.ts/1000).format('YYYY-MM-DD') }</span>
                </div>
                <div className="content">
                    { post.data.content }
                </div>
                <div className="tags">
                {
                    post.data.tag.map(tag => {
                        return (
                            <div className="tag">{ tag }</div>
                        )
                    })
                }
                </div>
                <div>
                    <a className="button is-outlined is-danger" onClick={ handleDelete }>Delete</a>
                </div>
            </div>
            ) : ''
        }
      </div>
    </div>
  )
}
