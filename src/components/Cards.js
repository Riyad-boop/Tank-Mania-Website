import React from 'react'
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'
// Extracts infomation from its parameter, then returns some Jsx to be shown on the webpage
function Cards(props) {
    
    // console.log(props)

    const infomation = props.article.fields
    const name = infomation.title
    const email = infomation.email
    const position = infomation.positionTitle
    const imgURL = infomation.avatar.fields.file.url
    const LinkedInURL = infomation.linkedInUrl.content[0].content[1].data.uri
    var myclassname = 'column';

    if(name === 'Riyad Rahman'){
        myclassname = 'RiyadCard'
    }
    else{
        myclassname = 'column'
    }

    return (
        <div className='cards text-white shadow-sm'>
            <Card border="dark" className = {myclassname}>
            <Card.Img style = {{
                 width: '100%' ,
                height: '100%',
                backgroundColor: "#23262c"}}
                 variant="top"
                  src={imgURL}/>
            <Card.Body style={{backgroundColor: "#23262c"}}>
                <Card.Title  className="AboutNames">{name}</Card.Title>
                <Card.Text>
                    {position}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem style={{backgroundColor: "#23262c"}}>{email}</ListGroupItem>
            </ListGroup>
                <Card.Footer style={{backgroundColor: "#23262c"}}>
                    <Card.Link href={LinkedInURL}>LinkedIn</Card.Link>
                </Card.Footer>  
            </Card> 
        </div>
    )
}

export default Cards
