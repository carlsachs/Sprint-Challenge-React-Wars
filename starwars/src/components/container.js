import React, { useState , useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "./card"

export default function Container () {
    const [star, setStar] = useState([]);
    useEffect(() => {
        axios.get(`https://swapi.co/api/people`)
        .then(res => {
            console.log(res);
            setStar(res.data);
        })
        .catch(err => {
            console.log("Data cannot be returned", err);
        });
    }, []);

    return (

        <div>
           <Card />
        </div>

    )
}