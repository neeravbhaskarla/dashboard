import React from 'react'
import './Dashboard.scss'
import HeadingDetails from './HeadingDetails/HeadingDetails'
import Cards from './Cards/Cards'
import MetricCharts from './MetricCharts/MetricCharts'
import CampusStats from './CampusStats/CampusStats'
import Applicants from './Applicants/Applicants'
export default function Dashboard() {
    return (
        <div className='dashboard'>
            <HeadingDetails/>
            <div className="dashboard-items">
                <div className="dashboard-items-left">
                    <div className='metrics'>
                        <Cards/>
                        <MetricCharts/>
                        <CampusStats/>
                    </div>
                </div>
                <div className="dashboard-items-right">
                    <div className="applicants">
                        <Applicants/>
                    </div>
                </div>
            </div>
        </div>
    )
}
