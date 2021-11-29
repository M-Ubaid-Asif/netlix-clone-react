import { Col, Container,Row } from 'react-bootstrap';
import './App.css';
import Cards from './Components/Card';
import Header from './Components/Header';
const allCards = [
  {
    id : 1,
    imgSrc : 'https://wallpapercave.com/wp/wp1917154.jpg',
    sCategory : 'A Netflix Original Series ',
    title : 'Stranger Things',
    link : 'https://www.netflix.com/in/title/80057281',
    description: 'Stranger Things is an American science fiction horror drama television series created by the Duffer Brothers and streaming on Netflix.'
  },
  {
    id : 2,
    imgSrc : 'https://wallpapercave.com/wp/wp7418494.jpg',
    sCategory : 'A Netflix Original Series ',
    title : 'Extra Curricular',
    link : 'https://www.netflix.com/in/title/80990668',
    description: ''
  },
  {
    id : 3,
    imgSrc : 'https://wallpapercave.com/wp/wp4056407.jpg',
    sCategory : 'A Netflix Original Series ',
    title : 'Dark',
    link : 'https://www.netflix.com/in/title/80100172',
    description:''
  }
  ,
  {
    id : 4,
    imgSrc : 'https://images6.fanpop.com/image/photos/39500000/Bloodline-Season-2-Poster-bloodline-netflix-39596252-404-595.jpg',
    sCategory : 'A Netflix Original Series ',
    title : 'Bloodline',
    link : 'https://www.netflix.com/in/title/80010655',
    description:''
  }
  ,
  {
    id : 3,
    imgSrc : 'https://wallpapercave.com/wp/wp4056407.jpg',
    sCategory : 'A Netflix Original Series ',
    title : 'Dark',
    link : 'https://www.netflix.com/in/title/80100172',
    description:''
  }
]

function App() {
  

  return (
    
    <>
    <div className='main-con'>
      <Header />
      <Container>
        <Row md={3} >
      {allCards.map((item)=>{
        return (
          <Col xs={0} md={6} lg={4} sm={0}>
          <Cards key={item.id} imgSrc={item.imgSrc} sCategory={item.sCategory} title={item.title} link={item.link} description={item.description}/>       
          </Col>
          ) 
          
        })
      }
        </Row>
      </Container>
  </div>
  </>
  );
}

export default App;
