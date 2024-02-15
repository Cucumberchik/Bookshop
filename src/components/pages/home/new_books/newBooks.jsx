import { useEffect, useState } from "react"
import { useBooks } from "../../../../context/addBooks"
import { Link } from "react-router-dom"

export default function NewBooks() {
    const { date } = useBooks()
    let data = date.reverse().slice(0, 3)
    return (
        <div className="new_books d">
            <div className="container d JC_s-b w-700 MP-10 gap">

                {data.map((el, id) => (
                    <Link to={`/books/${el.id}`}>
                        <div className={`${id == 1 ? "new_book_center" : ""} c-p new_book`} key={id}>
                            <div className="new_book_img">
                                <img src={el.link} alt="book_image" />
                            </div>
                            <div className="new_book_title">
                                <h2>{el.title.slice(0, 20)}</h2>
                                <p>by {el.by}</p>
                            </div>
                        </div></Link>
                ))}

            </div>
        </div>
    )
}