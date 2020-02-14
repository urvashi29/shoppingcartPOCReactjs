import * as actions from "./actionType";
import data from "../Data";

export const onAddDataActionCreator = (name, isshowData) => (dispatch) => {
	dispatch({
		type: actions.GET_DATA,
		product_data: data[name],
		isshowData
	});
};

export const onAddProductActioncreator = (id,price,disabled,quantity, size) => (dispatch) => {
	dispatch({
		type: actions.Add_To_Cart,
		id,
		price,
		disabled,
		quantity,
		size
	});
};

export const onAddQuantityActionCreator = (id,price) => (dispatch) => {
	dispatch({
		type: actions.ADD_TO_QUANTITY,
		id,
		price
	});
};

export const onDeleteQuantityActionCreator = (id,price) => (dispatch) => {
	dispatch({
		type: actions.DELETE_QUANTITY,
		id,
		price
	});
};

export const onRemoveItemActionCreator = (id) => (dispatch) => {
	dispatch({
		type: actions.REMOVE_ITEM,
		id
	});
};

export const onAboutProductActionCreator = (id, isshowData) => (dispatch) => {
	dispatch({
		type: actions.GET_PARTICULAR_PRODUCT,
		id,
		isshowData
	});
};

export const onAuthActionCreator = (isAuthenticated) => (dispatch) => {
	dispatch({
		type: actions.AUTHENTICATE_USER,
		isAuthenticated
	})
}

export const onModalActionCreator = (dismiss) => (dispatch) => {
	console.log(dismiss)
	dispatch({
		type: actions.GET_MODAL_VALUE,
		dismiss
	})
}

export const onFlagActionCreator = (flag) => (dispatch)=> {
	dispatch({
		type: actions.GET_LOGGED,
		flag
	})
}