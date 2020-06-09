export const bookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: Date.now()
            }];
        case 'EDIT_BOOK':
       
            return [                
                 ...state.map(book =>{
                    return book.id === action.book.id ? action.book : book})
                ]

        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id);

        default:
            return state;
    }
}