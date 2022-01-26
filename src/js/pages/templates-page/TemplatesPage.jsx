import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loadWapTemplate, resetDraftWap } from '../../store/wap.action';
import { templateService } from '../../services/template.service';


export function TemplatesPage() {

    const dispatch = useDispatch();

    const wapTemplates = templateService.getWapTemplates();

    return (
        <main className='templates-page'>
            <div className='head flex column'>
                <h1>Template websites</h1>
                <p>Pick one of the prebuilt template websites below or start from scratch.</p>
            </div>

            <section className='templates-grid'>
                <Link className='wap-template-thumbnail flex column'
                    to="/editor" onClick={() => dispatch(resetDraftWap())}>
                    <div>Start a new project</div>
                    <div>
                        <p>+</p>
                    </div>
                </Link>

                {wapTemplates.map(wapTemplate => {
                    return <Link key={wapTemplate._id}
                        to="/editor"
                        onClick={() => dispatch(loadWapTemplate(wapTemplate._id))}
                        className='wap-template-thumbnail flex column'>
                        <div>{wapTemplate.name}</div>
                        <img src={wapTemplate.thumbnail} alt="template thumbnail" />
                    </Link>
                })}
            </section>
        </main>
    )
}