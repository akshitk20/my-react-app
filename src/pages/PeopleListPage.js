import React from "react";
import { PeopleList } from "../PeopleList";

const people = [{
    name: 'John',
    age: 40,
    hairColor: 'brown' 
  },{
    name: 'Helga',
    age: 25,
    hairColor: 'red' 
  },{
    name: 'Dwayne',
    age: 55,
    hairColor: 'blonde' 
  }];

  export const PeopleListPage = () => {
    return (
        <>
        <h1>People List Page</h1>
        <PeopleList people={people}/>
        </>
    )
  }