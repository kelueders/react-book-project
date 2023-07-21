import { createSlice } from '@reduxjs/toolkit';

export interface BookState {
    title: string,
    author_first: string,
    author_last: string,
    summary: string,
    price: number,
    num_pages: number,
    publisher: string,
    published_year: string,
    isbn: string
}

const initialState: BookState = {
    title: 'Title Here',
    author_first: '',
    author_last: '',
    summary: '',
    price: 0,
    num_pages: 0,
    publisher: '',
    published_year: '',
    isbn: ''
}

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseAuthorFirst: (state, action) => { state.author_first = action.payload },
        chooseAuthorLast: (state, action) => { state.author_last = action.payload },
        chooseSummary: (state, action) => { state.summary = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseNumPages: (state, action) => { state.num_pages = action.payload },
        choosePublisher: (state, action) => { state.publisher = action.payload },
        choosePublishYear: (state, action) => { state.published_year = action.payload },
        chooseISBN: (state, action) => { state.isbn = action.payload },
    }
})

// EXPORT reducers

// reducers are how values such as a name for a book get added to the state object
// there are two reducers here
export const reducer = rootSlice.reducer;
console.log(rootSlice);
export const {
    chooseTitle,
    chooseAuthorFirst,
    chooseAuthorLast,
    chooseSummary,
    choosePrice,
    chooseNumPages,
    choosePublisher,
    choosePublishYear,
    chooseISBN
} = rootSlice.actions