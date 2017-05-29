import PasswordReducer from '../../reducers/passwordReducer'

describe('Password Recuder', () => {
  it('has a default state', () => {

    expect(PasswordReducer(undefined, {type: 'others'})).toEqual(
      {
        data: [],
        last_id: 0,
        search_result: [],
        selected_data: {}
      }
    );

  });
})
