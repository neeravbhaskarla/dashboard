import React from 'react'
import ApplicationsReceived from '../MetricCharts/ApplicationsReceived/ApplicationsReceived'
import TotalApplications from '../MetricCharts/TotalApplications/TotalApplications'
import './MetricCharts.scss'

export default function MetricCharts() {
    return (
        <div className="application-details">
            <div>
                <ApplicationsReceived/>
            </div>
            <div>
                <TotalApplications/>
            </div>
        </div>
    )
}
