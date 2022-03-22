import React from "react";
// import "./NavBar.css";
import {Link } from 'react-router-dom'
import StatListItem from './statListItem'
import StatTable from "./statTable";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css'

// Importing material UI icons
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export default function WorkoutStats(props) {
  const exerciseList = props.exerciseList.map(exercise => 
    <StatListItem 
      exercise={exercise}
      key={exercise.id}
    />
  );
  return (
   <div className="statList">
     <div className="statExerciseList">
     {exerciseList}
     </div>
     <StatTable list={props.exerciseList}/>
     <Button className="btn btn-success" onClick={props.onClick}>Add New Stats</Button>
   </div>
  );
}