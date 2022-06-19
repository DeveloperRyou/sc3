import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

function Introduce() {
  return (
    <div>
      <Row>
        <Col className="pb-3 pr-2">
          <Image fluid rounded src="/DC3 Marketing CS.png"></Image>
        </Col>
        <Col className="pb-3 pr-2">
          <Image fluid rounded src="/DC3 Manager.png"></Image>
          </Col>
      </Row>
      <Row>
        <Col className="pt-3 pr-2">
          <Image fluid rounded src="/DC3 CCO 1.png"></Image>
        </Col>
        <Col className="pt-3 pr-2">
          <Image fluid rounded src="/DC3 CCO 2.png"></Image>
          </Col>
      </Row>
    </div>
  );
}

export default Introduce;
