

const initialState = {
    wapEl: {
        "_id": "5e28393890dd7201a06d4e44",
        "name": "HairDresser Baluta Marketing Site",
        "imgUrl": "http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png",
        "createdBy": {
            "_id": "5e26e0b718a0891d4c995527",
            "username": "Hekro Special"
        },
        "sections": [
            {
                "id": "37rtg",
                "type": "wap-header",
                "cmps": [
                    {
                        id: '1jh21',
                        type: 'txt',
                        txt: 'aloha aloha'
                    },
                    {
                        id: '98asd',
                        type: 'img',
                        url: 'https://m.media-amazon.com/images/I/61Jigwd1kKL._AC_SX425_.jpg',
                        style: { 'height': '20px' }
                    }
                ],
                "name": "wap-header-1",
                "style": {
                }
            },
            {
                "id": "wc03",
                "type": "wap-section",
                "cmps": [
                    {
                        id: 'as21d',
                        type: 'txt',
                        txt: 'Lorem ipsum'
                    },
                    {
                        id: '5a5as',
                        type: 'img',
                        url: 'https://www.cdc.gov/healthypets/images/covid/dog-and-cat.jpg?_=46111',
                        style: { 'borderRadius': '10px' }
                    }
                ],
                "name": "wap-section-1",
                "style": {
                }
            }
        ],
        "isPublic": true
    },
    currElement: null
}

export function wapElReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_WAP':
            return newState = { ...state, wapEl: [...action.wapEl] };
        case 'ADD_WAPEL':
            return newState = { ...state, wapEl: [...state.wapEl, action.addedWapEl] };
        case 'REMOVE_WAPEL':
            return newState = { ...state, wapEl: state.wapEl.filter(wapEl => wapEl._id !== action.wapElId) };
        case 'UPDATE_WAPEL':
            return newState = { ...state, wapEl: state.wapEl.map(wapEl => (wapEl._id === action.updatedWapEl._id) ? action.updatedWapEl : wapEl) };
        case 'SET_CURR_ELEMENT': {
            let { sectionId, cmpId } = action.elementIds;
            const currElement = state.wapEl.sections.find(sec => sec.id === sectionId).cmps.find(el => el.id === cmpId);
            console.log(currElement);
            return newState = { ...state, currElement };
        }
        case 'SET_WAPEL_STYLE':
            const { sectionId, elementId, styleName, styleValue } = action.wapElToUpdate;
            newState = {
                ...state,
                wapEl: {
                    ...state.wapEl,
                    sections: state.wapEl.sections.map(section => {
                        return (section.id !== sectionId)
                            ? section
                            : {
                                ...section,
                                cmps: section.cmps.map(cmp => {
                                    return (cmp.id !== elementId)
                                        ? cmp
                                        : {
                                            ...cmp,
                                            style: { ...cmp.style, [styleName]: styleValue }
                                        }
                                })
                            }
                    })
                }
            }
            console.log(newState);
            return newState
        default:
            return newState;
    }
}