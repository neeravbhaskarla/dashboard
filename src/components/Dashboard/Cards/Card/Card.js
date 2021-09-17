import React from 'react'
import BarPieChart from '../Charts/BarPieChart'
import './Card.scss'
import { CallMade, CallReceived, MoreHoriz} from '@mui/icons-material'

export default function Card({name, amount, call, percentInc, percent}) {
    return (
        <div className="card">
            <div className="card-wrapper">
                <div className="card-left">
                    <div className='card-left-name'>
                        {name}
                    </div>
                    <div className='card-left-amount'>
                        {amount}
                    </div>
                    <div className='card-left-percent'>
                        <span className='card-left-percent-call'>
                            {call==='up'?
                                <CallMade style={{color:"#5f55b1"}}/>
                                :<CallReceived style={{color:"#e55a6a"}}/>}
                        </span>
                        <span className={call==='up'?'card-left-percent-value-gain':'card-left-percent-value-loss'}>{percentInc}</span>
                    </div> 
                </div>
                <div className="card-right">
                    <div className='card-right-info'>
                        <MoreHoriz/>
                    </div>
                    <div className='card-right-barchart'>
                        <BarPieChart percentage={percent} col={call==='up'?'#5f55b1':'#e55a6a'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
