import React from 'react'
import './Navbar.scss'
import Logo from '@mui/icons-material/BlurOnOutlined'
import HomeIcon from '@mui/icons-material/Home'
import ChartIcon from '@mui/icons-material/InsertChart'
import BusinessIcon from '@mui/icons-material/BusinessCenterOutlined'
import FolderIcon from '@mui/icons-material/Folder'
import EventsIcon from '@mui/icons-material/EventAvailableOutlined'
import PeopleIcon from '@mui/icons-material/PeopleOutline'
import ChatIcon from '@mui/icons-material/Chat'
import ExitIcon from '@mui/icons-material/ExitToApp'
import SettingsIcon from '@mui/icons-material/SettingsOutlined'
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="logo">
                   <Logo/> 
                </div>

                <div className="navbar-items">
                    <div className="navbar-item">
                        <HomeIcon/>
                    </div>
                    <div className="navbar-item">
                        <ChartIcon/>
                    </div>
                    <div className="navbar-item">
                        <BusinessIcon/>
                    </div>
                    <div className="navbar-item">
                        <FolderIcon/>
                    </div>
                    <div className="navbar-item">
                        <EventsIcon/>
                    </div>
                    <div className="navbar-item">
                        <PeopleIcon/>
                    </div>
                    <div className="navbar-item">
                        <ChatIcon/>
                    </div>
                    <div className="navbar-item">
                        <ExitIcon/>
                    </div>
                </div>
                
                <div className="navbar-settings">
                        <SettingsIcon/>
                </div>
            </div>
        </div>
    )
}
