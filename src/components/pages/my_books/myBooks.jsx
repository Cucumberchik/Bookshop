import { useEffect, useState } from "react"
import { useBooks } from "../../../context/addBooks"
import { useNavbar } from "../../../context/navbarContext"
import pay from "../../PayPal 1.svg"
import { Link } from "react-router-dom"
import ModalWindowMyCart from "../../Modals/modal_window/modal_window"
import { AiOutlineClose } from "react-icons/ai";
export default function MyBooks() {
    let dataStorage = JSON.parse(localStorage.getItem("basket")) || []
    let [data, setData] = useState([])
    let { removeMyCart, editData } = useBooks()
    let { basketStorage } = useNavbar()
    let [load, setLoad] = useState(false)
    let [shiping, setShiping] = useState(false)
    let [peyment, setPeyment] = useState(false)
    let [modalWindow, setModalWindow] = useState(false)
    let [ind, setInd] = useState('')

    // ====Input State=======
    let [number, setNumber] = useState('')
    let [month, setMonth] = useState('')
    let [year, setYear] = useState('')
    let [cvc, setCvc] = useState('')

    let noStringNumber = number.replace(/[a-z]/gi, '').slice(0, 21);

    let noStringMonth = month.replace(/[a-z]/gi, '')
    let noStringYear = year.replace(/[a-z]/gi, '')
    let noStringCVC = cvc.replace(/[a-z]/gi, '')
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
    useEffect(() => { readData() }, [load, modalWindow])

    function shipingUse() {
        setShiping(!shiping)
        setPeyment(false)
    }
    function paymentUse() {
        setPeyment(!peyment)
        setShiping(false)
    }
    function modalOpen(id) {
        setInd(id)
        setModalWindow(true)
    }
    return (
        <div className={`my_carts `}>
            <h1>Your cart</h1>
            <h4>Not ready to checkout? <span>Continue Shopping</span></h4>
            <div className="carts  d">
                <div className="my_cart d">
                    {data.map(el => (

                        <div className="carts d">
                            <Link to={`/books/${el.id}`}>

                                <img src={el.link} alt="book image" />
                            </Link>
                            <div className="my_cart_title JC_s-b d">
                                <div className="my_cart_titles ">
                                    <div className="my_cart_cart_title_head d">
                                        <h1>{el.title.length == 25 ? el.title.slice(0, 25) + ".." : el.title}</h1>
                                        <button onClick={() => removeData(el.id)}>Remove</button>
                                    </div>
                                    <div className="my_cart_cart_title_by">
                                        <p>by {el.by}</p>
                                    </div>
                                </div>
                                <div className="my_cart_quenti">
                                    <h3>Quantity: {el.count} <AiOutlineClose /> {el.price}coм   <span className="edit_count c-p" onClick={() => modalOpen(el.id)}>edit</span></h3>
                                    <h4>{el.price * el.count} COM </h4>
                                </div>
                            </div>
                        </div>


                    ))}
                </div>
                <div className="my_cart_order_summ">
                    <h1>Order Summary</h1>
                    <div className="order_summary d" style={{
                        marginTop: shiping || peyment ? "30px" : ""
                    }}>
                        <div className="order_page d mp-0 d JC_s-b w-90">
                            <div className="page mp-0 d JC_s-b w-90">
                                <h2>Shiping</h2>
                                <h2 onClick={shipingUse} className={`${shiping ? "ratet_arrow tr-02" : ""} recent_select c-p no_copy tr-02`}>Select method <ion-icon name="chevron-forward-outline"></ion-icon></h2>
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
                        <div className="order_page d mp-0 d JC_s-b w-90">
                            <div className="page mp-0 v d JC_s-b w-90">
                                <h2>Payment</h2>
                                <h2 onClick={paymentUse} className={`${peyment ? "ratet_arrow tr-02" : ""} recent_select c-p no_copy`}>Select method <ion-icon name="chevron-forward-outline"></ion-icon></h2>
                            </div>
                            {peyment && <div className="payment_method ">
                                <div className="payment_order_btn">
                                    <button><img src={pay} alt="" /></button>
                                    <button className="pay_card">Credit card</button>
                                </div>
                                <div className="peyment_card_inputs d">
                                    <input type="text" placeholder="Cardholder Name" />
                                    <input value={noStringNumber} type="text" onChange={(e) => setNumber(e.target.value)} placeholder="Card Number" />
                                    <div className="peyment_card_inputs_date d JC_s-b">
                                        <input value={noStringMonth} type="text" onChange={(e) => setMonth(e.target.value)} placeholder="Month" />
                                        <input value={noStringYear} type="text" onChange={(e) => setYear(e.target.value)} placeholder="Year" />
                                    </div>
                                    <input value={noStringCVC} type="text" onChange={(e) => setCvc(e.target.value)} placeholder="CVC" />
                                </div>
                            </div>}
                        </div>
                        <div className="my_cart_line"></div>
                        <div className="total d JC_s-b mp-0 w-90">
                            <h5>Total</h5>
                            <h6>{data.length !== 0 ? data.map(el => el.price * el.count).reduce((ac, el) => +ac + +el) + "COM" : "0"}  </h6>
                        </div>
                        <div className="my_cart_button_checkout mp-0">
                            <button>Continue to checkout</button>
                        </div>
                    </div>
                </div>

            </div>


            <ModalWindowMyCart modalWindow={modalWindow} setModalWindow={setModalWindow} id={ind} />


        </div>
    )
}