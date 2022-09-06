import React, {useEffect} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import LogOut from '../BtnsLogin/LogOut';
import LoginDetailBtn from '../BtnsLogin/LoginDetailBtn.jsx';
import './profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, createUser } from '../../redux/reducers/cryptoRed';

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  const { usuarios } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(user.email));
  }, [dispatch, user.email]);

  return (
    isAuthenticated && (
        <div className="profile-nav dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                <img className="img-profile-nav" src={usuarios.picture||user.picture} alt={user.nickname}/>
          </a>
          <ul class="dropdown-menu text-center p-0 justify-content-center ">
            <div className='modal_drop'>
                <div className='img-desp'>
                <img className="img-profile-nav-desp" src={usuarios.picture} alt={user.nickname}/>
                </div>
                <h6>{usuarios.nickname}</h6>
                <p className='email'>{user.email}</p>
            </div>
            <div className='justify-content-center d-flex m-2 gap-2 btns-profile'>
                <LogOut/>
                <LoginDetailBtn/>
            </div>

          </ul>
        </div>
    )
  )
}