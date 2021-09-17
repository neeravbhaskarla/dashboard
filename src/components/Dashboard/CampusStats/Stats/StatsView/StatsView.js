import React from 'react'
import { CallMade } from '@mui/icons-material'
import './StatsView.scss'

export default function StatsView({name, percent, value}) {
    return (
        <div className='statsview'>
            <div className="statsview-title">
                <span>{name}</span>
            </div>
            <div className="statsview-percent">
                <div className="statsview-percent-icon">
                    <CallMade/>
                </div>
                <div className="statsview-percent-value">
                    <span>{`+${percent}%`}</span>
                </div>
            </div>
            <div className="statsview-value">
                <span>{value}</span>
            </div>
        </div>
    )
}
