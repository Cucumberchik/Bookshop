import { useState, useEffect } from "react"
import { useBooks } from "../../../context/addBooks"
import { Link } from "react-router-dom"
export default function Books() {
    const { typing } = useBooks()
    const [getBook, setGetBook] = useState([])
    const [buttons, setButton] = useState('')
    const { date } = useBooks()

    function getRavno(){
        typing.map((el) =>  setButton(el) )
    }
    // console.log(buttons);

    function getBooks(el) {
        setButton(el)
        const book = date.filter(el => el.type ===buttons )
        setGetBook(book)
    }

    // console.log(buttons);

    // console.log(getBook);
    useEffect(() =>  getBooks(), [])

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
                            <h3>Filter  <button>Clear filters</button></h3>
                            <h4>Genres</h4>
                            {
                                typing.map(el => (
                                    <p className="p_teg c-p" onClick={() => { getBooks(el) }}>{el}</p>
                                ))
                            }
                        </div>
                        <div className="type_block">



                            {getBook.map(el => (
                                <Link to={`/books/${el.id}`} >
                                    <div className="getBook1">
                                        <img src={el.link} alt="" />
                                        <h1>{el.title.slice(0, 12) + "..."}</h1>
                                        <h5>{el.price}</h5>
                                    </div>
                                </Link>

                            ))}

                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}