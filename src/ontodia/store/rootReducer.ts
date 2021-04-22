
import { SearchCriteria } from "../widgets/instancesSearch";
import { UpdateCriteriaAction } from "./actions";
import * as ActionTypes from "./action-types"
import { ElementState } from '../diagram/elementLayer'


const ONTODIA_WEBSITE = 'http://arca.diag.uniroma1.it/'; //ARCA_WEBSITE
const ONTODIA_LOGO_SVG = require<string>('../../../images/ontodia-logo.svg');

export const initialState: AppState = {
    watermarkSvg: ONTODIA_LOGO_SVG,
    watermarkUrl: ONTODIA_WEBSITE,
    
};


type Action = UpdateCriteriaAction | any;
export function rootReducer(state: AppState = initialState, action: Action
) {
    switch (action.type) {

        case ActionTypes.UPDATE_CRITERIA:
            return {
                ...state,criteria:action.criteria
            };
        default:
            return state;
    }

}



export interface AppState {

    readonly criteria?: SearchCriteria;
    readonly watermarkSvg?: string;
    readonly watermarkUrl?: string;
    readonly elementStates?: ReadonlyMap<string, ElementState>;

}
