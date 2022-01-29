import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loadWapTemplate, resetDraftWap } from '../../store/wap.action';
import { templateService } from '../../services/template.service';

import altImg from '../../../assets/imgs/collection thumbnail alternative.jpg';
import { FiEdit2, FiEye } from 'react-icons/fi';


export function TemplatesPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    const wapTemplates = templateService.getWapTemplates();

    return (
        <main className="templates-page">
            <div className="hero flex column justify-center align-center">
                <h1>Designed Templates</h1>
                <p>Pick one of the prebuilt template websites below or start from scratch</p>
                <hr />
            </div>

            <section className="templates-grid">

                <Link to="/editor" className="wrapper flex column" onClick={() => dispatch(resetDraftWap())}>
                    <div className="new-proj">
                        <div className="image-container new">
                            <img src={altImg} alt="" />
                        </div>
                    </div>
                    <p>New Project</p>
                </Link>

                {wapTemplates.map((wapTemplate, idx) => {
                    return <Link key={wapTemplate._id + idx}
                        to="/editor"
                        onClick={() => dispatch(loadWapTemplate(wapTemplate._id))}
                        className="wrapper flex column">
                        <div className="image-container">
                            <img src={wapTemplate.thumbnail} alt="Template Thumbnail" />
                        </div>
                        <p>{wapTemplate.name}</p>

                        {/* <div className="actions flex align-center justify-center">
                            <FiEye className="preview-icon" title="Preview"/>
                            <FiEdit2 className="edit-icon" title="Edit"/>
                        </div> */}
                    </Link>
                })}

            </section>
        </main>
    )
}