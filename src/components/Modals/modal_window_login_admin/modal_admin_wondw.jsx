import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ModalWindowAdminLogIn({ modalAdmin, setModalAdmin }) {
    const [wrongAttempts, setWrongAttempts] = useState(0)
    const [timer, setTimer] = useState(1)
    const [error, setError] = useState(false)
    const [errorValue, setErrorValue] = useState(false)
    const [password, setPassword] = useState('')
    let navigate = useNavigate()
    function LogIn() {
        if (password === "admin") {
            setPassword('')
            navigate('/admin')
            setModalAdmin(false)
            localStorage.setItem("admin_session", JSON.stringify("true"));

        } else {
            setWrongAttempts(prevAttempts => prevAttempts + 1);
            setErrorValue(true);
            setTimeout(() => setErrorValue(false), 200);
            if (wrongAttempts === 2) {
                setWrongAttempts(prevAttempts => prevAttempts + 1);
                setTimer(15);
                setError(true);
                setTimeout(() => setError(false), 15000);
            } else if (wrongAttempts === 5) {
                setWrongAttempts(prevAttempts => prevAttempts + 1);
                setTimer(60);
                setError(true);
                setTimeout(() => setError(false), 60000);
            }
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            error && setTimer(prevTimer => prevTimer > 0 ? prevTimer - 1 : 0);
        }, 1000);
        return () => clearInterval(interval);
    }, [error]);
    return (
        <div className={`modal_window ${modalAdmin ? " activ" : ""} d_f-a_c JC_c`}
            onClick={() => { setModalAdmin(false) }} >
            <div className="modal_window_content admin" onClick={e => e.stopPropagation()}>
                <h1>Password Admin</h1>
                {error && <h2>Please wait {timer} seconds</h2>}
                <input
                    className={errorValue ? "errorvalue" : ""}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    placeholder="Password"
                    readOnly={error}
                />
                <button onClick={LogIn} disabled={error}>Enter</button> {/* Блокировка кнопки при error === true */}
            </div>
        </div>
    )
}