import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loadWap } from '../../store/wap.action'
import { DynamicCmp } from '../editor-page/cmps/dynamic-cmp/DynamicCmp';
import { wapService } from '../../../js/services/wap.service';
import { Loader } from '../../../assets/imgs/svg/Loader.jsx'





export function PublishPage() {

    const { wapId } = useParams();
    const dispatch = useDispatch();

    const wap = useSelector(state => state.wapModule.wap);

    useEffect(() => {
        dispatch(loadWap(wapId));
    }, [])


    if (!wap) return <Loader />

    return (
        <div>
            {wap && wap.cmps.map((cmp, i) => {
                return <DynamicCmp key={i} cmp={cmp} isPublished={true} />
            })}
        </div>
    )
}
