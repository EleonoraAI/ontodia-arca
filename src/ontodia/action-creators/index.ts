import * as ActionTypes from '../action-types/index';
import { SearchCriteria } from '../widgets/instancesSearch';

export type OnSearchCriteriaChangedAction = {
  type: ActionTypes.ONSEARCH_CRITERIA_CHANGED,
  searchCriteria: SearchCriteria,
};



export type onSearchCriteriaChanged = typeof onSearchCriteriaChanged;

export function onSearchCriteriaChanged(searchCriteria:SearchCriteria): OnSearchCriteriaChangedAction {
  return {
    type: ActionTypes.ONSEARCH_CRITERIA_CHANGED,
    searchCriteria,
  };
};

