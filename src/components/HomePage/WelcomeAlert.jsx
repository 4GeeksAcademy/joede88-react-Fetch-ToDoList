import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WelcomeAlert = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Alert variant="secondary">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              Bienvenid@s a mi boilerplate de React. Aprovecha este espacio para
              crear todo lo que se te ocurra.
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeAlert;
