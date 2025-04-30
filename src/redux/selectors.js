import { createSelector } from 'reselect';

export const selectContacts = state => state.contacts.items;
export const selectNameFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(nameFilter.toLowerCase())
    )
);
