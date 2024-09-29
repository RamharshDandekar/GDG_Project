import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScrollDownIcon from './components/ScrollDownIcon';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SubHeading from './components/SubHeading';
import InfoRight from './components/InfoRight';
import InfoLeft from './components/InfoLeft';
import SubImage1 from './components/SubImage1.png';
import SubImage2 from './components/SubImage2.png';
import SubImage3 from './components/SubImage3.png';
import AnimatedCircles from './components/AnimatedCircles';
import TechnologyCards from './components/TechnologyCards';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
    const circlesData = [
        { text: '0.3+', info: 'Years' },
        { text: '10+', info: 'Events' },
        { text: '1K+', info: 'Community <br> Members' }, 
        { text: '200+', info: 'Attendees' },
    ];

    const technologies = [
        { name: 'Android', iconClass: 'android', info: 'Info about Android' },
        { name: 'Flutter', iconClass: 'flutter', info: 'Info about Flutter' },
        { name: 'Cloud', iconClass: 'cloud', info: 'Info about Cloud' },
        { name: 'IT Networking', iconClass: 'IT', info: 'Info about IT Networking' },
        // Add more technologies here
    ];

    return (
        <div className="App">
            <Helmet>
                <title>GDG RBU Chapter - Google Developer Group</title>
                <meta name="description" content="Join the GDG RBU Chapter to engage with fellow tech enthusiasts and explore Google developer technologies." />
                <meta name="keywords" content="Google Developer Group, GDG RBU, community engagement, technology, Android, Flutter, Cloud, IT Networking" />
                <meta name="author" content="GDG RBU Chapter" />
            </Helmet>
            <Navbar />
            <HeroSection />
            <ScrollDownIcon />
            <SubHeading 
                title="Our Mission" 
                borderColor1="blue" 
                borderColor2="purple" 
                textColor1="white" 
                textColor2="blue" 
            />
            <InfoRight 
                imagePath={SubImage1} 
                missionText={`Our mission involves community engagement, leadership development, building a strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.`}
            />
            <SubHeading 
                title="Our Perspective" 
                borderColor1="green" 
                borderColor2="blue" 
                textColor1="white" 
                textColor2="green" 
            />
            <InfoLeft 
                missionText={`We’re a community-driven initiative aiming to bridge the gap between research and practice, develop evolutionary thinking, and network throughout the process. We believe in connecting fellow developers, spreading stimulative ideas, and working for a solution-driven team.`}
                imagePath={SubImage2} 
            />
            <SubHeading 
                title="What Keeps Us Going?" 
                borderColor1="yellow" 
                borderColor2="orange" 
                textColor1="white" 
                textColor2="yellow" 
            />
            <InfoRight 
                imagePath={SubImage3} 
                missionText={`Our club helps students to connect, learn, empower, and grow. Teamwork, innovative thinking, communication, and leading with solutions help us achieve new heights. The entire team works in coordination to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.`}
            />
            <br />
            <div>
                <AnimatedCircles circlesData={circlesData} />
            </div>
            <div>
                <TechnologyCards technologies={technologies} />
            </div>
            <SubHeading 
                title="FAQ" 
                borderColor1="red" 
                borderColor2="yellow" 
                textColor1="white" 
                textColor2="red" 
            />
            <FAQ />
            <Footer />
        </div>
    );
};

export default App;
