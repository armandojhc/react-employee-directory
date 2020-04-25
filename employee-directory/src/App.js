import React, { Component } from "react";
import API from "./utils/API";
import Table from 'react-bootstrap/Table';
import EmployeeRow from './components/EmployeeRow';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './App.css';


// import Alert from "../components/Alert";

class App extends Component {

  state = {
    search: "",
    employees: [{name: {first:"Test"}}],
    results: []
    
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
  
    API.getAllEmployees()
       .then(res => {
         
         this.setState({ employees: res.data.results, results: res.data.results });


         console.log(res.data.results[0]);
  
       })
       .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value }); 
  };


  search = (event) => {
    
    
    let searchTerm = event.target.value.toLowerCase();


    let searchResults = [];

    for (var i = 0; i < this.state.employees.length; i++) {
      let employee = this.state.employees[i];
      if (employee.name.first.toLowerCase().includes(searchTerm) || employee.name.last.toLowerCase().includes(searchTerm)) {
        searchResults.push(employee);
      }
    }

    console.log(`There are ${searchResults.length} results`);

    this.setState({ results: searchResults });
    

  }

//   This is where you render the components. Need to write each component that is rendered here. 
  render() {
    
    //console.log(this.state.employees.length);
    return (
      
      <Container fluid>
        <Jumbotron fluid className="jumboTron">
          
            <h1>Employee Search App</h1>
            <p>
              
            </p>
          
      </Jumbotron>
        <Row>
          <Col md={4}></Col>
          <Col md={4}> <h4> Search Employee</h4></Col>
          <Col md={4}></Col>

        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Form>
              <Form.Group controlId="search">
                <Form.Control type="text" placeholder="" onChange={this.search}/>
              </Form.Group>
            </Form>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row>
          <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Dob</th>
              </tr>
            </thead>
            <tbody>

              {this.state.results.map((obj, i) => {

                  return <EmployeeRow key={i} picture={obj.picture.thumbnail} name={obj.name.first + " " + obj.name.last} phone={obj.phone} email={obj.email} dob={obj.dob.date}/>

                  

              })}
            
              
            </tbody>
          </Table>

          </Col>
        </Row>
      </Container>
    
    );
  }
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// // import Discover from "./pages/Discover";
// // import About from "./pages/About";
// import Search from "./pages/searchEmployee";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           {/* <Route exact path="/" component={About} /> */}
//           {/* <Route exact path="/about" component={About} /> */}
//           {/* <Route exact path="/discover" component={Discover} /> */}
//           <Route exact path="/search" component={Search} />
//         </Wrapper>
//         <Footer />
//       </div>
//     </Router>
//   );
// }


// export default App;
