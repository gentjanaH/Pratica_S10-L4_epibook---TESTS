import ListGroup from 'react-bootstrap/ListGroup';
import SingleComment from "./SingleComment";



const CommentList = function (props) {
    return (
        <>
            <h5 className="text-center text-light">{props.bookTitle}</h5>
            <ListGroup>
                {props.comments.map((comment) => (
                    <SingleComment key={comment._id} comment={comment} title={props.title} />
                ))}
            </ListGroup>
        </>
    )
}


export default CommentList