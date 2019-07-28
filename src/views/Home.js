import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Home = props =>  {
    useEffect(() => {
      
    })
    return (
        <>
           <header></header>   
           <main>

               <section id="intro">
                   <div className="flex flex-center justify-center">
                       <div className="img-container">
                        <img src="https://scontent.fktm4-1.fna.fbcdn.net/v/t1.0-9/39089029_10212601073367376_180378528963887104_n.jpg?_nc_cat=105&_nc_oc=AQmviVqytA1lvgoNNJ3dKhB_9CoowX7Rs6o0hxmlkpHoOhWTCTVgBxkw-bxjKpmljo4&_nc_ht=scontent.fktm4-1.fna&oh=ee16dd7217d03b5aa3acd655da302502&oe=5DEBCB0E" alt="biplav sharma"/>`
                       </div>
                       <h1>Hi</h1>
                       <p>I am a designer, blogger, coach and a tech enthusiast</p>
                   </div>
               </section>

               <section id="menu">
                   <div className="flex flex-center">
                       <Link to="/about" className="home-card">
                            <img src="http://themes.pixelwars.org/impose/wp-content/uploads/2015/11/000-1024x1024.jpg"/>
                            <span>About Me</span>
                       </Link>
                       <a href= "/resume.pdf" target="_blank" className="home-card">
                            <img src="http://themes.pixelwars.org/impose/wp-content/uploads/2015/11/05-1-683x1024.jpg"/>
                            <span>Resume</span>
                       </a>
                       <Link to="blogs" className="home-card">
                            <img src="http://themes.pixelwars.org/impose/wp-content/uploads/2015/11/02-2-683x1024.jpg"/>
                            <span>Blogs</span>
                       </Link>
                       <a href="https://instagram.com/niftygeek11" target="_blank" className="home-card">
                            <img src="http://themes.pixelwars.org/impose/wp-content/uploads/2015/11/aa-1024x802.jpg"/>
                            <span>Instagram</span>
                       </a>
                   </div>
               </section>
           </main>
        </>
    )
}

const mapStateToProps = state => {
    return{
        state
    }
}
    
export default connect(mapStateToProps)(Home)