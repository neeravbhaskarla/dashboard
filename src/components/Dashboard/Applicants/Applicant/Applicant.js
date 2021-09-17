import React from 'react'
import {AccountCircleOutlined, MessageRounded, PhoneRounded} from '@mui/icons-material'
import './Applicant.scss'
export default function Applicant({name, jobApplied}) {
    return (
        <div className='applicant'>
            <div className='applicant-container'>
                <div className="applicant-icon">
                    <AccountCircleOutlined/>
                </div>
                <div className="applicant-details">
                    <div className='applicant-details-name'>
                        <span>{name}</span>
                    </div>
                    <div className='applicant-details-job'>
                        <p>Applied for <span>{jobApplied}</span></p>
                    </div>
                </div>
            </div>
            <div className="applicant-contact">
                <div className="applicant-contact-message">
                    <MessageRounded/>
                </div>
                <div className="applicant-contact-number">
                    <PhoneRounded/>
                </div>
            </div>

        </div>
    )
}
