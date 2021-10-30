import Slider from '../components/index/Slider';
import About from '../components/index/About';
import News from '../components/index/News';
import Roadmaps from '../components/index/Roadmaps';
import Ourteams from '../components/index/Ourteams';
import OurAdvisors from '../components/index/OurAdvisors';
import Invested from '../components/index/Invested';
import Faqs from '../components/index/Faqs';
import Hero from '../components/index/Hero';
import Video from '../components/index/Video';

export default function Home() {
    return (
        <div className="home-content">
            <Slider></Slider>
            <About></About>
            <Hero></Hero>
            <News></News>
            <Roadmaps></Roadmaps>
            <Ourteams></Ourteams>
            <OurAdvisors></OurAdvisors>
            <Invested></Invested>
            <Faqs></Faqs>
        </div>
    );
}
