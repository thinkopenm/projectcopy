import { SAVE_MENU } from "../constants/ActionTypes";

export default function savedMenu(state = '', action) {
    switch (action.type) {
        case SAVE_MENU:
            return action.payload;
    }

    return state;
}