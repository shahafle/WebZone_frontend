import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'





export function UserMsg() {
    const att = { position: "bottom-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, className: "toast" }
    
    const userMsg = useSelector(state => state.userModule.userMsg)

    useEffect(() => {
        if (!userMsg) return
        if (userMsg.type === 'reg') {
            toast(userMsg.txt, att)
        } else if (userMsg.type === 'error') {
            toast.error(userMsg.txt, att);
        } else if (userMsg.type === 'success') {
            toast.success(userMsg.txt, att);
        }
    }, [userMsg])


    if (!userMsg) return ''

    return (
        <ToastContainer style={{ top: 0 }} className="toast"
            style={{ zIndex: 1200 }} position="bottom-center"
            autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick 
            pauseOnFocusLoss draggable pauseOnHover />
    )
}