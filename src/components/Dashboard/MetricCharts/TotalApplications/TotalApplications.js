import React from 'react'
import ProgressData from './ProgressData/ProgressData'
import './TotalApplications.scss'

export default function TotalApplications() {
    return (
        <div className="container">
            <div className='heading'>
                <span>Total Applications</span>
            </div>
            <div className="progress-data">
                <ProgressData 
                    name="Applications"
                    color='#acd0ef'
                    progress={45}/>
                <ProgressData 
                    name="Short Listed"
                    color='#2d9cfb'
                    progress={80}/>
                <ProgressData 
                    name="Rejected"
                    color='#fd5758'
                    progress={40}/>
                <ProgressData 
                    name="On hold"
                    color='#d4bae1'
                    progress={20}/>
                <ProgressData 
                    name="Received"
                    color='#6343b2'
                    progress={85}/>
            </div>
        </div>
    )
}
