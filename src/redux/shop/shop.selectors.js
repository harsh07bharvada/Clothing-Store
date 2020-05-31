import {createSelector} from 'reselect';

export const selectShop = state => state.shop;

export const selectCollectionFromShop = createSelector(
    [selectShop],
    shop=> shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollectionFromShop],
  collections => Object.values(collections)
);


export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollectionFromShop],
    collections => {
      console.log(collections);
      return collections[collectionUrlParam]}
  );