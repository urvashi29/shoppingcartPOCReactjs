import React,{Component} from "react"
import { connect } from "react-redux"
import * as action from "../../action";
class Modal extends Component {
    handleClick = (id) => {
        this.props.onRemoveItem(id);
    }
    render() {
        return (
            <div className="modal" id="Modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete it. &nbsp;
                            <button onClick={() => this.handleClick(this.props.id)} className="btn btn-primary" data-dismiss="modal">ok</button> &nbsp;
                            <button className="btn btn-primary" data-dismiss="modal">cancel</button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveItem: (id) => dispatch(action.onRemoveItemActionCreator(id))
        
    }
}
export default connect(null,mapDispatchToProps)(Modal)