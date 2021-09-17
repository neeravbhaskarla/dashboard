import React from 'react'
import Card from './Card/Card'
import './Cards.scss'

export default function Cards() {
    return (
        <div className="cards">
            <Card 
                name='Total Applications'
                amount={7956}
                call='up'
                percentInc="+3.39"
                percent={70}/>
            <Card 
                name='Shortlisted Candidates'
                amount={4658}
                call='up'
                percentInc="+06"
                percent={60}/>
            <Card 
                name='Total Applications'
                amount={1501}
                call='down'
                percentInc="-0.4"
                percent={40}/>
        </div>
    )
}
