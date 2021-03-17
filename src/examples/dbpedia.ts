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
import ConnectedWorkspace from '../ontodia/workspace/workspace';


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
//onPageLoad(container => ReactDOM.render(createElement(Workspace, props), container));
const store = createStore(rootReducer);



onPageLoad(container => ReactDOM.render(
    createElement(Provider, { store: store },
        createElement(ConnectedWorkspace, props),
    ), container));
