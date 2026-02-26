import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import StudentList from '../page/StudentList';
import StudentForm from '../page/StudentForm';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<StudentList />} />
                <Route path='/add-student' element={<StudentForm />} />
            </Routes>
        </Router>
    )
}

export default Routing