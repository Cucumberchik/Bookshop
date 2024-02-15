import React, { useState } from 'react';
import { useBooks } from '../../../context/addBooks';
// import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
const Admin = () => {
  const [link, setLink] = useState()
  const [title, setTitle] = useState()
  const [by, setBy] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState('')

  const [type, setType] = useState('')
  const [types, btnTypes] = useState(false)
  const [categorie, setCotegorie] = useState(false)

  let { addBooks } = useBooks()
  function addBook() {
    let obj = {
      link,
      title,
      by,
      description,
      price,
      type,
      categorie
    }
    if (link && type && title && by && description && price) {
      addBooks(obj)
      setLink("")
      setTitle('')
      setBy("")
      setDescription("")
      setPrice("")
      setType('')
      setCotegorie("")
    }
    else {
      alert("error")
    }
  }

  let number = price.replace(/[a-zA-Z]/g, '')

  let typing = ["Autographed Books", "Sci-Fi", "For kids", "For teenagers", "Finance", "Romantic", "Psychology", "Self-Improvement", "Educational", "Literature", "Religion"]
  return (

    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="admin_input_block">
            <input type="text" onChange={(e) => { setLink(e.target.value) }} value={link} placeholder='img_book' />
            <input type="text" onChange={(e) => { setTitle(e.target.value) }} value={title} placeholder='Name_book' />
            <input type="text" onChange={(e) => { setBy(e.target.value) }} value={by} placeholder='The author_book' />
            <input type="text" onChange={(e) => { setDescription(e.target.value) }} value={description} placeholder='Description_book' />
            <input type="text" onChange={(e) => { setPrice(e.target.value) }} value={number} placeholder='Price_book' />
            <div className="btns">
              <h3 onClick={() => btnTypes(!types)} className={`c-p  btnType d_f-a_c`}>Type <span className={`${types ? "rotet" : ""}`}> <IoIosArrowDown /></span></h3>
              
              <div className="btn_ad">
                <button onClick={addBook}>Add to Card</button>
                {/* <div className="count">
                  <button>-</button>
                  {/* <h1>{count}</h1> */}
                {/*<button>+</button>
                </div> */}
              </div>
            </div>
            <div style={{
              display: types ? "flex" : "none"
            }} className="type">
              {typing.map(el => (
                <p onClick={() => setType(el)}> {type == el ? <FaCircle /> : <FaRegCircle />} {el} </p>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>


  )
};

export default Admin;

{/* <FaCircle /> */ }