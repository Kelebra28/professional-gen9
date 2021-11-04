import { useContext } from 'react'
import { AppContext } from '../../Aplication'
import { fetchUserToken } from '../../Services/request'




const Login =  () => {

    const [state, setState] = useContext(AppContext)
    
    return (
        <>
            <input placeholder="Email" type="text" onChange={ (e) => {
                setState({...state, email: e.target.value})
                }} />
            <input placeholder="Password" type="text" onChange={ (e) => {
                setState({...state, password: e.target.value})
            } } />    
            <button onClick={() => fetchUserToken()}>Click</button>
        </>
    )

}

export default Login