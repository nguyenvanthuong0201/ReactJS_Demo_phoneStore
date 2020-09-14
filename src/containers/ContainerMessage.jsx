import React, { Component } from 'react'
import { connect } from "react-redux"
import MessageChange from '../components/com.Message/MessageChange'

 class ContainerMessage extends Component {
    render() {
        let{message}=this.props
        return <MessageChange message={message}/>
    }
}
const mapStateToProps = (state) => {
    return{
        message: state.reMessage
    }
}
export default connect(mapStateToProps,null)(ContainerMessage);

