import './App.css';
import { BrowserRouter as Router, Route, Routes } from'react-router-dom';
import {ShowStudent} from './components/ShowStudent';
import {AddStudent} from './components/AddStudent';
import { StudentProvider } from './StudentContext';

function App() {
  return (
    <StudentProvider>
      <Router>
        <Routes>
            <Route exact path="/" element={<ShowStudent/>} />
            <Route path="/addstudent" element={<AddStudent/>} />
            <Route path="/showstudents" element={<ShowStudent/>} />
        </Routes>
      </Router>
    </StudentProvider>
  );
}

export default App;
