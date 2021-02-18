import { ReactElement } from "react";
import { LinkTemplateResolver, TemplateResolver, TypeStyleResolver } from "./customization/props";
import { MetadataApi } from "./data/metadataApi";
import { ValidationApi } from "./data/validationApi";
import { CommandHistory } from "./diagram/history";
import { PointerUpEvent, ZoomOptions } from "./diagram/paperArea";
import { DiagramView, LabelLanguageSelector } from "./diagram/view";
import { AsyncModel } from "./editor/asyncModel";
import { EditorController, PropertyEditor } from "./editor/editorController";
import { SearchCriteria } from "./widgets/instancesSearch";

import { WorkspaceEventHandler } from "./workspace/workspaceContext";



export const initialState: AppState = {
    watermarkSvg:'ontodia svg'
    
    
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
  

 
    criteria?: SearchCriteria;
   
    watermarkSvg?: string;
    watermarkUrl?: string;
    
  
  }
  