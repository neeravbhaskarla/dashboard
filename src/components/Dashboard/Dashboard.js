import React from 'react'
import './Dashboard.scss'
import HeadingDetails from './HeadingDetails/HeadingDetails'
import Cards from './Cards/Cards'
import MetricCharts from './MetricCharts/MetricCharts'
export default function Dashboard() {
    return (
        <div className='dashboard'>
            <HeadingDetails/>
            <div className='metrics'>
                <Cards/>
                <MetricCharts/>
            </div>
        </div>
    )
}
