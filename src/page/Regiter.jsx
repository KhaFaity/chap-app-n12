import React, { useState } from "react";
import Add from "../img/defaultAvatar.png";
import { useNavigate, Link } from "react-router-dom";
import "../style.scss"
import "./form.scss"
import {createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";
import { auth, db, storage} from "../firebase/config";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

const Register = () => {
  const [err, setErr ] = useState(false);
  const navitive = useNavigate();

  // const {email, password} = this.state;
  // const send_EmailVerification =() => {
  //   auth.createUserWithEmailAndPassword( email.trim() , password)
  //     .then((userCredential)=>{
  //         // send verification mail.
  //       userCredential.user.sendEmailVerification();
  //       auth.signOut();
  //       alert("Email sent");
  //     })
  //     .catch(alert);
  // }
  // function send_EmailVerification(){
  //   var user = auth2.currentUser;
  //   user = auth2.sendEmailVerification.then(function(){

  //   }).catch(function(errol){

  //   });
  // }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

try {
  const res = await createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) =>{
                      //send verification mail.
                      userCredential.user.sendEmailVerification();
                      auth.signOut();
                      alert("Email sent");
                    })
                    .catch(alert);

  const storageRef = ref(storage, displayName);

  const uploadTask = uploadBytesResumable(storageRef, file);
  await res.user.updateProfile({
    displayName: "user"
  })
  await res.user.sendEmailVerification()


// Register three observers:

uploadTask.on(
  (errol) => {
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
         photoURL: downloadURL,
       });

       await setDoc(doc(db, "userChats", res.user.uid), {});
       navitive("/");
    });
  }
);

} catch (err) {
  setErr(true);
}
  }
  
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Tên người dùng" />
          <input type="email" placeholder="email"   /> 
          {/* onChangeText={(email) => this.setState({email})} */}
          <input type="password" placeholder="Mật khẩu"   />
          {/* onChangeText={(password) => this.setState({password})} */}
          {/* <input type="password" placeholder="Nhập lại mật khẩu" /> */}
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          {/* onClick={send_EmailVerification()} */}
          <button >Đăng ký</button> 
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
