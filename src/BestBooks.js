import React from 'react';
import axios from 'axios';
import BookFormModal from './BookFormModal';
import UbdateForm from './UbdateForm';
import {
  Alert,
  Carousel,
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
      email: '',
      showUpdateForm: false,
      updateId: ''
    }

  }
  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/books`).then(res => {
      this.setState({
        book: res.data
      })
      console.log(res.data);
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    await this.setState({
      bookName: e.target[0].value,
      description: e.target[1].value,
      boookStatus: e.target[2].value,
      email: e.target[3].value
    });

    let config = await {
      method: "POST",
      baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
      url: "/creat-books",
      data: {
        title: this.state.bookName,
        description: this.state.description,
        status: this.state.boookStatus,
        email: this.state.email
      }
    };
    axios(config).then(res => {
      this.setState({
        book: res.data
      });
    })
  }

  handleUpdate = (id, title, description, status, email) => {
    this.setState({
      updateId: id,
      bookName: title,
      description: description,
      boookStatus: status,
      email: email,
      showUpdateForm: true
    })
  }
  handleUpdateSubmit = async (e) => {
    e.preventDefault();
    await this.setState({
      bookName: e.target[0].value,
      description: e.target[1].value,
      boookStatus: e.target[2].value,
      email: e.target[3].value
    })
    console.log(this.state.bookName);
    let config = await {
      method: "PUT",
      baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
      url: `/update-book/${this.state.updateId}`,
      data: {
        title: this.state.bookName,
        description: this.state.description,
        status: this.state.boookStatus,
        email: this.state.email
      }
    }
    axios(config).then(res => {
      this.setState({
        book: res.data
      })
      console.log(res.data);
    })
  }

  handleDelete = (id) => {
    let bookId = id;
    let config = {
      method: "DELETE",
      baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
      url: `/delete-book/${bookId}`,

    }
    axios(config).then(response => {
      this.setState({
        book: response.data
      })
    })
  }


  render() {
    /* TODO: render user's books in a Carousel */
    return (
      <>
        {
          this.state.showUpdateForm ?
            <UbdateForm handleUpdateSubmit={this.handleUpdateSubmit} />
            :
            <BookFormModal handleSubmit={this.handleSubmit} />
        }
        <div>
          <h2>The best books</h2>
            <Carousel>
            {this.state.book.length !== 0 ? (

              this.state.book.map(item => {
                return <Carousel.Item>
                      <img
                       style ={{height: '670px'}}
                        className="d-block w-100"
                        src="https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>Book name: {item.title}</h3>
                        <p>{item.status}</p>
                        <p>{item.description}</p>
                        <p>Email: {item.email}</p>
                      </Carousel.Caption>
                    <Button
                      style={{ margin: '18px' }}
                      variant="primary"
                      onClick={() => this.handleDelete(item._id)}>
                      click to Delete book
                    </Button>
                    <Button
                      style={{ margin: '18px' }}
                      variant="info"
                      onClick={() => this.handleUpdate(item._id, item.title, item.description, item.status, item.email)}>
                      click to update book
                    </Button>
                    </Carousel.Item>

                
              })
              ) : (
                <Alert variant='danger'>
                There's no books.
              </Alert>
            )}
            </Carousel>
        </div>
      </>
    )
  }
}

export default BestBooks;
