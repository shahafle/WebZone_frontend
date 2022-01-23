import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getWapById, removeDraftWap } from '../../store/wap.action';

import { wapTemplate_1 } from '../../../templates/wap-template-1'
import { wapTemplate_2 } from '../../../templates/wap-template-2'

export function TemplatesPage() {

    const dispatch = useDispatch();


    const templates = [wapTemplate_1, wapTemplate_2];

    return (
        <main className='templates-page'>
            <div className='head flex column'>
                <h1>Template websites</h1>
                {/* <p>Pick one of the templates below and designed by top designers</p> */}
                <p>Pick one of the prebuilt template websites below or start from scratch.</p>
            </div>

            <section className='templates-grid'>


                <Link className='wap-template-thumbnail flex column'
                    to="/editor" onClick={() => dispatch(removeDraftWap())}>
                    <div>Start a new project</div>
                    <div>
                        <p>+</p>
                    </div>
                </Link>

                {templates.map(template => {
                    return <Link key={template._id}
                        to="/editor"
                        onClick={() => dispatch(getWapById(template._id))}
                        className='wap-template-thumbnail flex column'>
                        <div>{template.name}</div>
                        <img src={template.thumbnail} alt="template thumbnail" />
                    </Link>
                })}
            </section>

        </main>
        // <>
        //     <div>
        //         <Link to="/editor"><button onClick={() => dispatch(getWapById('5e28393890dd7201a06d4e44'))}>LOAD TEMPLATE 1</button></Link>
        //     </div>
        //     <div>
        //         <Link to="/editor"><button onClick={() => dispatch(getWapById('dsg3l4j6lkdsjglkjsd523'))}>LOAD TEMPLATE 2</button></Link>
        //     </div>
        //     {/* <div>
        //         <Link to="/editor"><button onClick={() => dispatch(getWapById('5e19d93890dd7201a06d32d4'))}>LOAD TEMPLATE 3</button></Link>
        //     </div> */}
        // </>
    )
}