import '../App.scss'
import { useState } from 'react'

//icons
import iconDashboard from '../assets/icon-dashboard.svg'
import iconCalendar from '../assets/icon-calendar.svg'
import iconTeams from '../assets/icon-teams.svg'
import iconCharts from '../assets/icon-charts.svg'
import iconSettings from '../assets/icon-settings.svg'

const Navigation = (props) => {
    
    const navItems = [
        {
            "id": "1",
            "title": "dashboard",
            "icon": iconDashboard,
            "active": true
        },
        {
            "id": "2",
            "title": "calendar",
            "icon": iconCalendar,
            "active": false
        },
        {
            "id": "3",
            "title": "teams",
            "icon": iconTeams,
            "active": false
        },
        {
            "id": "4",
            "title": "charts",
            "icon": iconCharts,
            "active": false
        },
        {
            "id": "5",
            "title": "settings",
            "icon": iconSettings,
            "active": false
        },
    ]

    return (
        <nav>
            <ul className="navItems">
                {navItems.map((navItem) =>(
                    <li className="navItem" key={navItem.id}>
                        <a href="/" className={(navItem.active) ? "navItemLinkActive" : "navItemLink"} >
                            <img className="icon navItemIcon" src={navItem.icon} alt="" />
                            <div className="navItemTitle">{navItem.title}</div>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation