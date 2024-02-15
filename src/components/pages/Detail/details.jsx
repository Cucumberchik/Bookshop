import { useParams } from "react-router-dom"
import { useBooks } from "../../../context/addBooks"
import { useEffect, useState } from "react"
import { GrShareOption } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { IoIosRemove } from "react-icons/io";
import { LiaHeartSolid } from "react-icons/lia";
import { PiWarningCircle } from "react-icons/pi";
import { useNavbar } from "../../../context/navbarContext";
export default function Detail() {
    let { errorAddBasket, setIdDerail, date, setLikeState, readData, addReceting, addBasket, likeState } = useBooks()
    let params = useParams()
    let { basketStorage } = useNavbar()

    useEffect(() => { setIdDerail(params) }, [])
    let data = [date.find(el => el.id == params.id)]
    function Geeks() {
        window.scroll({
            top: 0,
        });

    }
    let [loads, setLoad] = useState(true)
    function load() {
        setTimeout(() => { setLoad(false) }, 400)
    }
    useEffect(() => { load() }, [])
    useEffect(() => { Geeks() }, [])
    useEffect(() => { readData() }, [])
    let [error, setError] = useState(false)

    let [slices, setSlices,] = useState(true)
    let [recent, setRecent] = useState([])
    let [count, setCount] = useState(1)
    function readStorage() {
        let recentStore = JSON.parse(localStorage.getItem("recent")) || []
        setRecent(recentStore)
    }
    useEffect(() => { readStorage() }, [])
    function removeCount() {
        if (count >= 2) {
            setCount(count - 1)
        } else {
            return
        }
    }
    function addCount() {
        setCount(count + 1)
    }
    function addRecent(el) {
        readLike()
        let obj = {
            id: el.id,
            type: el.type,
            link: el.link,
            title: el.title,
            description: el.description,
            by: el.by,
            price: el.price
        }
        addReceting(obj)

    }
    let datas = JSON.parse(localStorage.getItem('recent')) || []

    function readLike() {
        if (!!datas.find(el => el.id == params.id)) {
            setLikeState(false)
        } else {
            setLikeState(true)
        }
    }


    function addBaskets(el) {
        basketStorage(true)
        setTimeout(() => { basketStorage(false) }, 1)
        let obj = {
            id: el.id,
            type: el.type,
            link: el.link,
            title: el.title,
            description: el.description,
            by: el.by,
            price: el.price,
            count
        }
        addBasket(obj)

    }
    return (
        <div className="details_head d JC_c no_copy">
            <div className="details d ">
                <div className="alert_add_books d JC_s-a tr-02" style={{
                    left: errorAddBasket ? "200px" : "-430px",
                    position: "absolute"
                }}>
                    <PiWarningCircle />
                    You have already added this book
                </div>
                <div className={`${loads ? "line_load" : ""} ""`}></div>
                <div className="details_element d">
                    {data.map(el => (

                        el && <div className="detail d">
                            <img src={el.link} alt="" />
                            <div className="detail_title">
                                <div className="detail_title_book d">
                                    <h1>{el.title}</h1>
                                    <span className={likeState ? "hearrt" : ""} onClick={() => addRecent(el)}>{likeState ? <LiaHeartSolid /> : < FaRegHeart />}</span>
                                    <span><GrShareOption /></span>
                                </div>
                                <div className="detail_title_by">
                                    <h3>by {el.by}</h3>
                                </div>
                                <div className="detail_description">
                                    <p>{slices ? el.description.slice(0, 300) + "..." : el.description}</p>
                                    <h3 style={{
                                        display: el.description.length > 350 ? "flex" : "none"
                                    }} onClick={() => setSlices(!slices)} className="c-p">{slices ? "more" : "close"}</h3>
                                </div>
                                <div className="detail_price">
                                    <h2>{el.price} сом</h2>
                                </div>
                                <div className="detail_buttons JC_s-b d">
                                    <button onClick={() => addBaskets(el)} className="AddingToCart">Add to Cart </button>
                                    <div className="detail_count d JS_c">
                                        <button onClick={removeCount}><IoIosRemove /></button>
                                        <h3>{count}</h3>
                                        <button onClick={addCount}><IoAdd /></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
