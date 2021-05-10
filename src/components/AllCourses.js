import React, { useState, useEffect } from 'react';
import Course from './Course'

import base_url from "./../api/bootapi";
import axios from 'axios';
import { toast } from 'react-toastify';

const Allcourses=()=>{

    useEffect(() => {
        document.title="All courses";
    }, []);

    const getAllCourseFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response.data);
                setCourses(response.data);
                toast.success("Success");
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    };

    useEffect(() => {
        getAllCourseFromServer();
    }, []);
    
    const [courses,setCourses]=useState([
        
    ]);

    return (
        <div>
            <h1>All Courses</h1>
            <p> List of all courses are as follows : </p>
            {
                courses.length > 0 ? 
                courses.map((item) => <Course key={item.id} course={item} />)
                : "No courses"
            }
        </div>
    );
};

export default Allcourses;
