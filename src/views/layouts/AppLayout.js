import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const AppLayout = props =>  {
    useEffect(() => {
      
    })
    return (
        <>
            <header className="wrapper">
                <div className="container flex flex-center">
                    <Link to="/">
                        <img src="http://static1.squarespace.com/static/56e5942d2b8dde4bafbd9814/t/592efe12b8a79bdc792dba28/1563229728841/" alt="Logo"/> 
                        <span>Biplav Sharma</span>
                    </Link>
                    <ul className="top-links">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <a href="https://instagram.com/niftygeek11" target="_blank">Instagram</a>
                        </li>
                    </ul>
                </div>
            </header>
            <main className="container">
                {props.children}
            </main>
            <footer>
                &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
            </footer>
        </>
    )
}

const mapStateToProps = state => {
    return{
        state
    }
}

export default connect(mapStateToProps)(AppLayout)