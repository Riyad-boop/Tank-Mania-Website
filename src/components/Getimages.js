import React from 'react'
import Galleries from './Galleries.js'

// maps blog posts to a map with each article matched to an index as its key
const Getimages = ({ pics }) => {
    return (
        <div>
          {pics.map((assets, index) => < Galleries assets ={assets} key={index} />)}
          {console.log(pics)}
        </div>
    )
}

export default Getimages
// exports Posts to be used in App.js


//(article, index) => <Gallery article={article} key={index} />)}