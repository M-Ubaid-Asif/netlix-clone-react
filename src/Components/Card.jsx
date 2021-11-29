import React from "react";
import { Card,Button} from "react-bootstrap";

function Cards(props) {
    const btnObj = {
        cursor: 'pointer',
        // marginTop: '.5rem'
    }
    return (
        <>
            <Card style={{ width: '25rem',height:'30rem'}} className='cards' bg='dark' variant='dark' id='series'>
                <Card.Img variant="top" src={props.imgSrc} alt={props.title} className='card-img' />
                <Card.Body style={{color:'#fff'}}>
                    <h6>
                        {props.sCategory}
                    </h6>
                    <Card.Title style={{fontSize:'16'}}>{props.title}</Card.Title>
                    <Card.Text style={{height:'30px'}}>

                   <p style={{fontSize: '12px'}}>{props.description}</p>
                    </Card.Text>
                    <div style={{textAlign:'center',margin:'0px'}}>
                    <a href={props.link} target="_blank" rel='noreferrer'>
                    <Button variant="primary" style={btnObj} >Watch Now</Button>
                        {/* <button style={btnObj}> Watch Now </button> */}
                    </a>
                    </div>

                </Card.Body>
            </Card>

        </>
    )
}


export default Cards;