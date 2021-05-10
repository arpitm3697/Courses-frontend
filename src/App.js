import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home'
import Menus from './components/Menus'
import Header from './components/Header'
import Course from './components/Course'
import Allcourses from './components/AllCourses'
import AddCourse from './components/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {
  const btnhandle = () => {
    toast("this is new message");
  }
  return <div>
    <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md = {4}>
              <Menus />
            </Col>
            
            <Col md = {8}>
              <Route path="/" component={Home} exact/>
              <Route path="/add-course" component={AddCourse} exact/>
              <Route path="/view-courses" component={Allcourses} exact/>
              
            </Col>
            
          </Row>
        </Container>
        <Home />
        <Allcourses/>
        <AddCourse />
        </Router>
  </div>;
}

export default App;
