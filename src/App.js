import './App.css';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <Container>
        <Row style={{"padding-top": "100px"}}>
          <Col>
            <SidebarMenu>
              <SidebarMenu.Body>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link href="https://www.linkedin.com/in/amielgozon/">
                    LinkedIn
                  </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link href="https://github.com/ayyymiel">
                    GitHub
                  </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav>
              </SidebarMenu.Body>
            </SidebarMenu>
          </Col>
          <Col >
            <h1>Amiel Dominic Gozon</h1>
          </Col>
        </Row>
      </Container>
  </div>
  );
}

export default App;
