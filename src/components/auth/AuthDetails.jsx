import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";
import './AuthDetails.css';

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  function userSignOut() {
    signOut(auth)
      .then(() => console.log("success"))
      .catch((e) => console.log(e));
  }

  function gotoMainPage() {
    navigate("/mainpage");
  }

  return (
    <div className="auth-details-page">
      {authUser ? (
        <div className="auth-info">
          <p className="auth-text">{`Signed in as ${authUser.email}`}</p>
          <button className="btn" onClick={userSignOut}>Sign Out</button>
          <button className="btn" onClick={gotoMainPage}>Main page</button>
        </div>
      ) : (
        <p className="signed-out-message">Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
