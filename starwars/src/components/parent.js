import React, { useState, useEffect } from "react";
import axios from "axios";
import ChildComponent from "./child";
import { Row } from "reactstrap";
import styled from 'styled-components';

const Container = styled(Row)`
    flex-wrap: wrap;
    flex-direction: row;

    .col {
        width: 25%;
        box-sizing: border-box;
    }
    .card {
        margin-bottom: 5%;
    }
`;


export default function ParentComponent() {
    const [character, setCharacter] = useState([]);
    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                setCharacter(response.data.results);
                console.log(response.data.results);
            })
            .catch(error => {
                console.log(error);
            })
        }, []);

    return (
        <div>
            <Container>
                {character.map((index) => {
                    return (
                        <ChildComponent
                        key={index.name}
                        name={index.name}
                        eyes={index.eye_color}
                        gender={index.gender}
                        hair={index.hair_color}
                        skin={index.skin_color}
                        year={index.birth_year}
    
                    /> 
                    )
                })}
                
            </Container>
                
        </div>
    )}