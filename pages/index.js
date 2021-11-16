import Slider from '../components/index/Slider';
import About from '../components/index/About';
import Token from '../components/index/Token';
import Play from '../components/index/Play';
import News from '../components/index/News';
import Roadmaps from '../components/index/Roadmaps';
import Ourteams from '../components/index/Ourteams';
import OurAdvisors from '../components/index/OurAdvisors';
import Invested from '../components/index/Invested';
import Faqs from '../components/index/Faqs';
import Hero from '../components/index/Hero';
import Hero2 from '../components/index/Hero2';
import Video from '../components/index/Video';
import ReactFullpage from '@fullpage/react-fullpage';
import HeroNew from '../components/index/HeroNew';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="home-content">
            <ReactFullpage
                scrollingSpeed={1000} /* Options here */
                navigation={true}
                onLeave={(origin, destination, direction) => {
                    let menuBar = document.querySelector('#box-header');
                    if (destination.index > 0) {
                        menuBar.classList.add('stuck');
                    } else {
                        menuBar.classList.remove('stuck');
                    }
                }}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <Slider></Slider>
                            </div>
                            <div className="section">
                                <About></About>
                            </div>
                            <div className="section">
                                <Play></Play>
                            </div>
                            <div className="section">
                                <Token></Token>
                            </div>
                            <div className="section">
                                <HeroNew></HeroNew>
                            </div>
                            <div className="section">
                                <News></News>
                            </div>
                            <div className="section">
                                <Roadmaps></Roadmaps>
                            </div>
                            <div className="section">
                                <Ourteams></Ourteams>
                            </div>
                            <div className="section">
                                <OurAdvisors></OurAdvisors>
                            </div>
                            <div className="section">
                                <Invested></Invested>
                            </div>
                            <div className="section">
                                <Footer></Footer>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div>
    );
}
