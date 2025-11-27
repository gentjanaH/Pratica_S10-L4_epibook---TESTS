import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = function () {
    return (
        <Container fluid id="footer">
            <Row className="bg-dark text-white text-center py-3">
                <Col>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-decoration-none text-light ">epi@books.com</a></li>
                        <li><a href="#" className="text-decoration-none text-light ">007564637</a></li>
                        <li><a href="#start" className="text-decoration-none text-light ">
                            <span >&copy; - EpiBooks - 2025</span>
                        </a></li>


                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default MyFooter;