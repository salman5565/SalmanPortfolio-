import Container from "react-bootstrap/Container";
import "../Home/style.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

function HomePage() {
  return (
    <div className="main">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="data">
              <h1 className="heading">Hello!</h1>
              <h2 className="subHeading">It's Salman</h2>
              <p className="paraGraph">I am a Full Stack Designer</p>
              <Button className="contactMeBtn">Download CV</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
