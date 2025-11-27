import { Col, Row, Form } from 'react-bootstrap';
import OneBook from "./OneBook";
import { useState } from 'react'

const BookList = function (props) {

    const [searchQuery, setsearchQuery] = useState("")


    return (
        <>

            <Col xs={12} >
                <Form className="d-flex justify-content-center my-3 ">
                    <Form.Group className="mb-3  w-50 " controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Cerca"
                            value={searchQuery}
                            onChange={(e) => {
                                setsearchQuery(e.target.value)
                            }}
                            className="bg-secondary text-light " />

                    </Form.Group>
                </Form>
            </Col>
            <Row xs={1} md={2} xl={3} className="g-3">
                {props.books
                    .filter((book) =>
                        book.title.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((book) => (
                        <OneBook
                            key={book.asin}
                            book={book}
                            handleBookSelect={props.handleBookSelect}
                            selectedBook={props.selectedBook} />
                    ))}
            </Row>

        </>

    )

}



export default BookList;