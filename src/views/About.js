import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import AppLayout from './layouts/AppLayout';

const About = props =>  {
    useEffect(() => {
      
    })
    return (
        <AppLayout>
            <section id="intro">
                <div className="flex flex-center justify-center">
                    <div className="img-container">
                    <img src="https://scontent.fktm4-1.fna.fbcdn.net/v/t1.0-9/39089029_10212601073367376_180378528963887104_n.jpg?_nc_cat=105&_nc_oc=AQmviVqytA1lvgoNNJ3dKhB_9CoowX7Rs6o0hxmlkpHoOhWTCTVgBxkw-bxjKpmljo4&_nc_ht=scontent.fktm4-1.fna&oh=ee16dd7217d03b5aa3acd655da302502&oe=5DEBCB0E" alt="biplav sharma"/>`
                    </div>
                    <h1>Hi</h1>
                    <p>I am a designer, blogger, coach and a tech enthusiast</p>
                </div>
            </section>
            <section className="mart">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </section>
        </AppLayout>
    )
}

const mapStateToProps = state => {
    return{
        state
    }
}

export default connect(mapStateToProps)(About)