// import PLANDETAIL_ACTIONS from '../action/todo';

const nameInitialState = {
    boothCode:0
};

export const Add = (state = nameInitialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_1:
            return Object.assign({},state,action.playload);
        case ACTION_TYPE_2:
            return state
        default:
            return state
    }
}