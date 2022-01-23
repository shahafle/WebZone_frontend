import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getWapById } from '../../store/wap.action';
import { wapService } from '../../services/wap.service';


export function CollectionPage() {

    const dispatch = useDispatch();

    const [waps, setWaps] = useState(null);

    useEffect(async () => {
        const waps = await wapService.query();
        setWaps(waps);
    }, [])

    const onRemoveWap = async (wapId) => {
        await wapService.remove(wapId);
        const waps = await wapService.query();
        setWaps(waps);
    }

    if (!waps) return <div>Loading...</div>

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
                    return <div key={wap._id}>
                        <Link 
                            to="/editor"
                            onClick={() => dispatch(getWapById(wap._id))}
                            className='wap-thumbnail flex column'>
                            <div>{wap.name}</div>
                            <img src={wap.thumbnail} alt="Website Thumbnail" />
                        </Link>
                        <button onClick={() => onRemoveWap(wap._id)}>Remove Wap</button>
                    </div>
                })}
            </section>}
        </main>
    )
}