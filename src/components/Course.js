import React from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
  } from 'reactstrap';

const Course = ({ course }) => {
    return (
        <Card>
            <CardBody className='text-center'>
                <CardSubtitle> { course.title }</CardSubtitle>
                <CardText>{ course.description }</CardText>
            <Container className="text-center">
                <Button color="danger"> DELETE</Button>
                <Button color="primary ml-3"> UPDATE</Button>
            </Container>
            </CardBody>
        </Card>
    )
}

export default Course