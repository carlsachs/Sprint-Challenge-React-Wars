import React, { useState , useEffect } from "react";
import axios from "axios";
import Card from "./card"

export default function Container () {
    const [star, setStar] = useState([]);
    useEffect(() => {
        axios.get(`https://swapi.co/api/people`)
        .then(res => {
            console.log(res);
            setStar(res.data.results);
        })
        .catch(err => {
            console.log("Data cannot be returned", err);
        });
    }, []);
    console.log(star);
    return(
        <div>
            {star.map(item => (
                <Card data={item}/>
            ))}
        </div>
    )
}