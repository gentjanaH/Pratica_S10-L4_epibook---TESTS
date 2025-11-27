

import MyNav from "./components/MyNav"
// import AllTheBooks from "./components/AllTheBooks"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
// import OneBook from "./components/OneBook"
import fantasy from "./data/fantasy.json"
import BookList from "./components/BookList"
import 'bootstrap/dist/css/bootstrap.min.css'
import CommentArea from "./components/CommentArea"
import { useState } from "react"
import { Container, Row, Col } from 'react-bootstrap';


const App = function () {

  const [selectedBook, setselectedBook] = useState(null)

  const handleBookSelect = (book) => {
    setselectedBook(book)
  }


  return (
    <>

      <Welcome />
      <MyNav />
      {/* <OneBook book={fantasy[1]} /> */}

      <Container fluid className=" bg-dark">
        <Row >

          <Col xs={6} lg={8} >
            <BookList books={fantasy}
              handleBookSelect={handleBookSelect}
              selectedBook={selectedBook} />
          </Col>
          <Col xs={6} lg={4} >
            {selectedBook ? (


              <CommentArea
                elementId={selectedBook.asin}
                bookTitle={selectedBook.title} />

            ) : (
              <div className="d-flex flex-wrap align-content-center justify-content-center" style={{ height: "90px" }} >
                <p className="text-info text-center my-2">Seleziona un libro per leggere i commenti.</p>
              </div>
            )
            }
          </Col>
        </Row>



      </Container>

      {/* <AllTheBooks /> */}

      <MyFooter />
    </>
  )

}

export default App

