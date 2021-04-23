import React from 'react'
import Post from './Post'

// maps blog posts to a map with each article matched to an index as its key
const Posts = ({ posts }) => {
    return (
        <div>
          {posts.map((article, index) => <Post article={article} key={index} />)}
        </div>
    )
}

export default Posts
// exports Posts to be used in App.js