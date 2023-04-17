import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });


  it('should return item 1 searching 1', () => {
    const items = [{id: 1, text: 'lorem ipsum'}, {id: 2, text: 'ipsum loren'}, {id: 3, text: 'ipusum sit'}];

    const search = '1';
    const term = search.toLowerCase();

    expect(pipe.transform(items, term)).toEqual([{id: 1, text: 'lorem ipsum'}]);
  });

  
  it('should return the same array if search is empty', () => {
    const items = [{id: 1, text: 'lorem ipsum'}, {id: 2, text: 'ipsum loren'}, {id: 3, text: 'ipusum sit'}];

    const search = null

    expect(pipe.transform(items, search)).toEqual(items);
  });

})