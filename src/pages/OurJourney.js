import React from 'react';
import '../App.css';
import { client } from '../client';
import Posts from '../components/Posts';
import {Transition} from 'react-spring/renderprops';

class OurJourney extends React.Component {
    state = {
        articles: [] ,        // empty array to hold blog posts 
        images: [],           // empty array to hold images
      }
    // gets all content with type blog post and stores it into an empty article array
    componentDidMount() {
        client.getEntries({content_type : 'blogPost'}) 
            .then((response) => {
                console.log(response)
                this.setState({
                    articles : response.items
                })
            })
            .catch(console.error)

            client.getEntries({content_type : 'media'}) 
            .then((response) => {
                console.log(response)
                this.setState({
                    images : response.items
                })
            })
            .catch(console.error)
    }
    


   
// renders page, and fetches data from Posts.js
    render() {
        return ( 
                <div className='wrapper bgPosts'>
                            <Transition
                            items={1} keys={item => item.key}
                            from={{ transform: 'translate3d(0,100%,0)' }}
                            enter={{ transform: 'translate3d(0,0px,0)' }}
                            leave={{ transform: 'translate3d(0,100%,0)' }}>
                            {item => props => <div style={props}>{  <Posts posts={this.state.articles} />}</div>}
                            </Transition>
                   
                    </div>
                );
                
            }
            
        
        }
        
        export default OurJourney;
        
