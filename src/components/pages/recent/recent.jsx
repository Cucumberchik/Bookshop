import { useNavigate } from "react-router-dom"
import { useBooks } from "../../../context/addBooks"

export default function Recent() {
    let recent = JSON.parse(localStorage.getItem("recent")) || []
    let navigate = useNavigate()
    let { removeMyRecent } = useBooks()
    function removes(id) {
        removeMyRecent(id)

    }
    return (
        <div className="recent">
            <div className="container recentcont d">
                {recent.map(el => (
                    <div className="recent_cart d">
                        <img src={el.link} alt="" />
                        <div className="recent_title d JC_s-b">
                            <div className="recent_title_by">
                                <h2>{el.title}</h2>
                                <h4>by {el.by}</h4>
                            </div>
                            <div className="recent_title_btn d JC_s-b">
                                <button onClick={() => navigate(`/books/${el.id}`)}>Link find out more</button>
                                <button onClick={() => removes(el.id)}><ion-icon name="trash-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}