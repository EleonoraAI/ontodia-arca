import { connect } from 'react-redux';
import { ApplicationState } from '../application-state';


import { WorkspaceMarkup, WorkspaceMarkupProps } from '../workspace/workspaceMarkup';



type StateProps = Pick<WorkspaceMarkupProps, 'watermarkSvg'>;


function mapStateToProps(state: ApplicationState): StateProps {
    return { watermarkSvg: state.watermarkSvg};
  
};



const ConnectedWorkspaceMarkup = connect(
    mapStateToProps,
    
  )(WorkspaceMarkup);

export default ConnectedWorkspaceMarkup;
