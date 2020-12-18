import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Course from './pages/Course'
import DetailCourse from './pages/CourseDetail'
import ListCourse from './pages/CourseList'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Login from './pages/Login'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/course" exact component={Course}/>
        <Route path="/list-course" exact component={ListCourse}/>
        <Route path="/detail-course" exact component={DetailCourse}/>
        <Route path="/blog" exact component={Blog}/>
        <Route path="/detail-blog" exact component={BlogDetail}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
