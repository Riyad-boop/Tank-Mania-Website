import React from 'react'
import {Card} from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'


// Extracts infomation from its parameter, then returns some Jsx to be shown on the webpage
function Cards(myprops) {
    
    console.log(myprops)

    const infomation = myprops.article.fields
    const title = infomation.title
    const content = infomation.description
    const imgURL = infomation.icon.fields.file.url
 
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 480, (x - window.innerWidth / 2) / 480, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const mycards = ( <Card bg = "dark" text = 'white' border="dark" >
<Card.Img className= 'm-auto ' style = {{
     width: '64px' ,
    height: '64px' ,
    padding: '5px' }}
     variant="top"
      src={imgURL}/>
<Card.Body>
    <Card.Title style = {{
        color: 'rgb(7, 169, 169)'}}>
            {title}
    </Card.Title>
    <Card.Text>{content}</Card.Text>
</Card.Body>
</Card> )

const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
 

    return (
      
      <animated.div
     class = 'cards Hcard-column boxPost'
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >  
    {mycards}
    </animated.div>
    )
}

export default Cards



