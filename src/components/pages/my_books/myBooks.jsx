import { useEffect, useState } from "react"
import { useBooks } from "../../../context/addBooks"
import { useNavbar } from "../../../context/navbarContext"
import { Checkbox } from "@mui/material"
export default function MyBooks() {
    let dataStorage = JSON.parse(localStorage.getItem("basket")) || []
    let [data, setData] = useState([])
    let { removeMyCart } = useBooks()
    let { basketStorage } = useNavbar()
    let [load, setLoad] = useState(false)
    let [shiping, setShiping] = useState(false)
    let [peyment, setPeyment] = useState(false)
    function readData() {
        setData(dataStorage)
    }
    function removeData(id) {
        readData()
        basketStorage(true)
        setLoad(true)
        removeMyCart(id)
        setTimeout(() => {
            setLoad(false)
            basketStorage(false)
        }, 1)
    }
    useEffect(() => { readData() }, [load])
    return (
        <div className="my_carts">
            <h1>Your cart</h1>
            <h4>Not ready to checkout? <span>Continue Shopping</span></h4>
            <div className="carts d">
                <div className="my_cart d">
                    {data.map(el => (
                        <div className="carts d">
                            <img src={el.link} alt="book image" />
                            <div className="my_cart_title JC_s-b d">
                                <div className="my_cart_titles ">
                                    <div className="my_cart_cart_title_head d">
                                        <h1>{el.title}</h1>
                                        <button onClick={() => removeData(el.id)}>Remove</button>
                                    </div>
                                    <div className="my_cart_cart_title_by">
                                        <p>by {el.by}</p>
                                    </div>
                                </div>
                                <div className="my_cart_quenti">
                                    <h3>Quantity: {el.count}</h3>
                                    <h4>{el.price * el.count} COM</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="my_cart_order_summ">
                    <h1>Order Summary</h1>
                    <div className="order_summary d">
                        <div className="order_page d mp-0 d JC_s-b w-90">
                            <div className="page mp-0 d JC_s-b w-90">
                                <h2>Shiping</h2>
                                <h2 onClick={() => setShiping(!shiping)} className={`${shiping ? "ratet_arrow tr-02" : ""} recent_select c-p no_copy tr-02`}>Select method <ion-icon name="chevron-forward-outline"></ion-icon></h2>
                            </div>
                            {shiping && <div className={`order_page_answer  d`}>
                                <div className="order_page_UPS d">
                                    <input type="checkbox" />
                                    <div className="order_checkbox_title">
                                        <h2 >UPS Ground Shipping </h2>
                                        <p >UPS Ground Shipping </p>
                                    </div>
                                </div>
                                <div className="order_page_UPS d">
                                    <input type="checkbox" />
                                    <div className="order_checkbox_title">
                                        <h2>UPS/USPS Surepost </h2>
                                        <p>4-7 Business Days</p>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="page mp-0 v d JC_s-b w-90">
                            <h2>Payment</h2>
                            <h2 onClick={() => setPeyment(!peyment)} className={`${peyment ? "ratet_arrow tr-02" : ""} recent_select c-p no_copy`}>Select method <ion-icon name="chevron-forward-outline"></ion-icon></h2>
                        </div>
                        <div className="my_cart_line"></div>
                        <div className="total d JC_s-b mp-0 w-90">
                            <h5>Total</h5>
                            <h6>{data.length !== 0 ? data.map(el => el.price * el.count).reduce((ac, el) => +ac + +el) + "COM" : "empty"} </h6>
                        </div>
                        <div className="my_cart_button_checkout mp-0">
                            <button>Continue to checkout</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}