import { useState, useEffect } from "react"
import { useBooks } from "../../../context/addBooks"
import { Link } from "react-router-dom"
import { FaCircle } from "react-icons/fa";
import CustomIcons from "../../Modals/pagination/pagination";
import { useNavbar } from "../../../context/navbarContext";
export default function Books() {
    let typing = ["Autographed Books", "Sci-Fi", "For kids", "For teenagers", "Finance", "Romantic", "Psychology", "Self-Improvement", "Educational", "Literature", "Religion"]
    let { bookData, setTyps, typs, setSlices, slices } = useNavbar()
    let sliceNum = (slices * 12) - 12
    return (
        <div id="books">
            <div className="block_filter">
                <div className="books">
                    <div className="all_books">
                        <h1>ALL BOOKS</h1>
                        <p>Here you can find all the books you need</p>
                    </div>
                    <div className="filter_block_books">
                        <div className="filter_books">
                            <h3>Filter  <button onClick={() => setTyps("")}>Clear filters</button></h3>
                            <h4>Genres</h4>
                            {
                                typing.map(el => (
                                    <p className="p_teg c-p" onClick={() => { setTyps(el) }}>{typs == el ? <FaCircle /> : <ion-icon name="ellipse-outline"></ion-icon>} {el}</p>
                                ))
                            }
                        </div>
                        <div className="books_type_filter">
                            <div className="type_block">
                                {(bookData.length > 12 ? bookData.slice(sliceNum, (slices * 12)) : bookData).map(el => (
                                    <Link to={`/books/${el.id}`} >
                                        <div className="getBook1">
                                            <img src={el.link} alt="" />
                                            <h1>{el.title.slice(0, 12) + "..."}</h1>
                                            <h5>{el.by}</h5>
                                        </div>
                                    </Link>

                                ))}
                            </div>
                            {bookData.length > 12 && <CustomIcons bookData={bookData} slices={slices} setSlices={setSlices} />}
                        </div>

                    </div>
                </div>
            </div>


        </div >
    )
}