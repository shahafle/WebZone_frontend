import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadWap } from '../../store/wap.action';
import { wapService } from '../../services/wap.service';

import { Loader } from '../../cmps/Loader'
import { FaTimes, FaEdit } from 'react-icons/fa';



export function CollectionPage() {

    const dispatch = useDispatch();

    const [waps, setWaps] = useState(null);

    useEffect(() => {
        async function loadWaps() {
            const waps = await wapService.query();
            setWaps(waps);
        }

        loadWaps();
    }, [])

    const onRemoveWap = async (wapId) => {
        await wapService.remove(wapId);
        const waps = await wapService.query();
        setWaps(waps);
    }

    if (!waps) return <Loader color={'#1b1b1b'} />

    return (
        <main className="collection-page">

            {waps.length === 0 && <div className="head flex column">
                <h1>Your collection seems empty!</h1>
                <p>Pick one of the prebuilt template websites or start from scratch <Link to="/templates">here</Link></p>
            </div>}

            {waps.length > 0 && <div className="head flex column">
                <h1>Your collection</h1>
            </div>}

            {waps.length > 0 && <section className="collection-grid">
                {waps.map(wap => {
                    return <div className="preview" key={wap._id}>
                        <div className="flex justify-between align-center">
                            <p>{wap.name}</p>
                            <button className="remove-btn flex" onClick={() => onRemoveWap(wap._id)}><FaTimes /></button>
                        </div>
                        <Link
                            to="/editor"
                            onClick={() => dispatch(loadWap(wap._id))}
                            className="wap-thumbnail">
                            {wap.thumbnail && <img src={wap.thumbnail} alt="Website Thumbnail" onError={({ target }) => target.src = 'http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643291756/phjcgifmh2m2f52n0itr.jpg'} />}
                            <FaEdit className="edit-icon" />
                        </Link>
                    </div>
                })}
            </section>}
        </main>
    )
}