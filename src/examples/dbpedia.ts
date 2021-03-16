import { createElement, ClassAttributes } from 'react';
import React = require('react');
import * as ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore, Dispatch } from 'redux';
import { Workspace, WorkspaceProps, SparqlDataProvider, SparqlQueryMethod, DBPediaSettings } from '../index';
import { SearchCriteria } from '../ontodia/widgets/instancesSearch';
import { AppState, rootReducer } from '../ontodia/workspace/rootReducer';

import { onPageLoad, tryLoadLayoutFromLocalStorage, saveLayoutToLocalStorage } from './common';
import * as Actions from "../ontodia/workspace/actions";

function onWorkspaceMounted(workspace: Workspace) {
    if (!workspace) { return; }

    const diagram = tryLoadLayoutFromLocalStorage();
    workspace.getModel().importLayout({
        diagram,
        validateLinks: true,
        dataProvider: new SparqlDataProvider({
            endpointUrl: 'https://dbpedia.org/sparql',
            imagePropertyUris: [
                'http://xmlns.com/foaf/0.1/depiction',
                'http://xmlns.com/foaf/0.1/img',
            ],
            queryMethod: SparqlQueryMethod.GET,
        }, DBPediaSettings),
    });
}

const props: WorkspaceProps & ClassAttributes<Workspace> = {
    ref: onWorkspaceMounted,
    onSaveDiagram: workspace => {
        const diagram = workspace.getModel().exportLayout();
        window.location.hash = saveLayoutToLocalStorage(diagram);
        window.location.reload();
    },
    viewOptions: {
        onIriClick: ({ iri }) => window.open(iri),
    },

};
const store = createStore(rootReducer);

const mapStateToProps = (state: AppState): SvgProp | UrlProp | CriteriaProp => ({
    watermarkSvg: state.watermarkSvg,
    watermarkUrl: state.watermarkUrl,
    criteria: state.criteria
});

type SvgProp = Pick<WorkspaceProps, ('watermarkSvg')>;
type UrlProp = Pick<WorkspaceProps, ('watermarkUrl')>;
type CriteriaProp = Pick<WorkspaceProps, ('criteria')>;

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({

    onSearchCriteriaChanged: (newCriteria: SearchCriteria) => {
        dispatch(Actions.onSearchCriteriaChanged(newCriteria));

    }
});
type DispatchProps = Pick<WorkspaceProps, 'onSearchCriteriaChanged'>;

const App = connect(
    mapStateToProps, mapDispatchToProps, null, { forwardRef: true }

)(Workspace);

onPageLoad(container => ReactDOM.render(
    createElement(Provider, { store: store },
        createElement(App, props),
    ), container));
