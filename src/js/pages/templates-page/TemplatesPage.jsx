import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loadWapTemplate, resetDraftWap } from '../../store/wap.action';
import { templateService } from '../../services/template.service';

import { FaPlus } from 'react-icons/fa';
import altImg from '../../../assets/imgs/collection thumbnail alternative.jpg';


export function TemplatesPage() {

    const dispatch = useDispatch();

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
                        <div className="image-container">
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
                    </Link>
                })}

            </section>
        </main>
    )
}