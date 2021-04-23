import React from 'react'
import { client } from '../client';
import GetCards from '../components/GetCards';
import {Container,Row} from 'react-bootstrap';
import {Transition} from 'react-spring/renderprops';

class Aboutus extends React.Component {
    state = {
        teamCards: [] ,        // empty array to hold cards info 
        
      }
      
    // gets all content with type blog post and stores it into an empty article array
    componentDidMount() {
        client.getEntries({content_type : 'aboutCards'}) 
            .then((response) => {
                console.log(response)
                this.setState({
                    teamCards : response.items
                })
            })
            .catch(console.error)
        }
            
    
    render(){
    return (
            <div >
                <div className="about-section">
                    <h1 style = {{color: 'rgb(7, 169, 169)'}}>About Us</h1>
                    <p>Nuaero Tek is a recently established game development software team, currently developing our first professional game: Tank Mania.</p>
                    <p>Thank you for your interest!</p>
                </div>
                <div className = "jumbotron jumbotron-fluid bg-dark text-white shadow-lg">
                <h2 className = 'team-container'  style = {{color: 'rgb(7, 169, 169)'}}>Our Team</h2>
                <Container fluid>
                    <Row>
                            <Transition
                            items={1} keys={item => item.key}
                            from={{ transform: 'translate3d(-50%,0,0)' }}
                            enter={{ transform: 'translate3d(0,0px,0)' }}
                            leave={{ transform: 'translate3d(-50%,0,0)' }}>
                            {item => props => <div style={props}>{    <GetCards info = {this.state.teamCards}/>}</div>}
                            </Transition>
            
               </Row>
               <Row/>
               </Container>
                </div>
            </div>
        )
    }
}


export default Aboutus



