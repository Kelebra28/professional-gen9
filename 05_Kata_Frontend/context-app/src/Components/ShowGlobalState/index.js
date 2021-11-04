import { useContext } from 'react'
import { AppContext } from '../../Aplication'

const ShowGlobalState = () => {
    const [state, setState] = useContext(AppContext)

    console.log(state)

    return (
        <>
            <p>{state.email}</p>
            <p>{state.password}</p>
        </>
    )
}

export default ShowGlobalState