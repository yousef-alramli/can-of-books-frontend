import React from 'react';
import axios from 'axios';
import {
  Card,
  Alert
} from 'react-bootstrap';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  componentDidMount = () => {
    axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/books`).then(res => {
      this.setState({
        books: res.data.books
      })
    })

  }
  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {
    /* TODO: render user's books in a Carousel */

    return (
      console.log(this.state.books),

      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length !== 0 ? (
          this.state.books.map(item => {
            return <>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{item.status}</Card.Subtitle>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Card.Link href="#">{item.email}</Card.Link>
                </Card.Body>
              </Card>
            </>
          })
        ) : (
          <Alert variant='danger'>
            There's no books.
          </Alert>
        )}
      </>
    )
  }
}

export default BestBooks;
