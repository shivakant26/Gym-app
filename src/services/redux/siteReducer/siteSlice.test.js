import siteSlice , {initialState}from "../siteReducer/siteSlice";

describe("tests for ListSlice", () => {
  test("initialize slice with initialValue", () => {
    const listSliceInit = siteSlice(initialState, { type: "unknown" });
    expect(listSliceInit).toBe(initialState);
  });
});

// test('Sets up initial state state with actions', () => {
//   const store = setupStore()
//   store.dispatch(todoAdded('Buy milk'))

//   const { getByText } = renderWithProviders(<TodoList />, { store })
// })