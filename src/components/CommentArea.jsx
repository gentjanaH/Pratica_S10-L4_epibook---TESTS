import { useState, useEffect } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import { Row, Col, Spinner } from "react-bootstrap";



const CommentArea = function (props) {


    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)

    const getComments = function () {
        const URL = "https://striveschool-api.herokuapp.com/api/comments/";

        fetch(URL + props.elementId, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkY2IxNmY0YmQ0NzAwMTU4NWIyMjciLCJpYXQiOjE3NjM2NDU3NDAsImV4cCI6MTc2NDg1NTM0MH0.ZctnvLx_XnYO0Ral46j5zSTTvxo95uelOccqymB3xlg",
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()

                } else throw new Error("Errore nel recupero commenti", res.status)

            })
            .then((arrayOfComment) => {
                console.log(arrayOfComment)

                setComments(arrayOfComment)
                setLoading(false)
            })
            .catch((err) => {
                console.log("Errore:", err)
            })


    }

    useEffect(() => {
        getComments()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.elementId])


    return (
        <>

            <Row >
                <Col xs={12} className="d-flex flex-wrap align-content-center justify-content-center" style={{ height: "110px" }}>
                    <h5 className="text-info">Recensioni</h5>
                </Col>
                <Col xs={12} >
                    {
                        loading ? (
                            <div className="text-center">
                                <Spinner animation="border" variant="success" />
                            </div>
                        ) : (
                            <CommentList
                                comments={comments}
                                title={props.bookTitle} />
                        )
                    }


                </Col>
                <Col xs={12} className="border-top border-info mt-3">
                    <h5 className="text-info mt-2 text-center">Lascia un commento.</h5>
                    <AddComment elementId={props.elementId} />
                </Col>
            </Row >




        </>

    );


}

export default CommentArea