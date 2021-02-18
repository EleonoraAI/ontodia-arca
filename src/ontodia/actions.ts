import { EReduxActionTypes, IReduxBaseAction } from "./rootReducer";

export interface IReduxToggleMessageAction extends IReduxBaseAction {
  type: EReduxActionTypes.SEARCH_CRITERIA;
}


export function changeCriteria(): IReduxToggleMessageAction {
  return {
    type: EReduxActionTypes.SEARCH_CRITERIA
  };
}

