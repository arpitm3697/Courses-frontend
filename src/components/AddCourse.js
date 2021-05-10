import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Container, Form, FormGroup, Input, Button } from 'reactstrap'
import base_url from '../api/bootapi';

const AddCourse = () => {
    useEffect(() => {
        document.title="Add courses";
    }, []);

    const [course,setCourse]=useState({});

    const handleForm=(e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    };

    //creating function to post data

    const postDataToServer=(data)=>{
        axios.post(`${base_url}/courses`, data).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },(error)=>{
                console.log(error);
                console.log("Error");
            }
        )
    }
    return (
        <Fragment>
            <h1 className="text-center"> Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label>Course Id</label>
                    <Input 
                        type="text"
                        placeholder="Enter here"
                        name="userId"
                        id="userId"
                        onChange={(e) => {
                            setCourse({...course,id: e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Course Title</label>
                    <Input 
                        type="text"
                        placeholder="Enter title here"
                        id="title"
                        onChange={(e) => {
                            setCourse({...course, title: e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Course Description</label>
                    <Input 
                        type="textarea"
                        placeholder="Enter Description here"
                        id="description"
                        onChange={(e) => {
                            setCourse({...course, description: e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Price of Course</label>
                    <Input 
                        type="text"
                        placeholder="Enter price"
                        id="price"
                        onChange={(e) => {
                            setCourse({...course, price: e.target.value});
                        }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success ml-3"> Add Course</Button>
                    <Button> Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddCourse;