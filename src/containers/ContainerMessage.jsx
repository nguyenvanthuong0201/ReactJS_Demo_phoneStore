import React, { Component } from 'react'
import { connect } from "react-redux"
import { actSnackbar, actSnackbarClose } from '../actions/indexActions'
// import MessageChange from '../components/com.Message/MessageChange'
import MessageChange from '../components/com.Message/MessageChange'

 class ContainerMessage extends Component {
    render() {
        let{message,bool,onOpenSnackbar,onCloseSnackBar}=this.props
        return <MessageChange message={message} bool={bool} onOpenSnackbar={onOpenSnackbar} onCloseSnackBar={onCloseSnackBar}/>
    }
}
const mapStateToProps = (state) => {
    return{
        message: state.reMessage,
        bool : state.reSnackProduct
    }
}

const mapDispatchToProps =(dispatch,props)=> {
    return{
        onOpenSnackbar:()=>{
            dispatch(actSnackbar())
        },
        onCloseSnackBar:()=>{
            dispatch(actSnackbarClose())
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContainerMessage);

