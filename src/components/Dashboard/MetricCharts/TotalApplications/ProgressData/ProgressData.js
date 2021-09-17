import React from 'react'
import {FiberManualRecord} from '@mui/icons-material'
import ProgressBar from './ProgressBar/ProgressBar'
import './ProgressData.scss'

export default function ProgressData({name, color, progress}) {
    return (
        <div className="item-container">
            <div className="detail">
                <div className="circle">
                    <FiberManualRecord style={{color}}/>
                </div>
                <div className="title">
                    <span className="title-name" style={{color}}>{name}</span>
                </div>
            </div>
            <div className="progressbar">
                <ProgressBar bgcolor={color} progress={progress} height={8}/>
            </div>
        </div>
    )
}
