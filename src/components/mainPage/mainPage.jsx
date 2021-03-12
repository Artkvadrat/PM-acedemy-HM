import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { ClipLoader } from 'react-spinners';
import { Link } from "react-router-dom";

import { loadPhotos, unmountMainPage } from "../../ducks/mainPage";
import selector from "./mainPage.selector";

import styles from './mainPage.module.css';

const MainPage = () => {

    const dispatch = useDispatch();

    const { isLoading, photos } = useSelector(selector);

    useEffect(() => {
        dispatch(loadPhotos());
        return () => dispatch(unmountMainPage());
    }, [])

    if (isLoading) {
        return (
            <div className={styles.loaderContainer}>
                <ClipLoader loading={true} color={'#2a48ff'} size={50}/>
            </div>
            )
    } else {
        return (
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <h1>PHOTOS</h1>
                </div>
                <ul className={styles.imagesContainer}>
                    {photos ? photos.map( (item) => {
                        return (
                            <li key={item.id}>
                                <Link to={`/photo/${item.id}`}>
                                    <img src={item.thumbnailUrl} alt={item.title}/>
                                </Link>
                            </li>
                        )
                    } ) : ''}
                </ul>


                <button onClick={() => dispatch(loadPhotos())}>
                    Load more
                </button>
            </div>
        )

    }
}

export default MainPage;