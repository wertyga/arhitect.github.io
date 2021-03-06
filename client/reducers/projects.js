import { SET_PROJECT, ADD_ONE_NEWS, MONTH_NEWS, ARHIVE_NEWS, SEND_MAIL } from '../actions/actions';

export default function projects(state = [], action = {}) {
    switch(action.type) {

        case SET_PROJECT:
            return action.project;

        case MONTH_NEWS:
            return action.news;

        case ADD_ONE_NEWS:
            return action.news;

        case ARHIVE_NEWS:
            return action.news;

        case SEND_MAIL:
            return {
                ...state,
                sendMail: action.sendObj
            };

        default: return state;
    }
};