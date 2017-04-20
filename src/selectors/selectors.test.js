import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorFormattedForDropdown', () => {
    it('should return author data formated for use in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'alex-aragon', firstName: 'Alex', lastName: 'Aragon'}
      ];
      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'alex-aragon', text: 'Alex Aragon'}
      ];
      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
