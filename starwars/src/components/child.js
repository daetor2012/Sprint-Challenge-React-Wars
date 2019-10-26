import React from "react";


import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Col
  } from 'reactstrap';
const ChildComponent = props => {
    console.log(props);
    return (
        <Col>
            <Card color="danger">
                <CardBody>
                    <CardTitle>
                        Character name: {props.name}
                    </CardTitle>
                    <CardText>
                        
                        <span>Eye color: {props.eyes}</span>
                        <span>Gender: {props.gender}</span>
                        <span>Hair color: {props.hair}</span>
                        <span>Skin color: {props.skin}</span>
                            
                        
                    </CardText>
                    <CardSubtitle>Birth year: {props.year}</CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    )
};
export default ChildComponent;