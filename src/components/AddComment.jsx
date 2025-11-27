import { useState } from "react"
import { Button, Form } from 'react-bootstrap';



const AddComment = function (props) {

    const [singleComment, setsingleComment] = useState({
        comment: "",
        rate: "",
        elementId: props.elementId
    })

    const submitComment = (e) => {
        e.preventDefault()
        const URL = "https://striveschool-api.herokuapp.com/api/comments/";

        fetch(URL, {
            method: "POST",
            body: JSON.stringify(singleComment),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkY2IxNmY0YmQ0NzAwMTU4NWIyMjciLCJpYXQiOjE3NjM2NDU3NDAsImV4cCI6MTc2NDg1NTM0MH0.ZctnvLx_XnYO0Ral46j5zSTTvxo95uelOccqymB3xlg",
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                if (res.ok) {
                    alert("Commento inviato con successo")

                    setsingleComment({
                        comment: "",
                        rate: "",
                        elementId: props.elementId
                    })

                } else {
                    throw new Error("Errore nell'invio del commento: ", res.status)
                }
            })
            .catch((err) => {
                console.log("Errore:", err)
            })
    }




    return (
        <Form onSubmit={submitComment}>

            <Form.Group className="mb-3" controlId="rate">
                <Form.Label>Voto</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="da 1 a 5"
                    min={1}
                    max={5}
                    value={singleComment.rate}
                    onChange={(e) =>
                        setsingleComment({
                            ...singleComment,
                            rate: e.target.value

                        })
                    } />
            </Form.Group>

            <Form.Group className="mb-3" controlId="comment">
                <Form.Label>Recensione</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Scrivi qui la tua recensione"
                    rows={3}
                    value={singleComment.comment}
                    onChange={(e) =>
                        setsingleComment({

                            ...singleComment,
                            comment: e.target.value

                        })
                    } />
            </Form.Group>

            <Button variant="primary" type="submit">
                Invia Commento
            </Button>
        </Form>
    )

}



export default AddComment