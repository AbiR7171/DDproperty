import React from 'react';
import NavBar from '../Components/NavBar';
import Banner from '../Components/Banner';
import HomeJourney from '../Components/HomeJourney';
import LatestProjects from '../Components/LatestProjects';
import VirtualTour from '../Components/VirtualTour';
import HandPicked from '../Components/HandPicked';
import MRT from '../Components/MRT';
import CuratedCollection from '../Components/CuratedCollection';
import AskGuru from '../Components/AskGuru';
import MostSection from '../Components/MostSection';
import FirstFooter from '../Components/FirstFooter';
import SecondFooter from '../Components/SecondFooter';
import LastFooter from '../Components/LastFooter';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <HomeJourney/>
            <LatestProjects/>
            <VirtualTour/>
            <HandPicked/>
            <MRT/>
            <CuratedCollection/>
            <AskGuru/>
            <MostSection/>
            <FirstFooter/>
            <SecondFooter/>
            <LastFooter/>
        </div>
    );
};

export default MainLayout;