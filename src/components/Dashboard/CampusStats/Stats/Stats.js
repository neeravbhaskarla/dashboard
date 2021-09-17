import React from 'react'
import {Telegram} from '@mui/icons-material'
import './Stats.scss'
import StatsView from './StatsView/StatsView'

export default function Stats() {
    return (
        <div className="stats-wrapper">
            <div className="heading">
                <div className="heading-main">
                    <span>Referal and Campaign Stats</span>
                </div>
                <div className="heading-campaign">
                    <div className="heading-campaign-logo">
                        <Telegram/>
                    </div>
                    <div className="heading-campaign-info">
                        <div className="heading-campaign-info-total">
                            <span>40 Campaigns sent in total</span>
                        </div>
                        <div className="heading-campaign-info-month">
                            <span>4 Campaigns sent in last month</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-stats">
                <StatsView
                    name="User's Referals"
                    percent="3.59"
                    value={7956}/><hr style={{padding:0, margin:0, border:'1px solid #404040'}}/>
                <StatsView
                    name="Referals"
                    percent="9.01"
                    value="0662"/><hr style={{padding:0, margin:0, border:'1px solid #404040'}}/>
                <StatsView
                    name="Shares"
                    percent="39.18"
                    value={1478}/><hr style={{padding:0, margin:0, border:'1px solid #404040'}}/>
                <StatsView
                    name="Applications"
                    percent="12.00"
                    value="0564" />
            </div>

            <div className="buttons">
                <div className="startButton">
                    <button>
                        <span>Start a New Campaign now</span>
                    </button>
                </div>
                <div className="pauseButton">
                    <button>
                        <span>Pause All Running Campaign</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
