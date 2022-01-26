import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadWap } from '../../store/wap.action';
import { wapService } from '../../services/wap.service';

import { Loader } from '../../../assets/imgs/svg/Loader'



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

    if (!waps) return <Loader />

    return (
        <main className='collection-page'>

            {waps.length === 0 && <div className='head flex column'>
                <h1>Your collection seems empty!</h1>
                <p>Pick one of the prebuilt template websites or start from scratch <Link to="/templates">here</Link></p>
            </div>}

            {waps.length > 0 && <div className='head flex column'>
                <h1>Your collection</h1>
            </div>}

            {waps.length > 0 && <section className='collection-grid'>
                {waps.map(wap => {
                    return <div className="flex column preview" key={wap._id}>
                        <Link
                            to="/editor"
                            onClick={() => dispatch(loadWap(wap._id))}
                            className='wap-thumbnail flex column'>
                            <div>{wap.name}</div>
                            {wap.thumbnail && <img src={wap.thumbnail} alt="Website Thumbnail" />}
                        </Link>
                        <div className="btn-container flex justife-between">
                            <button className="update-remove-btn" onClick={() => onRemoveWap(wap._id)}>Remove</button>
                            <button className="update-remove-btn">update</button>
                        </div>
                    </div>
                })}
            </section>}
        </main>
    )
}