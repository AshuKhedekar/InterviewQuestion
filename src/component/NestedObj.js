import { useState } from "react";
export default function NestedObj(){
    const [person,setPerson]=useState({
        name:'Nikki de Saint Phalle',
        artwork :{
            title:'Blue Nana',
            city : "Hamburg",
            image: "https://i.imgur.com/Sd1AgUOm.jpg",
        }
    });
    function handleNameChange(e){
        setPerson({
            ...person,
            name:e.target.value
        });
    }

    function handleTitleChange(e){
        setPerson({
            ...person,
           artwork : {
            ...person.artwork,
            city:e.target.value
           } 
        })
    }

    function handleCityChange(e){
        setPerson({
            ...person,
           artwork : {
            ...person.artwork,
            image:e.target.value
           } 
        });
    }
    function handleImageChange(e){
        setPerson({
            ...person,
           artwork : {
            ...person.artwork,
            title:e.target.value
           } 
        })
    }
    return (
        <>
        <p>
        <label>
            Name : 
            <input
            value={person.name}
            onChange={handleNameChange}
            />
        </label>
        </p>
        <p>
        <label>
            Name : 
            <input
            value={person.artwork.title}
            onChange={handleTitleChange}
            />
        </label>
        </p>
        <p>
        <label>
            Name : 
            <input
            value={person.artwork.city}
            onChange={handleCityChange}
            />
        </label>
        </p>
        <p>
        <label>
            Name : 
            <input
            value={person.artwork.image}
            onChange={handleImageChange}
            />
        </label>
        </p>
        <p>
            <i>{person.artwork.title}</i>
            {person.name}
            <br/>
            (located in {person.artwork.city})
        </p>
        <img
        src={person.artwork.image}
        alt={person.artwork.title}
        />
        </>
    );
}