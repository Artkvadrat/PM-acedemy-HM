import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from 'react-spinners';
import { Link, useParams, useHistory } from 'react-router-dom';

import { loadOnePhoto } from '../../ducks/onePhotoPage';
import selector from "./onePhotoPage.selector";

import styles from './onePhotoPage.module.css';

const OnePhotoPage = () => {

    const { id } = useParams();

    const history = useHistory();

    const { isLoading, photo } = useSelector(selector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadOnePhoto(id))
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
                    <h1>SINGLE PHOTO</h1>
                </div>
                <div>
                    <button onClick={() => history.goBack()} className={styles.backButton}>
                        Back
                    </button>
                </div>
                <div className={styles.contentContainer}>
                    <div>
                        <img src={photo.url} alt=""/>
                    </div>
                    <div>
                        <p>{photo.title}</p>
                        <Link to={`/album/${photo.albumId}`}>
                            Link to album
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default OnePhotoPage;