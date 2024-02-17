import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { Data } from "../components/APIs/AllApis";

let createNavbar = createContext()
export const useNavbar = () => useContext(createNavbar)

export default function NavbarContext({ children }) {
    let cotegorie = ["Popular", "New books", "Profession"]
    const [coteg, setCoteg] = useState([])
    const [basket, basketStorage] = useState(false)
    const [categories, setCategories] = useState(false)

    const [typs, setTyps] = useState('')
    const [bookData, setBookData] = useState([])

    const [data, setData] = useState([])
    let [slices, setSlices] = useState(1)

    async function readData() {
        let { data } = await axios(Data)
        setData(data)
    }
    async function readBook() {
        if (!typs) {
            setBookData(data);
        } else {
            let newData = data.filter(el => el.type.includes(typs) ? el : false);
            setBookData(newData);
        }
    }
    useEffect(() => {
        if (data.length > 0) {
            readBook();
        }
    }, [data, typs]);
    useEffect(() => { readBook() }, [typs]);

    async function getCateg() {
        cotegorie.map(el => (
            setCoteg(el)
        ))
    }
    useEffect(() => { readData() }, [])
    let values = {
        setSlices,
        slices,
        typs,
        setTyps,
        bookData,
        basket,
        basketStorage,
        getCateg,
        data,
        cotegorie,
        categories,
        setCategories
    }
    return <createNavbar.Provider value={values}>{children}</createNavbar.Provider>
}