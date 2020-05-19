import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

//Re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Team from '../Common/Team';
import Timeline from '../Common/Timeline';

class Home extends Component {

    render() {
        return (
            <div>
                <Header 
                    title="Welcome to my site!"
                    subtitle="It's xsmeke this side"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                    
                />

                <Services />
                <Portfolio />
                <Timeline />
                <Team />
                
            </div>
        );
    }

}

export default Home;