import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import { MoreHoriz } from '@mui/icons-material'
import './OpenPositions.scss'
const data=[
    {title: '45%', value: 45, color: '#6443b4'},
    {title: '30%', value: 30, color: '#fe5260'},
    {title: '25%', value: 25, color: '#2f9bfd'}
]

export default function OpenPositions() {
    return (
        <div className="positionsview">
            <div className="positionsview-header">
                <div className="positionsview-header-title">
                    <span>Open Posistions By Department</span>
                </div>
                <div className="positionsview-header-options">
                    <MoreHoriz/>
                </div>
            </div>
            <div className="positionsview-piechart">
                <PieChart
                    animate
                    animationDuration={1000}
                    animationEasing="ease-out"
                    center={[50, 50]}
                    data={data}
                    lengthAngle={360}
                    lineWidth={50}
                    paddingAngle={0}
                    radius={50}
                    startAngle={0}
                    viewBoxSize={[100, 100]}
                    label={(data)=>data.dataEntry.title}
                    labelPosition={80}
                    labelStyle={{
                        fontSize: "0.5rem",
                        fill: "white",
                        textAlign: "right",
                        fontWeight:"600"
                    }}
                />
            </div>
        </div>
    )
}
