import { useState } from "react"
import { useNavbar } from "../../../context/navbarContext"
import { Link } from "react-router-dom"

export default function SearchList({ setSearchValue, setSearching, searching, searchValue }) {
    let { data } = useNavbar()
    function setSearch() {
        setSearchValue("")
        setSearching(false)
    }
    return (
        <div className="searching_list tr-02 d " style={{
            display: searching ? "flex" : "none",
            height: searchValue && data.filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase())).length > 5 ? ((data.filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase())).slice(0, 4).length * 80) + 430) + "" + "px" : "420px"
        }}>
            {

                searchValue && data.filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase())).map(el => (
                    <Link onClick={setSearch} to={`/books/${el.id}`}>
                        <div className="search_element d tr-02 ">
                            <img src={el.link} alt="" />
                            <div className="search_element_title d">
                                <h3>{el.title.length > 25 ? el.title.slice(0, 25) + "..." : el.title}</h3>
                                <p>{el.by}</p>
                            </div>
                        </div>
                    </Link>

                ))
            }
        </div>
    )
}
