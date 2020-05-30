import React from 'react';
import {Route} from 'react-router-dom';
import CollectionPage from '../pages/collection.page';
import CollectionOverview from '../components/collection-overview.component';

const ShopPage = ({ match }) => (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);
  
  export default ShopPage;