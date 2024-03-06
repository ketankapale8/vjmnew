import { Outlet, Link } from "react-router-dom"
import { useEffect, useRef, useState } from 'react'
// import { useRefreshMutation } from "./authApiSlice"
// import usePersist from "../../hooks/usePersist"
// import { useSelector } from 'react-redux'
// import { selectCurrentToken } from "./authSlice"
import { useRefreshMutation } from "./authApiSlice";
import usePersist from "../../hooks/usePersist";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";

const PersistLogin = () => {

    const [persist] = usePersist()
    const token = useSelector(selectCurrentToken)
    const effectRan = useRef(false)

    const [trueSuccess, setTrueSuccess] = useState(false)

    const [refresh, {
        isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error
    }] = useRefreshMutation()


    useEffect(() => {

        if (effectRan.current === true || process.env.NODE_ENV !== 'development') { // React 18 Strict Mode

            const verifyRefreshToken = async () => {
                console.log('verifying refresh token')
                try {
                    //const response = 
                    await refresh()
                    //const { accessToken } = response.data
                    setTrueSuccess(true)
                }
                catch (err) {
                    console.error(err)
                }
            }

            if (!token && persist) verifyRefreshToken()
        }

        return () => effectRan.current = true

        // eslint-disable-next-line
    }, [])


    let content
    if (!persist) { // persist: no
        console.log('no persist')
        content = <Outlet />
    } else if (isLoading) { //persist: yes, token: no
        console.log('loading')
        content = <p>Loading...</p>
    } else if (isError) { //persist: yes, token: no
        console.log('error')
        content = (
            <div style={{width:'100%', paddingTop:'100px', display:'flex', flexDirection:'column', alignItems:'center' , justifyContent:'center' , border:'1px solid black', borderRadius:'4px'}}>
                <div className='errmsg'  >
                    <h3>
                        {error.data?.message} to initiate on VJM Portal. 

                    </h3>
                        
                    <Link to="/login">
                    <button style={{backgroundColor:"#392727", color:"white", width:'120px', height:'40px', borderRadius:'5px'}}>
                    Login
                    </button>
                       
                    </Link>
                </div>

            </div>
        )
    } else if (isSuccess && trueSuccess) { //persist: yes, token: yes
        console.log('success')
        content = <Outlet />
    } else if (token && isUninitialized) { //persist: yes, token: yes
        console.log('token and uninit')
        console.log(isUninitialized)
        content = <Outlet />
    }

    return content
}
export default PersistLogin