import React from 'react'
import {AreaChart, 
        XAxis,
        YAxis, 
        Tooltip, 
        Area} from 'recharts'
import {Folder, MoreVert} from '@mui/icons-material'
import './ApplicationsReceived.scss'

const data = [
    {
      "name": "Jan",
      "new": 58,
      "pending": 25
    },
    {
      "name": "Feb",
      "new": 42,
      "pending": 60
    },
    {
      "name": "Mar",
      "new": 48,
      "pending": 40
    },
    {
      "name": "Apr",
      "new": 55,
      "pending": 55
    },
    {
      "name": "May",
      "new": 40,
      "pending": 80
    },
    {
      "name": "Jun",
      "new": 72,
      "pending": 65
    },
    {
      "name": "Jul",
      "new": 60,
      "pending": 58,
    }
  ]

export default function ApplicationsReceived() {
    return (
        <div className='application-metrics'>
            <div className='nav-chart'>
                <div className='nav-chart-title'>
                    <p>Applications Received</p>
                </div>
                <div className="nav-chart-categories">
                    <span>This Year</span>
                    <span>This Week</span>
                    <span>Today</span>
                </div>
                <div className="nav-chart-options">
                    <div className="downloadIcon">
                        <Folder/>
                    </div>
                    <div className="downloadIconName">
                        <span>Download Report</span>
                    </div>
                    <div className="options">
                        <MoreVert/>
                    </div>
                </div>
            </div>
            <div className='area-chart'>
                <AreaChart width={600} height={190} data={data}
                    margin={{ top: 20, right: 100, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorPending" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#d95555" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#d95555" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis/>
                    <Tooltip />
                    <Area type="monotone" dataKey="new" stroke="#606060" fillOpacity={0}/>
                    <Area type="monotone" dataKey="pending" stroke="#d95555" fillOpacity={1} fill="url(#colorPending)" />
                </AreaChart>
            </div>
        </div>
    )
}
