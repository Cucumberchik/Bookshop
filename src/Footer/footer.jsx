import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Password = JSON.parse(localStorage.getItem("admin_session")) || ''
export default function Footer() {
    const [password, setPassWord] = useState('')
    const navigate = useNavigate()
    function openAdmin() {
        if (password == "admin") {
            localStorage.setItem("admin_session", JSON.stringify("true"))
            setPassWord("")
            navigate("/admin")
        } else {
            setPassWord('')
        }
    }
    return (
        <div id="footer">
            <div className="block">
                <div className="footer">
                    <div className="footer_register">
                        <h1>Sign up for our newsletter</h1>
                        <p>Be the first to know about our special offers, news, and updates.</p>
                        <div className="inpt">
                            <input value={password} onChange={(e) => setPassWord(e.target.value)} type="text" placeholder="Email Address . ." maxLength={30} />
                            <button onClick={openAdmin}>sing up</button>
                        </div>
                    </div>
                    <div className="block_foot">
                        <h3>Lorem Ipsum</h3>
                        <div className="foot_link">
                            <Link>Lorem</Link>
                            <Link>Lorem</Link>
                            <Link>Lorem</Link>
                            <Link>Lorem</Link>
                        </div>
                    </div>
                    <div className="block_foot">
                        <h3>Lorem Ipsum</h3>
                        <div className="foot_link">
                            <Link>Lorem</Link>
                            <Link>Lorem</Link>
                            <Link>Lorem</Link>
                            <Link>Lorem</Link>
                        </div>
                    </div>
                    <div className="block_foot">
                        <h3>Lorem Ipsum</h3>
                        <div className="foot_link">
                            <Link>Lorem</Link>
                            <Link>Lorem</Link>
                            <Link>Lorem</Link>
                            <Link>Lorem</Link>
                        </div>
                    </div>
                    <div className="block_foot">
                        <h3>Lorem Ipsum</h3>
                        <div className="foot_link">
                            <Link>Lorem</Link>
                            <Link>Lorem</Link>
                            <Link>Lorem</Link>
                            <Link>Lorem</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}