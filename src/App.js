import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route 
                        exact 
                        path='/'
                        element={
                            <>
                                <FeedbackForm  />
                                <FeedbackStats />
                                <FeedbackList  />   
                            </>
                        }
                        />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/post/*' element={<Post />} />
                    </Routes>
                </div>
                <AboutIconLink />
            </Router>
        </FeedbackProvider>
    )
}

export default App;