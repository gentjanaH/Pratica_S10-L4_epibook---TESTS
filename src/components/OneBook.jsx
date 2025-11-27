import { Col, Card } from 'react-bootstrap';




const OneBook = function (props) {



    return (
        <Col>
            <Card
                className={`h-100 my-2 ${props.selectedBook?.asin === props.book.asin ? "border border-3 border-danger" : "border-info"}`}
                data-testid="card-libri">
                <Card.Img
                    variant="top"
                    src={props.book.img}
                    alt="copertina-libro"
                    className="h-75 w-100"
                    onClick={() => props.handleBookSelect(props.book)
                    }
                />
                <Card.Body className="d-flex flex-column justify-content-around ">
                    <Card.Title>{props.book.title}</Card.Title>
                    <Card.Text>
                        {props.book.category}

                    </Card.Text>
                    <div className="d-flex justify-content-between flex-wrap align-baseline">
                        <strong className="text-success">€ {props.book.price}</strong>
                    </div>
                </Card.Body>


            </Card>
        </Col>
    )





}

export default OneBook;