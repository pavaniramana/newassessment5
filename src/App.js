import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './component/Header.js';
import Home from './component/Home';
import Student from './component/Student';
import Contact from './component/Contact';
import { StudentProvider } from './component/StudentContext';
import AddStudent from './component/AddStudent';
import EditStudent from './component/EditStudent';

function App() {
  return (
    <StudentProvider>
          <Router>
            <Header/>

                <Routes>
                    <Route path="/" element={   <Navigate   to={"/home"}/>}/>
                    <Route path="/home" element={ <Home /> }/>
                    <Route path="/student" element={ <Student /> }/>
                    <Route path="/edit-student/:studentId" element={  <EditStudent /> }/>
                    <Route path="/add-student" element={ <AddStudent /> }/>
                    <Route path="/contact" element={ <Contact /> }/>
                </Routes>
        </Router>
    </StudentProvider>

  );
}

export default App;
