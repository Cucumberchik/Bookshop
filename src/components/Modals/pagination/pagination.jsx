
import { useBooks } from '../../../context/addBooks';

export default function CustomIcons({ bookData, slices, setSlices }) {
    let pages = ".".repeat(Math.ceil(bookData.length / 12)).split('').map((el, id) => id + 1)

    return (
        <div className="Quenty d JC_c">
            <div className="conteiner qnt d">

                {pages.map(el => (
                    <p className={`${slices == el ? "pageActive" : "pageNoActive"} d JC_c tr-02`} onClick={() => setSlices(el)}>{el}</p>
                ))}

            </div>
        </div>
    );
}
