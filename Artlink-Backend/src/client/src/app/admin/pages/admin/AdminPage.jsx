/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/*
Pages
*/
import CategoriesOverviewPage from '../categories-overview';
import MuseumsOverviewPage from '../museums-overview';
import ArtPiecesOverviewPage from '../artPieces-overview';

class AdminPage extends Component {
  render() {
    return (
      <div className="Admin">
        <Route path="/admin/musea" component={ MuseumsOverviewPage }></Route>
        <Route path="/admin/categories" component={ CategoriesOverviewPage }></Route>
        <Route path="/admin/artpieces" component={ ArtPiecesOverviewPage }></Route>
      </div>
    )
  }
}

export default (AdminPage);