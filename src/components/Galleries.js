import React from 'react'
import {Carousel} from 'react-bootstrap'
import Timer from './Homepage/Timer';
import Download from '../pages/DownloadModal';
import Media from 'react-media';
import {Spring} from 'react-spring/renderprops'


const Galleries = ({assets}) => {

    console.log(assets)

    const slide1 = assets.fields.slideshow[0].fields.file.url
    const slide2 = assets.fields.slideshow[1].fields.file.url
    const slide3 = assets.fields.slideshow[2].fields.file.url

    const insideStyles = {
       fontFamily: "sans-serif",
    textAlign: "center",
      background: "none",
      position: "absolute",
      top: "17.5%",
      left: "50%",
      transform: "translate(-50%,-50%)", 
      opacity : 0.95
    };
    
   
    const items = [ <p style = {{color : "#218380", fontSize: "20px", paddingTop: "45px", WebkitTextStroke: "0.75px #218380"}}>Time remaining till launch</p>, 
                    <Timer/>, 
                    <div style = {{paddingTop: "15px"}}><Download/></div>   ]

     const myCoutdown = 
     ( <div style={insideStyles}> 
        {items}
      </div> );
      
  
 
    return (
        <div className='carousel-basic' style= {{paddingTop: '0px'}}>
           <Carousel>
              <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src = {slide1} 
                alt="First slide"
            
                
              />
              <Media query="(min-width: 650px)" render={() => (
                <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <div style={props}>{myCoutdown}</div>}
              </Spring>) }/> 
         <Carousel.Caption>
                <h3>{assets.fields.slideshow[0].fields.title}</h3>
                <p>{assets.fields.slideshow[0].fields.description}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src= {slide2} 
                alt="Second slide"
            
              />
                  <Media query="(min-width: 650px)" render={() => (
                    <Spring
                      from={{ opacity: 0 }}
                      to={{ opacity: 1 }}>
                      {props => <div style={props}>{myCoutdown}</div>}
                  </Spring>) }/> 
              <Carousel.Caption>
                <h3>{assets.fields.slideshow[1].fields.title}</h3>
                <p>{assets.fields.slideshow[1].fields.description}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src= {slide3} 
              alt="Third slide"
          
            />
                <Media query="(min-width: 650px)" render={() => (
                  <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}>
                    {props => <div style={props}>{myCoutdown}</div>}
                  </Spring>) }/>
            <Carousel.Caption>
              <h3>{assets.fields.slideshow[2].fields.title}</h3>
              <p>{assets.fields.slideshow[2].fields.description}</p>
            </Carousel.Caption>
          </Carousel.Item>

          </Carousel> 
        </div>
    )
}

export default Galleries
