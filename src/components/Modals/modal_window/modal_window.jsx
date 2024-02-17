import { Alert } from "@mui/material"
import { useEffect, useState } from "react"

export default function ModalWindowMyCart({ id, setModalWindow, modalWindow }) {
    let datas = JSON.parse(localStorage.getItem('basket')) || []
    let [data, setData] = useState([])
    let [alertState, setAlertState] = useState(false)
    function readData() {
        setData((data) => datas.find(el => el.id == id))
    }
    useEffect(() => { readData() }, [modalWindow])
    function minusCount() {
        let ind = datas.findIndex(el => el.id == id);
        if (datas[ind].count >= 2) {
            datas = datas.map((el, id) => {
                if (id === ind && el.count >= 2) {
                    return { ...el, count: el.count - 1 };
                } else {
                    return el;
                }
            });
            localStorage.setItem("basket", JSON.stringify(datas));
            readData()
        } else {
            return;
        }
    }
    function plusCount() {
        let ind = datas.findIndex(el => el.id == id);
        if (ind !== -1 && datas[ind].count >= 1) {
            datas = datas.map((el, id) => {
                if (id === ind) {
                    return { ...el, count: el.count + 1 };
                } else {
                    return el;
                }
            });
            localStorage.setItem("basket", JSON.stringify(datas));
            readData()
        } else {
            return;
        }
    }
    function save() {
        setAlertState(true)
        setTimeout(() => { setAlertState(false) }, 2000)
    }
    return (
        <div className={`modal_window ${modalWindow ? " activ" : ""} d_f-a_c JC_c`}
            onClick={() => { setModalWindow(false) }} >
            <div className="modal_window_content d" onClick={e => e.stopPropagation()}>
                {data &&
                    <div div className="modal_element d" >
                        <img src={data.link} alt="" />
                        <div className="modal_element_title">
                            <h3>{data.title}</h3>
                            <h4>by {data.by}</h4>
                            <p>{data.description}</p>
                            <div className="modal_element_edit_count w-50 JC_s-b d">
                                <div className="modal_btn d JC_s-b">
                                    <button onClick={minusCount} ><ion-icon name="remove-outline"></ion-icon></button>
                                    <h3>{data.count}</h3>
                                    <button onClick={plusCount}><ion-icon name="add-outline"></ion-icon></button>
                                </div>
                                <button onClick={save} className="edit_save_btn">Save <ion-icon name="save-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                }
                <Alert className={`alert_true ${alertState ? "active" : ""} tr-02`} variant="filled" severity="success">
                    This is a filled success Alert.
                </Alert>
            </div>
        </div >
    )
}