import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { ClipLoader } from 'react-spinners';
import { Link, useParams, useHistory } from "react-router-dom";

import { loadPhotos, loadUser, unmountAlbumPage } from '../../ducks/albumPage';
import selector from "./albumPage.selector";

import styles from "./albumPage.module.css";

const AlbumPage = () => {

    const { id } = useParams();
    const history = useHistory();

    const dispatch = useDispatch();

    const { isLoading, photos, user } = useSelector(selector);

    useEffect(() => {
        dispatch(loadPhotos(id));
        dispatch(loadUser(id));
        return () => dispatch(unmountAlbumPage());
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
                    <h1>{`ALBUM`}</h1>
                </div>
                <div>
                    <button onClick={() => history.goBack()} className={styles.backButton}>
                        Back
                    </button>
                </div>
                <div className={styles.userInfoContainer}>
                    <p>{user.name}</p>
                    <p> - </p>
                    <a href={`mailto: ${user.email}`}>{user.email}</a>
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


                <button onClick={() => dispatch(loadPhotos(id))} className={styles.loadMoreButton}>
                    Load more
                </button>
            </div>
        )
    }
}

export default AlbumPage;