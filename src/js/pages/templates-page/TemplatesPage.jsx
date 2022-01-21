import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getWapById } from '../../store/wap.action';

export function TemplatesPage() {

    const dispatch = useDispatch();


    return (
        <Link to="/editor"><button onClick={() => dispatch(getWapById('dsg3l4j6lkdsjglkjsd523'))}>LOAD TEMPLATE 2</button></Link>
    )
}