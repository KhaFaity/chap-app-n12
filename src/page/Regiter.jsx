import React, { useState } from "react";
import Add from "../img/defaultAvatar.png";
import { useNavigate, Link } from "react-router-dom";
import "../style.scss"
import "./form.scss"
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage} from "../firebase/config";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc } from "firebase/firestore";


const Register = () => {
  const [err, setErr ] = useState(false);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

try {
  const res = await createUserWithEmailAndPassword(auth, email, password)


const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:

uploadTask.on(
  (error) => {
    setErr(true)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
       await updateProfile(res.user,{
        displayName,
        photoURL: downloadURL
       });
       await setDoc(doc(db, "user", res.user.uid), {
        uid: res.user.uid,
         displayName,
         email,
         photoURL: downloadURL
       });
    });
  }
);

} catch (error) {
  setErr(true);
}
  }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none"}} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Thêm ảnh đại diện</span>
          </label>
          <button>Đăng ký</button> 
          {err && <span>Đăng ký thất bại</span>}
        </form>
        <p>
          Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
