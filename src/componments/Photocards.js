import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle} from 'reactstrap';
import styled from 'styled-components';

const PicDiv = styled.div`
    width: 40%;
    height: 40%;
    margin: 0 auto;
`;

const Photcard = (props) => {
    console.log(props);
    return(
        <Card className="daily-photo">
            <h1>NASA Photograph of The Day</h1>
            <PicDiv>
                <CardImg src={props.img} alt="Image of space"/>
            </PicDiv>
            <CardBody className="bottom">
                <CardTitle>Name of Photo: {props.title}</CardTitle>
                <CardText>{props.explanation}</CardText>
                <h2>Date: {props.date}</h2>
            </CardBody>
        </Card>
    )
}

export default Photcard;