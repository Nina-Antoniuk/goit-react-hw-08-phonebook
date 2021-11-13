export const getContacts = state => state.contacts;
export const getSearchValue = state => state.filter;

export const getVisibleContatcs = state => {
  const contacts = getContacts(state);
  const searchValue = getSearchValue(state);
  const normalizedFilter = searchValue.toLocaleLowerCase();

  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
};
