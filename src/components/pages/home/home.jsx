import { useNavigate } from "react-router-dom";
import NewBooks from "./new_books/newBooks";
import HomeBooks from "./Books/homeBooks";
import About from "../about/about";

export default function Home() {
    let navigate = useNavigate()
    let card = [
        {
            link: "https://s3-alpha-sig.figma.com/img/e19f/df0f/d8e5c0ec1ac052ee2b8b58e6ba7aefd7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EXfqgn0zkMZPZANQPyAaGe4S2gmUmzEhhhT2xyHAf8w6bCsKZkSnciyI-t6tztfSaWjKg59g1PrRH1b3cOL9JmbqIkIbd8O9RJyTuMl9ERCvMfqyWOxUCC452JAK6~Hxi0dMxDggujC5fXvuHqCJ-DCrEQZyz6h9bpPUVNmeplBxqrLBQuzIbAOf4tVn1WQHsmGFMP4OTAQdxA82aLP-2~FgXiPsCJAr1pUw5rdeHIgY3wdU-TiaZy8df8ztitYbBctsmwt7j7VYmfmgrAiu0qMBVdnLDB5Me8Hz9sx2BIONW3DeRvwDxLC0WhKM3UJQzdkTEBrt6MWWDylYvl2RFg__",
            title: "Sci-Fi"
        }, {
            link: "https://nztcdn.com/files/b14cc276-6590-4f05-9b17-523508788f00.webp",
            title: "For-kids"
        },
        {
            link: "https://nztcdn.com/files/d5ead12a-1c64-4d7d-8024-223c9b88b167.webp",
            title: "Psychology"
        },
        {
            link: "https://nztcdn.com/files/bc3e9a8a-3fdc-455e-8554-298d30193340.webp",
            title: "Romantic"
        },
        {
            link: "https://nztcdn.com/files/f8caa974-4b20-44a4-8f9f-fe516ac748b0.webp",
            title: "Detective"
        },
        {
            link: "https://nztcdn.com/files/ad4e2e5f-1e72-4424-ba44-b7a40b814908.webp",
            title: "Finance"
        }
    ]
    return (
        <div className="home">
            <div className="container">
                <div className="main">
                    <div className="home_header_title">
                        <img src="https://s3-alpha-sig.figma.com/img/8349/5572/98f1103d0d2b49aa6f5a81e024091169?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q7v4jT3Qx0XR1VrzaC19kXmh8fnOVCBFOhQRtbtX~14bgaXLGQLy35hqQz7vPEUZFCkzmOCadyHFrPSUKZRn5yyLp1NgvVglNbXRA2zJIpeYEOb0cso21dh5S~9au1ObOOVyw0fNxJb9HS9rXybw40njVq2-s6i47ua2RJOab1ZzSkl8Xrm9UQ7YgAEt30qJpRJHmP4j6dKFDpUEGRNsXv8N-w-3AyNZ9uc3xKEax7f8n~i4749Tbk3O2C9qQ9hFv153rlrrtjkH6kDI7aKuoyRSXeOP9MjC8ylPIdougZANVPbMrB7b5ThdnX21UxYSXz07ABJX8Fw3KYHtVJIGMA__" alt="" />
                    </div>
                    <div className="home_title d_f-a_c">
                        <h1>Welcome to our Bookshop</h1>
                        <p>A place where you can get all the books you want!</p>
                    </div>
                </div>
                <div className="home_genres ">
                    <div className="home_genres_titles JC_s-b d_f-a_c">
                        <h1>Genres</h1>
                        <p onClick={() => navigate('/books')}>View all</p>
                    </div>
                    <div className="home_generes_element JC_s-a">
                        {card.map(el => (
                            <div className="card">
                                <img src={el.link} alt="" />
                                <h2>{el.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="new_books">
                    <center><h1>New Books</h1></center>
                    <NewBooks />
                </div>
                <div className="home_Books">
                    <HomeBooks />
                </div>
            </div>
            <About />
        </div>
    )
}