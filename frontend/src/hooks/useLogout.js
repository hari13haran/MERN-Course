import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {

    const { dispatch } = useAuthContext()
    
    const logout = () => {
        // remove the local storage
        localStorage.removeItem('user')
        // update Auth context - Global storage
        dispatch({type: 'LOGOUT'})
    }

    return { logout }
}