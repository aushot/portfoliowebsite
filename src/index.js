import React, { Component }  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
function SocialMedia() {
    return(<div className="socialnetwork">
            <a href="https://www.instagram.com" className="instagram"><i className="fa fa-instagram"></i></a>
            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
            <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
            <a href="#" className="github"><i className="fa fa-github"></i></a>
        </div>
    )
}
root.render(
    <>
    <SocialMedia></SocialMedia>
      <App/>
        </>
);