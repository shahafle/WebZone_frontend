import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadWap } from '../../store/wap.action';
import { wapService } from '../../services/wap.service';

import { Loader } from '../../cmps/Loader'
import { FaTimes, FaEdit } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';
import { isRegExp } from 'lodash';



export function CollectionPage() {

    const dispatch = useDispatch();

    const [waps, setWaps] = useState(null);

    useEffect(() => {
        loadWaps();

    }, [])

    async function loadWaps() {
        try {
            const waps = await wapService.query();
            setWaps(waps);
        } catch (err) {
            console.log('caught error in front');
            setWaps([])
        }
    }

    const onRemoveWap = async (wapId) => {
        await wapService.remove(wapId);
        const waps = await wapService.query();
        setWaps(waps);
    }
  
     const openPublish = (wapId) => {
        window.open(`/publish/${wapId}`, "_blank");
     }


    if (!waps) return <Loader color={'#1b1b1b'} />

    return (
        <main className="collection-page">

            <div className="hero flex column justify-center align-center">
                {waps.length === 0 && <>
                    <h1>Your collection seems empty!</h1>
                    <p>Pick one of the prebuilt template websites or start from scratch <Link to="/templates">here</Link></p>
                </>}

                {waps.length > 0 && <>
                    <h1>Your Collection</h1>
                    <p>You may edit / publish / remove any project of yours.</p>
                </>}
            </div>


            {waps.length > 0 && <section className="collection-grid">
                {waps.map((wap, idx) => {
                    return <div className="preview" key={wap._id}>
                        <div>
                            <p>{wap.name}</p>

                            <div className="menu flex column">
                                <label className="menu-btn align-self-end" htmlFor={`toggle-menu-${idx}`}><HiDotsVertical /></label>
                                <input type="checkbox" id={`toggle-menu-${idx}`} hidden />
                                <ul className="clean-list">
                                    <Link to="/editor" onClick={() => dispatch(loadWap(wap._id))}><li>Edit</li></Link>
                                    <li onClick={() => openPublish(wap._id)}>Publish</li>
                                    <li onClick={() => onRemoveWap(wap._id)}>Remove</li>
                                </ul>
                            </div>

                            {/* <button className="remove-btn flex" onClick={() => onRemoveWap(wap._id)}><FaTimes /></button> */}
                        </div>
                        <Link
                            to="/editor"
                            onClick={() => dispatch(loadWap(wap._id))}
                            className="wap-thumbnail">
                            {wap.thumbnail && <img src={wap.thumbnail} alt="Website Thumbnail" onError={({ target }) => target.src = 'http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643291756/phjcgifmh2m2f52n0itr.jpg'} />}
                            {/* <FaEdit className="edit-icon" /> */}
                        </Link>
                    </div>
                })}
            </section>}
        </main>
    )
}