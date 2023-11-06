import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
function SocialMedia() {
    return(<div className="socialnetwork">
            <a href="https://www.instagram.com/marcomaraglino" target="_blank" className="instagram" rel="noreferrer"><i className="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/marcomaraglino5/" target="_blank" className="linkedin" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
            <a href="https://github.com/marcomaraglino" target="_blank" className="github" rel="noreferrer"><i className="fa fa-github"></i></a>
        </div>
    )
}
root.render(
    <>
    <SocialMedia></SocialMedia>
      <App/>
        </>
);