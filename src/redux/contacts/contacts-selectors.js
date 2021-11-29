export const getContacts = state => state.myContacts.contactsList;
export const getSearchValue = state => state.myContacts.filter;

export const getVisibleContatcs = state => {
  const contacts = getContacts(state);
  const searchValue = getSearchValue(state);
  const normalizedFilter = searchValue.toLocaleLowerCase();
  return contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizedFilter);
  });
};
