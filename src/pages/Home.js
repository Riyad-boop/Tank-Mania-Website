import React from 'react';
import Getimages from '../components/Getimages';
import { client } from '../client';
import GetHomeCards from '../components/Homepage/GetHomeCards';
import {Container,Row,Col, Button} from 'react-bootstrap'
import {
    Link
} from 'react-router-dom';
// import Download from './DownloadModal';
// import Cover from '../components/Homepage/Cover';
// import Snowfall from 'react-snowfall';
import {Transition} from 'react-spring/renderprops';

class Home extends React.Component {
   
    state = {
        images: [],           // empty array to hold blog posts
        cards: [] ,
        txt : "Tank Mania is an interesting top down shooter developed by Nuareo Gaming. The game is designed with many different maps and gamemodes which implement a myriad of different terrains all with their own unique play style. The player's task in this game is co-operate with other players to destroy all enemies by shooting them down! Very simple, isn't it! "
    }
    
      componentDidMount() {
        client.getEntries({content_type : 'media'}) 
        .then((response) => {
            console.log(response)
            this.setState({
                images : response.items
            })
        })
        .catch(console.error)

        client.getEntries({content_type : 'homeCards'}) 
        .then((response) => {
            console.log(response)
            this.setState({
                cards : response.items
            })
        })
        .catch(console.error)
        }


// https://wp.nkdev.info/youplay/main/
//https://www.firewatchgame.com/
//https://codesandbox.io/s/r0yekozrw?from-embed=&file=/index.js
//plan
// parralax image with tank manai headline https://www.npmjs.com/package/react-parallax   https://codesandbox.io/embed/r0yEkozrw?view=preview
// incldue timer 
//scroll down find game descroption
//scroll more to find 3 cards
// scroll more for time line / carosel
//scroll more for footer


render() {
    return ( 
            <div>
                  {/* <Snowfall
                    // Changes the snowflake color
                    color="#4caf50"
                    // Controls the number of snowflakes that are created (default 150)
                    snowflakeCount={500}
                  /> */}
                {/* <Cover/> */}
            <Getimages pics={this.state.images}/>
            <fade/>                
              {/* <Download/> */}
              
                <div className="home-body">
                    
                        <h1>Game Description</h1>
                        
                        <p className ="Hbody-txt" style = {{marginLeft: "2%", marginRight: "2%"}}>{this.state.txt}</p>
                        <p className ="Hbody-txt">New features are constantly being added, click the link below to our blog page to find out more!</p>                   
                        <Container fluid>
                        <Row>
                        <Col/>
                            <div style = {{width: '25%'}}>
                           <Link to = "/DevBlog">
                                <Button variant="outline-info" block>Blog</Button>
                            </Link>
                            </div>
                        <Col/>
                        </Row>
                        </Container>
                </div>     
                <div style = {{
                     padding: '5px' ,
                     backgroundColor: '#42464d',
                     textAlign: 'center'}}> 
                        <Container fluid>
                            <Row>
                            <Transition
                            items={1} keys={item => item.key}
                            from={{ transform: 'translate3d(-50%,0,0)' }}
                            enter={{ transform: 'translate3d(0,0px,0)' }}
                            leave={{ transform: 'translate3d(-50%,0,0)' }}>
                            {item => props => <div style={props}>{ <GetHomeCards info={this.state.cards} />}</div>}
                            </Transition>
                            </Row>
                            <Row/>
                        </Container>
                </div>
            
            </div>
            );
        }
    }
    
    export default Home;
    
