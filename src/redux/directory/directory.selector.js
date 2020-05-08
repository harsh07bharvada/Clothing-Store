import {createSelector} from 'reselect';


export const selectDirectory = state => state.directory;

const selectSelectionSelector = createSelector(
    [selectDirectory],
    (directory)=> directory.sections
);


export default selectSelectionSelector;