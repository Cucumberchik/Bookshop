import { Link, useNavigate } from "react-router-dom"
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useEffect, useState } from "react";
import Categories from "../components/pages/categories/categories";
import SearchList from "../components/pages/list_search/list_search";
import { useNavbar } from "../context/navbarContext";
export default function Navbar() {
    let navigate = useNavigate()
    let basketStora = JSON.parse(localStorage.getItem('basket')) || []
    const { categories, setCategories, basket } = useNavbar()
    const [basketStorage, setBasket] = useState([])
    const [searching, setSearching] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    function readData() {
        setBasket(basketStora)
    }
    useEffect(() => { readData() }, [basket])
    function Geeks() {
        setTimeout(() => {
            setCategories(false)
            window.scroll({
                top: 2300,
                behavior: 'smooth'
            });
        }, 100)
    }
    function Homs() {
        setCategories(false)

        navigate('/')
        setTimeout(() => {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        }, 100)
    }
    function booksUp() {
        setCategories(false)
        setTimeout(() => {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        }, 100)
    }
    function readSearch() {
        setTimeout(() => {
            setSearching(!searching)
        }, 10)
    }
    return (
        <div className="navbar ">
            <div className="container m-b">
                <nav className="d_f-a_c JC_s-a">
                    <div className="navbar_title d_f-a_c JC_s-b">
                        <h1 className="c-p" onClick={Homs}>Bookshop</h1>
                        <Link onClick={() => setCategories(!categories)}>Categories</Link>
                        <Link onClick={() => setCategories(false)} to="/recent">Recent</Link>
                        <Link onClick={booksUp} to="/books">Books</Link>
                        <Link onClick={Geeks} to="/">About Us</Link>
                    </div>
                    <div style={{
                    }} className="navbar_hug d_f-a_c JS_s-b">
                        <div className="search d ">
                            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className={`${searching ? "searching" : ""}`} />
                            <button onClick={() => readSearch()} className="tr-02 d_f-a_c"><IoSearch /></button>
                        </div>
                        <div className="navbar_orders d_f-a_c">
                            <button onClick={() => navigate("/my-books")} className="tr-02 d_f-a_c"><MdOutlineShoppingBag /></button>
                            <h1>{basketStorage.length}</h1>
                        </div>
                    </div>
                </nav>
                <div className="list_cotegorios">
                    <Categories />

                </div>
                <div className="list_search d" >
                    <SearchList searching={searching} setSearchValue={setSearchValue} searchValue={searchValue} setSearching={setSearching} />
                </div>
            </div>
        </div>
    )
}