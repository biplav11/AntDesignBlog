import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card } from 'antd';
import { getAllBlogs } from '../actions/blogAction';

const { Meta } = Card;

const checkEmpty = (data) => {
    return data.length === 0
}

const BlogsListing = props => {
    let {blogs, dispatch} = props
    useEffect(() => {
        if(checkEmpty(blogs)){
            dispatch(getAllBlogs())
        }
    })
    const handleBroken = (e) => {
        e.target.src ='http://lorempixel.com/640/480/city'
    }
    return (
        <>
            <header>
                This is header
            </header>
            <main>
                <div className="wrapper">
                    <Row gutter={30}>

                        {
                            blogs.map(item => {
                                let {id, title, thumbnail, desc} = item;
                                return(
                                    <Col key={id} span={6}>
                                        <Card
                                            hoverable
                                            style={{ width: '100%' }}
                                            className="card-blog"
                                            cover={<img alt="example" src={thumbnail} onError={handleBroken} />}
                                        >
                                            <Meta title={title} description={desc} />
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                        
                    </Row>
                </div>
            </main>
            <footer>
                footer
            </footer>
        </>
    )
}

const mapStateToProps = state => {
    return {
        blogs: state.blogs.all
    }
}

export default connect(mapStateToProps)(BlogsListing)