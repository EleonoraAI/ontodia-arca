import { SearchCriteria } from "./widgets/instancesSearch";

export interface ApplicationState {
     criteria?: SearchCriteria,
     watermarkSvg:string
  };
  
  export const defaultState: ApplicationState = {
    
    watermarkSvg: 'TEST',
  };
