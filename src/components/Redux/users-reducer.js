const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [
        // {id: 1, photoUrl: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg', followed: true, fullName: 'Ann', status: 'I love books', location: {city: 'Lviv', country: 'Ukraine'}},
        // {id: 2, photoUrl: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg', followed: false, fullName: 'Vika', status: 'I love books too', location: {city: 'Kyiv', country: 'Ukraine'}},
        // {id: 3, photoUrl: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg', followed: true, fullName: 'Olga', status: 'I am a reader', location: {city: 'Lviv', country: 'Ukraine'}}
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, 
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
                }
        case UNFOLLOW:
            return {...state, 
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
                }
        case SET_USERS: {
            return {...state, users: action.users }
                // [...state.users, ...action.users]} //Ми зклеюємо два масива масив користувачів які у нас були та масив користувачів які прийшли до нас в action
        }
        case SET_CURRENT_PAGE: 
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT: 
            return { ...state, totalUsersCount: action.count }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

export default usersReducer;