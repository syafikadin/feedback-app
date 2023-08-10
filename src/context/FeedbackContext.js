import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback 1',
            rating: 9
        },

        {
            id: 2,
            text: 'This is feedback 2',
            rating: 8
        },

        {
            id: 3,
            text: 'This is feedback 3',
            rating: 6
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Delete Feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are Your Sure Want to Delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) =>(item.id === id ? {...item, ...updItem} : item))
        )
    }
    
    return <FeedbackContext.Provider value={{ 
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
     }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext