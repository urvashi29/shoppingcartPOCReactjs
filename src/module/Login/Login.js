import React, { Component } from "react"
import "./Login.css"
import LoginForm from "./LoginForm"
import {connect} from "react-redux"
class Login extends Component {
    render() {
        return (
            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">
                                {this.props.flag === true ? (<p>Login</p>) : (<p>First Login, then You are Good to Go...</p>)}
                            </h4>
                        </div>
                        <div className="modal-body">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
            flag:state.flag
        }
    }

export default connect(mapStateToProps,null)(Login);