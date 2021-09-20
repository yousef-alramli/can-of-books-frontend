import React from 'react';
import axios from 'axios';
import {
  Card,
  Alert,
  Col,
  Row,
  Form,
  Button
} from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      bookName: '',
      description: '',
      boookStatus: '',
      email: ''
    }

  }
  componentDidMount = () => {
    axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/books`).then(res => {
      this.setState({
        book: res.data
      })

    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      bookName: e.target[0].value,
      description: e.target[1].value,
      boookStatus: e.target[2].value,
      email: e.target[3].value
    })
    let config = {
      method: "POST",
      baseURL: `http://${process.env.REACT_APP_BACKEND_URL}`,
      url: "/creat-books",
      data: {
        title: this.state.bookName,
        description: this.state.description,
        status: this.state.boookStatus,
        email: this.state.email
      }
    }
    axios(config).then(res => {
      console.log(res);
      // this.setState({
      //   book:res.data
      // })


    })
  }
  handleDelete = (id) => {
    let bookId = id;
    let config={
      method:"DELETE",
      baseURL:`http://${process.env.REACT_APP_BACKEND_URL}`,
      url:`/delete-book/${bookId}`,
    }
    axios(config).then(response=>{
      this.setState({
        book:response.data
      })
    })
  }
  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {
    /* TODO: render user's books in a Carousel */

    return (
      <>
        <div>
          <Col style={{ width: '50%' }}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Label>Book name</Form.Label>
              <Form.Control name='name' required />
              <Form.Label>description</Form.Label>
              <Form.Control as="textarea" rows={3} name='description' required />
              <Form.Label>Status</Form.Label>
              <Form.Control name='status' required />
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" name='email' required />
              <Button variant="outline-primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </div>
        <div>
          <h2>The best books</h2>
          <Row>
            {this.state.book.length !== 0 ? (

              this.state.book.map(item => {
                return <>
                  <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{item.status}</Card.Subtitle>
                        <Card.Text>
                          {item.description}
                        </Card.Text>
                        <Card.Link href="#">{item.email}</Card.Link>
                        <Button variant="primary" onClick={()=>this.handleDelete(item._id)}>click to Delete book</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              })
            ) : (
              <Alert variant='danger'>
                There's no books.
              </Alert>
            )}
          </Row>
        </div>
      </>
    )
  }
}

export default BestBooks;
