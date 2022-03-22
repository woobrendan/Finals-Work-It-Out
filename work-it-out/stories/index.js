import React, {Fragment} from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import WorkoutStats from "../src/components/workout_stats"
import StatListItem from "../src/components/statListItem";
import StatTable from "../src/components/statTable";

const workouts = [
  {
    weight: 160,
    user_reps: 5,
    user_sets: 3,
    id: 1,
    name: "Barbell Bench Press",
    description: "The Barbell Bench Press is an upper-body weight training exercise where you push a weight upwards while lying on a weight training bench. The exercise uses the pectoralis major, the anterior deltoids, and the triceps, among other stabilizing muscles.",
    thumbnail: "https://www.burnthefatinnercircle.com/members/images/1691.jpg",
    video: "https://www.youtube.com/embed/CjHIKDQ4RQo",
    reps: "8",
    sets: "5",
    muscle_group_id: 1
    },
    {
    weight: 130,
    user_reps: 6,
    user_sets: 3,
    id: 2,
    name: "Incline Dumbell Bench Press",
    description: "An incline press elevates the shoulders and lowers the pelvis as if reclining in a chair. Press weights overhead and conctract by bringing hands towards shoulders. This variation of the bench press emphasizes anterior deltoids with little emphasis at the upper (clavicular) head of the pectoralis major.",
    thumbnail: "https://www.burnthefatinnercircle.com/members/images/1749.jpg",
    video: "https://www.youtube.com/embed/oZVCBM9f8Eo",
    reps: "8",
    sets: "4",
    muscle_group_id: 1
    }]

const workoutsLong = [
  {
    weight: 160,
    user_reps: 5,
    user_sets: 3,
    id: 1,
    name: "Barbell Bench Press",
    description: "The Barbell Bench Press is an upper-body weight training exercise where you push a weight upwards while lying on a weight training bench. The exercise uses the pectoralis major, the anterior deltoids, and the triceps, among other stabilizing muscles.",
    thumbnail: "https://www.burnthefatinnercircle.com/members/images/1691.jpg",
    video: "https://www.youtube.com/embed/CjHIKDQ4RQo",
    reps: "8",
    sets: "5",
    muscle_group_id: 1
  },
  {
    weight: 130,
    user_reps: 6,
    user_sets: 3,
    id: 2,
    name: "Incline Dumbell Bench Press",
    description: "An incline press elevates the shoulders and lowers the pelvis as if reclining in a chair. Press weights overhead and conctract by bringing hands towards shoulders. This variation of the bench press emphasizes anterior deltoids with little emphasis at the upper (clavicular) head of the pectoralis major.",
    thumbnail: "https://www.burnthefatinnercircle.com/members/images/1749.jpg",
    video: "https://www.youtube.com/embed/oZVCBM9f8Eo",
    reps: "8",
    sets: "4",
    muscle_group_id: 1
  },
  {
    weight: 80,
    user_reps: 12,
    user_sets: 4,
    id: 3,
    name: "Cable Crossover/Cable Fly",
    description: "The cable fly or cable crossover is a great isolation exercise that can help to build chest mass. The cables provide resistance throughout the entire movement, making it slightly more challenging than a dumbbell fly.",
    thumbnail: "https://sporium.net/wp-content/uploads/2020/11/Cable-Crossover-nereyi-calistirir.jpg",
    video: "https://www.youtube.com/embed/QcTcWpkn_bw",
    reps: "12",
    sets: "3",
    muscle_group_id: 1
  },
  {
    weight: 40,
    user_reps: 12,
    user_sets: 3,
    id: 16,
    name: "Low Cable Crossover",
    description: "Cables exercises provide constant tension on the muscles, making them an effective way to build strength. The Low Cable Crossover is a great chest isolation exercise which uses cables, making it a great exercise to include in your training when you want to build up strength and size in your chest.",
    thumbnail: "https://fitexercises.com/images/Low-Cable-Crossover-1.png",
    video: "https://www.youtube.com/embed/wnFEC_34Bls",
    reps: "7",
    sets: "4",
    muscle_group_id: 1
  },
  {
    weight: 0,
    user_reps: 20,
    user_sets: 3,
    id: 17,
    name: "Wide Grip Push Up",
    description: "Wide grip push ups have a wider hand placement than standard push ups, which places more emphasis on the chest.",
    thumbnail: "https://www.mybodycreator.com/content/files/2020/09/22/482_M.png",
    video: "https://www.youtube.com/embed/UFa702F5WnY",
    reps: "20",
    sets: "3",
    muscle_group_id: 1
  }
]

storiesOf("WorkoutStats", module)
  .add("Short List", () => <WorkoutStats exerciseList={workouts}/>)
  .add("Long List", () => <WorkoutStats exerciseList={workoutsLong} onClick={action("button-clicked")}/>)


storiesOf("StatListItem", module)
  .add("Base", () => <StatListItem exercise={workouts[1]}/>)

storiesOf("StatTable", module)
  .add("Basic Table", () => <StatTable exercise={workouts[1]} list={workouts}/>)