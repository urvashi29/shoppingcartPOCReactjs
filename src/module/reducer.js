import * as actions from "./actionType";
const initState = {
	product_data: [],
	addedItems: [],
	post: {},
	isshowData: false,
	totalPrice: 0,
	isAuthenticated: false,
	dismiss: "modal",
	flag: true
};
const AddToCart = (state, action) => {
	let product_data = [...state.product_data];
	let addedItems = [...state.addedItems];
	let addedItem = product_data.find(
		(product_data) => product_data.id === action.id
	);
	let existed_item = addedItems.find(
		(addedItems) => action.id === addedItems.id
	);
	addedItem.disabled=action.disabled
	if (existed_item) {
		addedItem.quantity = Number(action.quantity);
		if (action.size) {
			addedItem.selectedSize = action.size;
		}
			state.totalPrice= state.totalPrice+Number(addedItem.quantity) * Number(action.price)
	} else
	{
	addedItem.quantity = Number(action.quantity);
	if (action.size) {
		addedItem.selectedSize = action.size;
		}
		let newTotal= state.totalPrice+Number(addedItem.quantity) * Number(action.price)
	return {
		...state,
		addedItems: [...state.addedItems, addedItem],
		totalPrice: newTotal,
		
	};
	}
	return state;
};

const AddToQuantity = (state, action) => {
	let addItems = [...state.addedItems];
	let addeditem = addItems.find((item) => item.id === action.id);
	addeditem.quantity += 1;
	let newTotal = state.totalPrice + Number(action.price)
	return {
		...state,
		totalPrice : newTotal
		
	}
};
const DeleteQuantity = (state, action) => {
	let delItems = [...state.addedItems];
	let Addeditem = delItems.find((item) => item.id === action.id);
	let itemToRemove= state.addedItems.find(item=> action.id === item.id)
	if (Addeditem.quantity === 1) {
		itemToRemove.disabled = false
		itemToRemove.quantity = 0
		let newTotal = state.totalPrice-Number(itemToRemove.currentPrice)
		return {
			...state,
			addedItems: state.addedItems.filter(({ id }) => id !== action.id),
			totalPrice: newTotal
		};
	} else {
		Addeditem.quantity -= 1;
	}
	let newTotal= state.totalPrice-Number(action.price)
	return {
		...state,
		totalPrice : newTotal
		
	}
};
const RemoveItem = (state, action) => {
	let removeItems = [...state.addedItems];
	let itemToRemove= state.addedItems.find(item=> action.id === item.id)
	let new_item = removeItems.filter(({ id }) => id !== action.id);
	let newTotal=state.totalPrice - (Number(itemToRemove.currentPrice)*Number(itemToRemove.quantity))
	itemToRemove.disabled = false
	itemToRemove.quantity=0
	return {
		...state,
		addedItems: new_item,
		totalPrice: newTotal
	};
};
const GetParticularProduct = (state, action) => {
	let particular_details = [...state.product_data];
	let particular = particular_details.find(
		(product_data) => product_data.id === action.id
	);
	state.isshowData = action.isshowData;
	return { ...state, post: particular, isshowData: action.isshowData };
};

const GetData = (state, action) => {
	return {
		...state,
		product_data: action.product_data,
		isshowData: action.isshowData
	};
};
const reducer = (state = initState, action) => {
	switch (action.type) {
		case actions.Add_To_Cart:
			return AddToCart(state, action);
		case actions.ADD_TO_QUANTITY:
			return AddToQuantity(state, action);
		case actions.DELETE_QUANTITY:
			return DeleteQuantity(state, action);
		case actions.REMOVE_ITEM:
			return RemoveItem(state, action);
		case actions.GET_PARTICULAR_PRODUCT:
			return GetParticularProduct(state, action);
		case actions.GET_DATA:
			return GetData(state, action);
		case actions.AUTHENTICATE_USER:
			return {
				...state, isAuthenticated: action.isAuthenticated
			}
		case actions.GET_MODAL_VALUE:
			return {
				...state, dismiss: action.dismiss
			}
		case actions.GET_LOGGED:
			return {
				...state, flag: action.flag
			}
		default:
			return state;
	}
};

export default reducer;

