import { useEffect } from "react"
import { useNavbar } from "../../../context/navbarContext"


export default function Categories() {
    const { getCateg, cotegorie, categories } = useNavbar()
    useEffect(() => { getCateg() }, [])
    return (
        <div className="cotegories tr-02" style={{
            top: categories ? "60px" : "-600px",
            opacity: categories ? "1" : '0',
            zIndex: "-3"
        }}>
            <div className="container">
                <div className="cotegories">
                    <div className="categ_header">
                        {
                            cotegorie.map((el, id) => (<p key={id} className="tr-02 clog c-p">{el}</p>))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}