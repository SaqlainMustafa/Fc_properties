import React from 'react'
import Banner from './Banner'
import CardProjects from './CardProjects'
import HotProjects from './HotProjects'
import Why from './Why'
import Download from './Download'
import GoogleReview from './GoogleReview'
import Partners from './Partners'
import LastNews from './LastNews'
import Properties from './Properties'
import Consultation from './Consultation'
import HomeFooter from './HomeFooter'

function Layout() {
    return (
        <>
            <Banner />
            <CardProjects />
            <HotProjects />
            <Why />
            <Download />
            <GoogleReview />
            <Partners />
            <LastNews />
            <Properties />
            <Consultation />
            <HomeFooter />
        </>
    )
}

export default Layout