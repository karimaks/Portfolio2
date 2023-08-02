
//1- Les actions (qui modifient le store)

const ADD_USER = 'ADD_USER'
const DELETE_USER = 'DELETE_USER'
const UPDATE_USER = 'UPDATE_USER'
const LIST_USER = 'LIST_USER'
const CURRENT_USER = 'CURRENT_USER'

//2 - Createurs d'actions (retournent un objet)

export const addUser = (user) => ({ type: ADD_USER, payload: user })

export const updateUser = (user, id) => ({ type: UPDATE_USER, payload: { user, id } })

export const deleteUser = id => ({ type: DELETE_USER, payload: { id } })

export const getAllUser = (users) => ({ type: LIST_USER, payload: users })

export const getUser = id => ({ type: CURRENT_USER, payload: { id } })


// Le reducteur pour les etudiants

// --Definir l'etat initial pour l'objet global pour les etudiants

const initialState = {
    users: [],
    user: {}
}

// Faites attention aux comparaison == et === car les types son differents des fois
export const userReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case LIST_USER:
            return { ...state, users: payload }
        case CURRENT_USER:
            return { ...state, user: state.users.find(user => user.id === payload.id) }

        case ADD_USER:
            return { ...state, users: [...state.users, payload] }

        case UPDATE_USER:
            return { ...state, users: state.users.map(user => user.id == payload.id ? payload.user : user) }

        case DELETE_USER:
            return { ...state, users: state.users.filter(user => user.id !== payload.id) }

        default:
            return state
    }
}
