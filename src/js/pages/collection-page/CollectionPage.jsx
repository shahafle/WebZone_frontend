import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { UserModal } from '../../cmps/UserModal';

import { wapService } from '../../services/wap.service';
import { loadWap } from '../../store/wap.action';
import { shouldShowUserModal } from '../../store/system.action';
import { setUserMsg } from '../../store/user.action';

import { Loader } from '../../cmps/Loader'
import { HiDotsVertical } from 'react-icons/hi';



export function CollectionPage() {

    const [waps, setWaps] = useState(null);
    const [selectedWapId, setSelectedWapId] = useState('');

    const { isUserModalShown } = useSelector(state => state.systemModule);
    const { user } = useSelector(state => state.userModule);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) setWaps([]);
        loadWaps();
    }, [user])

    async function loadWaps() {
        try {
            const waps = await wapService.query();
            setWaps(waps);
        } catch (err) {
            console.log('caught error in front');
            setWaps([])
        }
    }

    const onRemoveWap = async () => {
        try {
            await wapService.remove(selectedWapId);
            const filteredWaps = waps.filter(wap => wap._id !== selectedWapId);
            setWaps(filteredWaps);
            dispatch(shouldShowUserModal(false));
            dispatch(setUserMsg({ type: 'success', txt: 'Deleted!', timer: 3000 }));
        } catch (err) {

        }
    }

    const onSetWapToRemove = (wapId) => {
        setSelectedWapId(wapId);
        dispatch(shouldShowUserModal(true));
    }

    const openPublish = (wapId) => {
        window.open(`/publish/${wapId}`, "_blank");
    }


    if (!waps) return <Loader color={'#1b1b1b'} />

    return (
        <main className="collection-page">

            <div className="hero flex column justify-center align-center">
                {!user && 
                <p>You must login to see your collection.</p>}

                {waps.length === 0 && user && <>
                    <h1>Your collection seems empty!</h1>
                    <p>Pick one of the prebuilt template websites or start from scratch <Link to="/templates">here</Link></p>
                </>}

                {waps.length > 0 && <>
                    <h1>Your Collection</h1>
                    <p>You may edit / publish / remove any project of yours.</p>
                </>}
            </div>


            {(waps.length > 0 && user) && <section className="collection-grid">
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
                                    <li onClick={() => onSetWapToRemove(wap._id)}>Remove</li>
                                </ul>
                            </div>

                        </div>
                        <Link
                            to="/editor"
                            onClick={() => dispatch(loadWap(wap._id))}
                            className="wap-thumbnail">
                            {wap.thumbnail && <img src={wap.thumbnail} alt="Website Thumbnail" onError={({ target }) => target.src = 'http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643291756/phjcgifmh2m2f52n0itr.jpg'} />}
                        </Link>
                    </div>
                })}
            </section>}

            {isUserModalShown && <UserModal
                mainTxt={'Are you sure ?'}
                subTxt={'This action cannot be undone !'}
                type={'confirm'}
                btnTxt_1={'Yes'}
                btnTxtCancel={'Cancel'}
                handleCb_1={onRemoveWap}
                handleCbCancel={() => dispatch(shouldShowUserModal(false))}
            />}

        </main>
    )
}