import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';

const SingleComment = function (props) {
    return (
        <ListGroup.Item key={props.comment._id} >
            <Row >
                <Col xs={"7"}> {props.comment.comment}</Col>
                <Col xs={"3"}>Voto:</Col>
                <Col xs={"2"}>{props.comment.rate}</Col>
            </Row>

        </ListGroup.Item>
    )
}


export default SingleComment