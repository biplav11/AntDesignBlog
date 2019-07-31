import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {Skeleton} from 'antd'
import AppLayout from '../layouts/AppLayout';

const SkeletonList = props =>  {
    useEffect(() => {
      
    })
    return (
        <AppLayout>
           <Skeleton avatar paragraph={{ rows: 3 }} /> 
           
           <Skeleton avatar paragraph={{ rows: 3 }} /> 
           
           <Skeleton avatar paragraph={{ rows: 3 }} /> 
        </AppLayout>
    )
}

const mapStateToProps = state => {
    return{
        state
    }
}
export default connect(mapStateToProps)(SkeletonList)