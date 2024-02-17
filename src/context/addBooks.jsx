
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { Data } from "../components/APIs/AllApis";
import { wait } from "@testing-library/user-event/dist/utils";


let createBooksContext = createContext()
export const useBooks = () => useContext(createBooksContext)



export default function AddBooksing({ children }) {
    const [date, setData] = useState([])
    const [likeState, setLikeState] = useState(false)
    const [recentStore, setRecentStore] = useState([])
    const [errorAddBasket, setErrorAddBasket] = useState(false)


    let basket = JSON.parse(localStorage.getItem("basket")) || []
    let recentStorage = JSON.parse(localStorage.getItem("recent")) || []
    let data = JSON.parse(localStorage.getItem("basket")) || []

    async function loadStorage() {
        setRecentStore(JSON.parse(localStorage.getItem("recent")) || [])
    }
    useEffect(() => { loadStorage() }, [])
    async function addBooks(obj) {
        await axios.post(Data, obj)
    }
    async function readData() {
        let { data } = await axios(Data)
        setData(data)
    }
    useEffect(() => { readData() }, [recentStore])
    function addReceting(obj) {
        if (!recentStorage.find(el => el.id == obj.id)) {
            recentStorage.unshift(obj);
            localStorage.setItem("recent", JSON.stringify(recentStorage));


        } else {
            recentStorage = recentStorage.filter(el => el.id !== obj.id);
            localStorage.setItem("recent", JSON.stringify(recentStorage));
        }
    }
    async function removeMyCart(id) {
        data = data.filter(el => el.id !== id);
        localStorage.setItem("basket", JSON.stringify(data));
    }
    async function removeMyRecent(id) {
        data = data.filter(el => el.id !== id);
        localStorage.setItem("recent", JSON.stringify(data));
    }

    async function addBasket(obj) {
        if (!basket.find(el => el.id == obj.id)) {
            basket.unshift(obj);
            localStorage.setItem("basket", JSON.stringify(basket));


        } else {
            setErrorAddBasket(true)
            setTimeout(() => { setErrorAddBasket(false) }, 3000)
            return
        }
    }


    let values = {
        removeMyCart,
        errorAddBasket,
        setLikeState,
        likeState,
        addBasket,
        recentStore,
        addReceting,
        addBooks,
        date,
        readData,
        removeMyRecent
    }
    return <createBooksContext.Provider value={values}>{children}</createBooksContext.Provider>
}