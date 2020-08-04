import React, { useState } from 'react'
import FacbookSignin from 'react-facebook-login';

const FacbookLogin = () => {
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');

    const responseFacebook = response => {
        setData(response);
        setPicture(response.picture.data.url)
        if (response.accessToken) {
            setLogin(true);
        } else{
            setLogin(false);
        }
    };


    return (
        <div className="container">
           <div className="card" style={{width: '400px'}}>
               <div className="card-header">
                {!login && 
                <FacbookSignin 
                appId="2735183926764185"
                autoLoad={false}
                fields="name,email,picture"
                scope="public_profile,user_friends"
                callback={responseFacebook}
                icon="fa-facebook" />
                }
                {login &&
                (<img src={picture} className="rounded-circle" alt="user profile image" />)
                }
               </div>
               {login && 
               (
                <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
               <p>{data.email}</p>
{/*                <button type="button" className="btn" onClick={(e) => logout(e)} value="">Logout</button>
 */}           </div>
               )
               }
               
           </div> 
        </div>
    )
}

export default FacbookLogin;