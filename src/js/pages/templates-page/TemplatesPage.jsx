import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getWapById } from '../../store/wap.action';

export function TemplatesPage() {

    const dispatch = useDispatch();


    return (
        <>
            <div>
                <Link to="/editor"><button onClick={() => dispatch(getWapById('5e28393890dd7201a06d4e44'))}>LOAD TEMPLATE 1</button></Link>
            </div>
            <div>
                <Link to="/editor"><button onClick={() => dispatch(getWapById('dsg3l4j6lkdsjglkjsd523'))}>LOAD TEMPLATE 2</button></Link>
            </div>
            <div>
                <Link to="/editor"><button onClick={() => dispatch(getWapById('5e19d93890dd7201a06d32d4'))}>LOAD TEMPLATE 3</button></Link>
            </div>
        </>
    )
}