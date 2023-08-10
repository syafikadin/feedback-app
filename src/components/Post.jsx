import { Navigate, Route, Routes, useNavigate } from "react-router-dom"

function Post() {
    const status = 200

    const navigate = useNavigate()

    const handleOnClick = () => {
        console.log('Haloo')
        navigate('/about')
    }

    if (status === 404) {
        return <Navigate to='/notfound'/>
    }
    return (
        <div>
            <h1>Post</h1>
            {/* <button onClick={handleOnClick}>Click</button>
            <Routes>
                <Route path="/show" element={<h1>Hei</h1>}/>
            </Routes> */}
        </div>
    )
}

export default Post