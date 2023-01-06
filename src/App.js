import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col style={{"padding-top": "50px"}}>
            <Row>
              <Table>
                <thead>
                  <th width="10%">About</th>
                  <th width="10%">Experience</th>
                  <th width="10%">Contact</th>
                </thead>
              </Table>
            </Row>
            <div style={{"padding-top": "20px"}}>
              <h1>Amiel</h1>
              <h1>Dominic</h1>
              <h1>Gozon</h1>
            </div>
          </Col>
          <Col>
            <Image 
              src={require("./images/310283892_408614708131926_2498100502036794162_n.jpg")}
              alt="me"
              style={{"position": "absolute", "top": 0, "right": 0, "object-fit":"cover"}}
              height="600px"
              width="600px"
              />
          </Col>
        </Row> 
      </Container>
    </div>
  );
}

export default App;
