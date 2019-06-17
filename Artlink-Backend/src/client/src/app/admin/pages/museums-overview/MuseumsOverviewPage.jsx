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
import MuseumsTablePage from '../museums-table';
import PostFormPage from '../post-form';

const tabs = [
  { id: 'List', link: '/admin/musea' },
  { id: 'Add new museum', link: '/admin/musea/create' },
];

class MuseumsOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Musea Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/musea" component={ MuseumsTablePage }></Route>
        <Route path="/admin/musea/create" component={ PostFormPage }></Route>
        <Route path="/admin/musea/:id/edit" component={ PostFormPage }></Route>
      </ContentLayout>
    )
  }
}

export default (MuseumsOverviewPage);