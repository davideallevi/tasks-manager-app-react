import '../App.scss'
import { useState } from 'react'

//icons
import iconDashboard from '../assets/icon-dashboard.svg'
import iconCalendar from '../assets/icon-calendar.svg'
import iconTeams from '../assets/icon-teams.svg'
import iconCharts from '../assets/icon-charts.svg'
import iconSettings from '../assets/icon-settings.svg'

const NavigationMobile = (props) => {
    const [navItems, setNavItems] = useState([
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
    ])

    return (
        <nav>
            <ul className="navItemsMobile">
                {navItems.map((navItem) =>(
                    <li className="navItem" key={navItem.id}><a href="/"><img className="icon navItemIcon" src={navItem.icon} alt="" /><div>{navItem.title}</div></a></li>
                ))}
            </ul>
        </nav>
    )
}

export default NavigationMobile
