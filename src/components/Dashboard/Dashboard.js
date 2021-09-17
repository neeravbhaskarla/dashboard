import React from 'react'
import './Dashboard.scss'
import HeadingDetails from './HeadingDetails/HeadingDetails'
import Cards from './Cards/Cards'
export default function Dashboard() {
    return (
        <div className='dashboard'>
            <HeadingDetails/>
            <div className='metrics'>
                <Cards/>
            </div>
        </div>
    )
}
