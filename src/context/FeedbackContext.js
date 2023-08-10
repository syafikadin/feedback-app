import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Delete Feedback
    const deleteFeedback = async (id) => {
        if (window.confirm('Are Your Sure Want to Delete?')) {
            await fetch(`/feedback/${id}`, {method: 'DELETE'})

            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Add Feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        })
        const data = await response.json()

        setFeedback([data, ...feedback])
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // Update feedback item
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem),
        })

        const data = await response.json()

        setFeedback(
            feedback.map((item) =>(item.id === id ? {...item, ...data} : item))
        )
    }

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch Feedback
    const fetchFeedback = async () => {
        const response = await fetch(
            `/feedback?_sort=rating$_order=asc`
        )
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }
    
    return <FeedbackContext.Provider value={{ 
        isLoading,
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