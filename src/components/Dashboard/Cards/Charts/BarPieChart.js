import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './BarPieChart.scss'

export default function BarPieChart({percentage, col}) {
  return (
    <div className="progress-bar">
        <CircularProgressbar 
          value={percentage} 
          text={`+${percentage}%`} 
          styles={buildStyles({
            textSize: "1.2rem",
            textColor: col,
            pathColor: col,
            trailColor: "#494a4c"
          })}/>
    </div>
  )
}