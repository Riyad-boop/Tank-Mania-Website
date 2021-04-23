import React from 'react'
import marked from 'marked' //import for marked HTML
import Moment from 'moment' //import for date function

// Extracts infomation from its parameter, then returns some Jsx to be sown on the webpage
function Post(props) {
    //loading props to console (for dev)
   console.log(props)
    // setting up local variables
    
    const article = props.article
    const author = article.fields.authorRef.fields
    const formattedDate = Moment(article.fields.publishDate).format("LL");
    const imgURL = article.fields.postMedia.fields.file.url

    var blogpostImage = null;
    // if the image url is not the sample image then include it into the website
    if (imgURL === "//images.ctfassets.net/6bn5iyrtf007/5ytTozStnDtQGJW0aBUfA6/6de9e0c2c79080f76b737e0b8ec28990/Capture.PNG") {
      console.log("hey my if statement works!")
    }
    else {
      blogpostImage =  <img
      className="d-block w-100 boxPost"
      src = {imgURL} 
      alt = {imgURL}
    />
    }

    var currentDate = Moment().format("LL");

    const {title, content} = article.fields 
    const postDescription = marked(content)

    // if current date is exact match of current date then new badge shows up for that post 
    var label = null;
    if (currentDate === formattedDate) {
        label = <span className="badge badge-pill badge-info ml-3">New</span>
    } 
    else {
        label = <span className="badge badge-pill badge-secondary ml-3"></span>;
    }
   
    return (
      <div className = 'bgPosts'>
       
        <div className="jumbotron bg-dark text-white boxPost bgPosts"> 
                        <h1 className='title'> {title}     
                            {label}
                        </h1>
                       {blogpostImage}
                        <br/>
                        <section dangerouslySetInnerHTML={{ __html: postDescription }} />
                        <hr/>
                        <div className="media p-3">
                        <img 
                            width={64}
                            height={64}
                            className= "mr-3 mt-6 rounded"
                            src={author.avatar.fields.file.url} 
                            alt= {author.name}
                            >
                        </img>
                            <div className="media-body">
                                    <h3 className = "author">{author.name}</h3>
                                    <small><i>  Posted on {formattedDate}</i></small>
                                </div>
                        </div>
            
            </div>
        </div>
    )
}


export default Post



//<div className="jumbotron jumbotron-fluid bg-secondary"> 
//<div className="jumbotron bg-dark text-white shadow-lg bgPosts"> 

//<div className="jumbotron bg-secondary text-white shadow-lg"> 

//

