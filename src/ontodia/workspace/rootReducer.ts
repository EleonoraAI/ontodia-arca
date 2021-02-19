import { ReactElement } from "react";
import { LinkTemplateResolver, TemplateResolver, TypeStyleResolver } from "../customization/props";
import { MetadataApi } from "../data/metadataApi";
import { ValidationApi } from "../data/validationApi";
import { CommandHistory } from "../diagram/history";
import { PointerUpEvent, ZoomOptions } from "../diagram/paperArea";
import { DiagramView, LabelLanguageSelector } from "../diagram/view";
import { AsyncModel } from "../editor/asyncModel";
import { EditorController, PropertyEditor } from "../editor/editorController";
import { SearchCriteria } from "../widgets/instancesSearch";

import { WorkspaceEventHandler } from "./workspaceContext";


const ONTODIA_WEBSITE = 'http://arca.diag.uniroma1.it/'; //ARCA_WEBSITE
const ONTODIA_LOGO_SVG = require<string>('../../../images/ontodia-logo.svg');

export const initialState: AppState = {
    watermarkSvg:ONTODIA_LOGO_SVG,
    watermarkUrl:ONTODIA_WEBSITE
    
    
  };
  
  export enum EReduxActionTypes {
    
    SEARCH_CRITERIA ="SEARCH_CRITERIA"
  }
  
  export function rootReducer(state: AppState = initialState, action:IReduxBaseAction
  ) {
    // switch (action.type) {
   
    //     case EReduxActionTypes.SEARCH_CRITERIA:
    //     return { ...state ,criteria:state.criteria};
    //   default:
    //     return state;
    // } 
    return state
  }
  
  export interface IReduxBaseAction {
    type: EReduxActionTypes;
  }
  
  export interface AppState {
  

 
    readonly criteria?: SearchCriteria;
   
    readonly watermarkSvg?: string;
   readonly  watermarkUrl?: string;
    
    
  
  }
  