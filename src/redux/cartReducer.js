import initialState from "./initialData.json";
export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case 'ADD_TO_CART':{
            let pl = action.payload;
            let flag = false;
            let id = 0;
            console.log(state);
            for (let index in state) {
                if (state[index].id == pl.id) {
                    flag = true;
                    id = index
                }
                console.log(index);
            }
            console.log(flag);
            if (flag == true) {
                let newState = [...state];
                newState[id].count++;
                return newState;
            }
            else {
                pl.count = 1;
                return [...state, pl];
            }
        }
        case 'REMOVE_FROM_CART':{
            let pl = action.payload;
            let flag = false;
            let id = 0;
            console.log(state);
            for (let obj in state) {
                if (state[obj].id == pl.id) {
                    id = obj;
                    if(state[obj].count>1){
                        flag=true;
                    }
                }
                
                console.log(obj);
            }
            console.log(flag);
            if (flag == true) {
                let newState = [...state];
                newState[id].count--;
                return newState;
            }
            else {
                let newState = [...state];
                if (id > -1) { // only splice array when item is found
                    newState.splice(id, 1); // 2nd parameter means remove one item only
                }
                return newState;
            }
        }
        default:
            return state;
    }
}

