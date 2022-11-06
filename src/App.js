import './App.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const meAgain = require('./stuff/moi.jpg');

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Row style={{"padding-top": "60px", "padding-left": "60px", "font-size": "50px", "font-family": "DM Serif Text", "font-weight": "bold"}}>
            <Nav defaultActiveKey="/home" as="ul">
              <Nav.Item as="li">
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{"padding-left": "100px"}}>
                <Nav.Link eventKey="/experience">Experience</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{"padding-left": "100px"}}>
                <Nav.Link eventKey="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
            <div style={{"padding-top": "30px", "padding-left": "60px", "font-size": "100px"}}>
              <p>AMIEL</p>
              <p>DOMINIC</p>
              <p>GOZON</p>
            </div>
          </Row>
        </Col>
        <Col>
          <img src={meAgain} alt="Me!" style={{"height": "720px", "width": "950px", "float": "right", "position": "fixed"}}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
