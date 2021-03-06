import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../helpers/UserContext";
import useApplicationData from "../helpers/test_state_helper";
import StatHistoryTable from "../components/statHistoryTable";
import EmptyWorkouts from "../components/emptyWorkouts";
import "../components/styles/statList.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../components/styles/card.css";

const WORKOUTS = "WORKOUTS";
const EMPTY = "EMPTY";

export default function ProfilePage() {
  const { state } = useApplicationData();
  const [mode, setMode] = useState(EMPTY);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (state.statHistory.length !== 0 && mode !== WORKOUTS) {
      setMode(WORKOUTS);
    }
  }, [state]);

  return (
    <>
      <h1 className="statList--header">
        {user.name}{" "}
      </h1>
      {mode === WORKOUTS && (
        <>
          <div className="centerButton">
            <Button
              className="workoutAddButton"
              component={Link}
              to={"/workouts/new"}
              variant="contained"
              color="warning"
            >
              Add New Workout
            </Button>
          </div>
          <br></br>
          <StatHistoryTable workoutlist={state.statHistory} />
        </>
      )}
      {mode === EMPTY && <EmptyWorkouts />}
    </>
  );
}
