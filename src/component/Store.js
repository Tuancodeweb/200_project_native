
var redux = require('redux');
        const InitialState = {
            AlertShow : false,
            // hàm thuộc state show nội dung thông báo
            AlertContent : '',
            // hàm thuộc state showw màu nội dung thông báo
            AlertStyle : ''
        }
        const allReducer = (state = InitialState, action) => {
            switch (action.type) {
                case "ALERT_ON":
                return {...state,AlertShow:true , AlertContent:action.AlertContent , AlertStyle:action.AlertStyle}
            
                case "ALERT_OFF":
                return {...state,AlertShow:false}
                default:
                    return state
            }
        }
var store = redux.createStore(allReducer);

store.subscribe(function(){
    console.log(JSON.stringify(store.getState()))
})


export default store;