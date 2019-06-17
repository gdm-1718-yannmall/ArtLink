/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

/*
Layout
*/
import { ContentLayout } from '../../layouts';

/*
Pages
*/
import ArtPiecesTablePage from '../artPieces-table';
import PostFormPage from '../post-form';

const tabs = [
  { id: 'List', link: '/admin/artpieces' },
  { id: 'Add new art', link: '/admin/artpieces/create' },
];

class ArtPiecesOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="ArtPieces Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/artpieces" component={ ArtPiecesTablePage }></Route>
        <Route path="/admin/artpieces/create" component={ PostFormPage }></Route>
        <Route path="/admin/artpieces/:id/edit" component={ PostFormPage }></Route>
      </ContentLayout>
    )
  }
}

export default (ArtPiecesOverviewPage);