import { useEffect } from "react"
import { useNavbar } from "../../../context/navbarContext"
import { useNavigate } from "react-router-dom"


export default function Categories() {
    let navigate = useNavigate()

    const { categories, setCategories } = useNavbar()
    function TrnsCoteg() {
        setCategories(false)
        navigate("/books")
    }
    let arrCotegories = ["Fiction", "Young People's Literature", "Detectives", "Fables", "Religion", "Law books", "Attributes", "Manga", "Bilguini", "Main 2024", "New Items", "Popular", "Collections", "Audiobooks", "Samizdat", "Drafts", "Podcasts", "Comics", "Magazine", "Series", "Free books", "Top books", "School", "Books in Russian", "Books in English"]
    return (
        <div className="cotegories tr-02" style={{
            top: categories ? "60px" : "-600px",
            opacity: categories ? "1" : '0',
            zIndex: "-3"
        }} onClick={TrnsCoteg}>
            <div className="container">
                <div className="cotegories_book d">
                    {arrCotegories.map(el => (
                        <h3>{el}</h3>
                    ))}
                </div>
            </div>
        </div>
    )
}