import { POST_REVIEW, ERROR } from '../actions/reviews/reviews.type'

export const postReviewReducer = (state = [], action) => {
    switch (action.type) {
        case POST_REVIEW:
            return { reviewdata: action.payload }
        case ERROR:
            return { error: action.payload }
        default:
            return state
    }
}

