import { Container, Row, Col } from 'react-bootstrap';
import fantasy from "../data/fantasy.json"


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const AllTheBooks = function () {



    return (
        <Container fluid className="bg-dark text-white px-5 ">
            <Row className=" text-center">
                <Col >
                    <h1 id="start" className="my-3 text-info custom-font">I tuoi libri a portata di click!</h1>

                </Col>
            </Row>

            <Row xs={1} md={3} lg={5} className="bg-dark text-white flex-wrap g-2">
                {
                    fantasy.map((b) => (
                        <Col key={b.asin} data-testid="book-card" >
                            <Card className="h-100 border-info bg-dark text-light ">
                                <Card.Img variant="top" className="img-fluid w-100" src={b.img} />
                                <Card.Body className="d-flex flex-column justify-content-around ">
                                    <Card.Title>{b.title}</Card.Title>
                                    <Card.Text>
                                        {b.category}

                                    </Card.Text>
                                    <div className="d-flex justify-content-between flex-wrap align-baseline">
                                        <strong className="text-success">€ {b.price}</strong>
                                        <Button variant="info" className="rounded-pill">Buy</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }

            </Row>
        </Container>
    )

}


export default AllTheBooks;