import { ApplicationState, defaultState } from "../application-state";
import { OnSearchCriteriaChangedAction } from "../action-creators";
import * as ActionTypes from '../action-types/index';

type Action = OnSearchCriteriaChangedAction;

const updateState = (state: ApplicationState = defaultState, action: Action) => {
    switch (action.type) {

        case ActionTypes.ONSEARCH_CRITERIA_CHANGED:
            return {
                ...state,
                searchCriteria: action.searchCriteria,
            };



        default:
            return state;
    }
};

export default updateState;
