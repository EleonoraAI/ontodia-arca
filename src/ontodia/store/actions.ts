import { SearchCriteria } from "../widgets/instancesSearch";
import * as ActionTypes from "../store/action-types"
export type UpdateCriteriaAction = {
    type: ActionTypes.UPDATE_CRITERIA,
    criteria: SearchCriteria,
};
export type onSearchCriteriaChanged = typeof onSearchCriteriaChanged;

export function onSearchCriteriaChanged(criteria: SearchCriteria): UpdateCriteriaAction {
    return {
        type: ActionTypes.UPDATE_CRITERIA,
        criteria,
    };
};
