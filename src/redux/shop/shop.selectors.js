import {createSelector} from 'reselect';

export const selectShop = state => state.shop;

export const selectCollectionFromShop = createSelector(
    [selectShop],
    shop=> shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollectionFromShop],
    collections => collections[collectionUrlParam]
  );