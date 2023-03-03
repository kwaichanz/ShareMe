import React, { useState, useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Routes, Route } from 'react-router-dom';

import { Sidebar, UserProfile } from '../components';
import Pins from './Pins';
import { userQuery } from '../utils/data';
import { client } from '../client';
import logo from '../assets/logo.png';

const Home = () => {

    const [toggleSideBar, setToggleSideBar] = useState(false);
    const [user, setUser] = useState(null);
    const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    console.log('userInfo: ', userInfo);

    useEffect(() => {
        const query = userQuery(userInfo?.sub);
        console.log('query: ', query);
        client.fetch(query)
            .then((data) => {
                console.log('data: ', data)
                setUser(data[0]);
                console.log('user: ', user)
            })
            .catch(err => console.log('error: ', err))
    }, []);


    return (
        <div className='flex bg-gray-500 md:flex-row flex-col h-screen transition-height duration-75 ease-out'>
            <div className="hidden md:flex h-screen flex-initial">
                <Sidebar />
            </div>
            <div className='flex md:hidden flex-row'>
                <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSideBar(false)} />
                <Link to="/">
                    <img src={logo} alt="logo" className='w-28' />
                </Link>
                <Link to={`user-profile/${user?._id}`}>
                    <img src={user?.image} alt="logo" className='w-28' />
                </Link>
            </div>
        </div>
    )
}

export default Home