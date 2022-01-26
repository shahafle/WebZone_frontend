import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loadWap } from '../../store/wap.action'
import { loadingStart, loadingDone } from '../../store/system.action'
import { DynamicCmp } from '../editor-page/cmps/dynamic-cmp/DynamicCmp';
import { wapService } from '../../../js/services/wap.service';
import { Loader } from '../../../assets/imgs/svg/Loader.jsx'





export function PublishPage() {

    const { wapId } = useParams();
    const dispatch = useDispatch();
    const sectionRef = useRef();

    const [mediaClass, setMediaClass] = useState('');

    const wap = useSelector(state => state.wapModule.wap);
    const isLoading = useSelector(state => state.systemModule.isLoading);

    useEffect(() => {
        dispatch(loadWap(wapId));
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', getMediaClass);
    }, [])




    const handleResize = () => {
        setMediaClass(getMediaClass())
    }

    const getMediaClass = () => {
        if (!sectionRef.current) return;
        const editorWidth = sectionRef.current.offsetWidth;
        let classStr = ''

        if (editorWidth < 600) classStr += 'media-600 ';
        if (editorWidth < 800) classStr += 'media-800 ';
        if (editorWidth < 1000) classStr += 'media-1000 ';
        if (editorWidth < 1200) classStr += 'media-1200 ';

        return classStr
    }


    if (!wap) {
        dispatch(loadingStart())
    } else {
        dispatch(loadingDone())
    }

    if (isLoading) return <Loader />
    return (
        <div className='publish-page'>
            {wap && wap.cmps.map((cmp, i) => {
                return <DynamicCmp key={i} cmp={cmp} isPublished={true} mediaClass={mediaClass} />
            })}
            <div ref={sectionRef}></div>
        </div>
    )
}
