import React, { Component, Fragment } from 'react'
import SocialButtonsContainer from 'react-social-media-buttons';
import Download from './DownloadModal';
import Media from 'react-media';

class SocialMedia extends Component {

    state = {
        smallIcons:   <SocialButtonsContainer
        links={['https://www.facebook.com/facebook','https://twitter.com/Twitter','https://www.instagram.com/instagram/','https://www.linkedin.com/company/nuaero']}
        buttonStyle={{margin: '10px 10px', backgroundColor: '#07a9a9', borderRadius: '30%' , marginLeft: '20px', marginRight: '20px'}}
        iconStyle={{color: '#032345'}}
        openNewTab={true}
        />
        ,
        medIcons:   <SocialButtonsContainer
        links={['https://www.facebook.com/facebook','https://twitter.com/Twitter','https://www.instagram.com/instagram/','https://www.linkedin.com/company/nuaero']}
        buttonStyle={{margin: '10px 10px', backgroundColor: '#07a9a9', borderRadius: '30%' , marginLeft: '60px', marginRight: '80px'}}
        iconStyle={{color: '#032345'}}
        openNewTab={true}
        />
        ,
        bigIcons:   <SocialButtonsContainer
        links={['https://www.facebook.com/facebook','https://twitter.com/Twitter','https://www.instagram.com/instagram/','https://www.linkedin.com/company/nuaero']}
        buttonStyle={{margin: '10px 10px', backgroundColor: '#07a9a9', borderRadius: '30%' , marginLeft: '110px', marginRight: '100px'}}
        iconStyle={{color: '#032345'}}
        openNewTab={true}
        />
        ,
        verybigIcons:<SocialButtonsContainer
        links={['https://www.facebook.com/facebook','https://twitter.com/Twitter','https://www.instagram.com/instagram/','https://www.linkedin.com/company/nuaero']}
        buttonStyle={{margin: '10px 10px', backgroundColor: '#07a9a9', borderRadius: '30%' , marginLeft: '180px', marginRight: '180px'}}
        iconStyle={{color: '#032345'}}
        openNewTab={true}
        />

        ,
        FourKIcons:<SocialButtonsContainer
        links={['https://www.facebook.com/facebook','https://twitter.com/Twitter','https://www.instagram.com/instagram/','https://www.linkedin.com/company/nuaero']}
        buttonStyle={{margin: '10px 10px', backgroundColor: '#07a9a9', borderRadius: '30%' , marginLeft: '420px', marginRight: '420px'}}
        iconStyle={{color: '#032345'}}
        openNewTab={true}
        />
        };
            

    
    render() {
        return (
            <div className="about-section" style = {{paddingTop: "20px", paddingBottom: "0px"}}> 
                <div className="jumbotron text-white bgPosts" style = {{background: "#23262c" , paddingBottom: "0px"}}> 
                        <h1 style = {{color: 'rgb(7, 169, 169)'}}>Follow us on our social media!</h1>
                              {/* Styling for screen size */}
                              <Media queries={{
                                    small: "(max-width: 599px)",
                                    medium: "(min-width: 600px) and (max-width: 940px)",
                                    large: "(min-width: 941px) and (max-width: 1400px)",
                                    verylarge: "(min-width: 1401px) and (max-width: 2100px)",
                                    FourKIcons: "(min-width: 2101px) and (max-width: 3840px)"
                                    }}>
                                    {matches => (
                                        <Fragment>
                                        {matches.small && this.state.smallIcons}
                                        {matches.medium && this.state.medIcons}
                                        {matches.large && this.state.bigIcons}
                                        {matches.verylarge && this.state.verybigIcons}
                                        {matches.FourKIcons && this.state.FourKIcons}
                                        </Fragment>
                                    )}
                                </Media>

                              
                                <br/>
                            <p>Or click download button below to download Tank Mania alpha release</p>
                            <Download/>
                          
                            
                </div>
            </div>
        )
    }
}

export default SocialMedia
