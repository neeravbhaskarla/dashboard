import React from 'react'
import OpenPositions from './OpenPositions/OpenPositions'
import Stats from './Stats/Stats'
import './CampusStats.scss'

export default function CampusStats() {
    return (
        <div className="campus-wrapper">
            <Stats/>
            <OpenPositions/>
        </div>
    )
}
