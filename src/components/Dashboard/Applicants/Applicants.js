import React from 'react'
import {KeyboardArrowRight} from '@mui/icons-material'
import './Applicants.scss'
import Applicant from './Applicant/Applicant'

export default function Applicants() {
    return (
        <div className='application'>
            <div className='application-intro'>
                <div>
                    <span>Hello, John Bayer,</span>
                </div>
                <div>
                    <span>You have 8 New Applications Today!</span>
                </div>
            </div>
            <div className='application-list'>
                <div className='application-list-header'>
                    <div className='application-list-header-title'>
                        <span>New Applicants</span>
                    </div>
                    <div className='application-list-header-logo'>
                        <KeyboardArrowRight/>
                    </div>
                </div>
                <div className='application-list-applicants'>
                    <Applicant
                        name='Rosie Metts'
                        jobApplied='IOS Developer'/>
                    <Applicant
                        name='James Scoot'
                        jobApplied='Node js Developer'/>
                    <Applicant
                        name='Jamie Laurenson'
                        jobApplied='Marketing Manager'/>
                    <Applicant
                        name='Elizabeth Hurton'
                        jobApplied='Junior UX Designer'/>
                    <Applicant
                        name='Danny Watson'
                        jobApplied='IOS Developer'/>
                    <Applicant
                        name='Reha Scarelett'
                        jobApplied='IOS Developer'/>
                </div>
            </div>
        </div>
    )
}
