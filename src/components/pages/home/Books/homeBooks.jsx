import { Link } from "react-router-dom"
import { useBooks } from "../../../../context/addBooks"
// import { useEffect } from "react"

export default function HomeBooks() {
    let { date, } = useBooks()


    return (

        <div className="home_books">
            <h1>Books</h1>
            <div className="home_books-">
                {date.map((el, id) => (
                    <Link to={`/books/${el.id}`}>
                        <div className="home_book" key={id}>
                            <div className="home_book_img">
                                <img src={el.link} alt="" />
                            </div>
                            <div className="home_book_title">
                                <h2>{el.title.length > 35 ? el.title.slice(0, 35) + "..." : el.title}</h2>
                                <p> {el.by}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    )
}