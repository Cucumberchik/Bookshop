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


    const [data, setData] = useState([])
    async function readData() {
        let { data } = await axios(Data)
        setData(data)
    }

    async function getCateg() {
        cotegorie.map(el => (
            setCoteg(el)
        ))
    }

    useEffect(() => { readData() }, [])
    let values = {
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