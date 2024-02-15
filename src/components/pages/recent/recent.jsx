
export default function Recent() {
    let recent = JSON.parse(localStorage.getItem("recent")) || []

    return (
        <div className="recent">
            <h1>Your cart</h1>
            <h4>Not ready to checkout? <span>Continue Shopping</span></h4>
            <div className="recent_my_cart d">
                <div className="my_cart">
                    {recent.map(el => (
                        <div className="recent_cart">
                            <img src={el.link} alt="book image" />
                            <div className="recent_cart_title">
                                <div className="recent_titles">
                                    <div className="recent_cart_title_head">
                                        <h1>{el.title}</h1>
                                        <button>Remove</button>
                                    </div>
                                    <div className="recent_cart_title_by">
                                        <p>{el.by}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="recent_order_summ">
                    <h1>Order Summary</h1>
                    <div className="order_summary d">
                        <div className="page mp-0 d JC_s-b w-90">
                            <h2>Shiping</h2>
                            <h2 className="recent_select">Select method </h2>
                        </div>
                        <div className="page mp-0 v d JC_s-b w-90">
                            <h2>Shiping</h2>
                            <h2 className="recent_select">Select method </h2>
                        </div>
                        <div className="recent_line"></div>
                        <div className="total d JC_s-b mp-0 w-90">
                            <h5>Total</h5>
                            <h6>{recent.map(el => el.price).reduce((ac, el) => +ac + +el)} COM</h6>
                        </div>
                        <div className="recent_button_checkout mp-0">
                            <button>Continue to checkout</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}