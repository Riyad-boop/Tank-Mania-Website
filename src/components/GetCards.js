import React from 'react'
import Cards from './Cards'

// maps blog posts to a map with each article matched to an index as its key
const GetCards = ({ info }) => {
    return (
        <div>
          {info.map((article, index) => <Cards article={article} key={index} />)}
        </div>
    )
}

export default GetCards
// exports Posts to be used in App.js