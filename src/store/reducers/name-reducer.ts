import {Name} from "../../model/Name";
import {SET_NAME} from "../actions/name-actions";

const nameReducer = (state: Name = {name: "My App"}, action: any) => {
    switch (action.type) {
        case SET_NAME:
            return action.payload.name;
        default:
            return state;
    }
}

export default nameReducer;