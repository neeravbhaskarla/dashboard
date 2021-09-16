import React from 'react'
import BellIcon from '@mui/icons-material/Notifications'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add'
import Search from '@mui/icons-material/Search'
import './HeadingDetails.scss'

export default function HeadingDetails() {
    return (
        <div>
            <div className="header">
                <div className="header-left">
                    <div className="header-left-details">
                        <h3>Dashboard</h3>
                        <p>Monday, <span className="header-left-date">02 July 2020</span></p>
                    </div>
                </div>
                <div className="header-right">
                    <div className="header-right-top">
                        <div className="notfication-icon">
                            <BellIcon/>
                        </div>
                        <div className="username">
                            <p>John Bayer</p>
                        </div>
                        <div className="avatar">
                            <img src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg" alt=""/>
                        </div>
                        <div className="dropdown">
                            <ArrowDropDownIcon/>
                        </div>
                    </div>
                    <div className="header-right-bottom">
                        <div className="add-button">
                            <button><span><AddIcon/></span><p>Add</p></button>
                        </div>
                        <div className="search-button">
                            <Search/>
                        </div>
                        <div className="application-input">
                            <p>Search for Application here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
