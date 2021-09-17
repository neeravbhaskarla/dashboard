import React from 'react'
import './Dashboard.scss'
import HeadingDetails from './HeadingDetails/HeadingDetails'
import Cards from './Cards/Cards'
import MetricCharts from './MetricCharts/MetricCharts'
import CampusStats from './CampusStats/CampusStats'
export default function Dashboard() {
    return (
        <div className='dashboard'>
            <HeadingDetails/>
            <div className='metrics'>
                <Cards/>
                <MetricCharts/>
                <CampusStats/>
            </div>
        </div>
    )
}
