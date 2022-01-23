import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { TextStyles } from './TextStyles';
import { useDispatch, useSelector } from 'react-redux';
import { updateWap, removeElement, duplicateElement } from '../../../store/wap.action'
import { updateCurrElementStyle, updateCurrElementAttr } from '../../../store/editor.action'
import { ImageStyles } from './ImageStyles';
import { ButtonStyles } from './BtnStyles';
import { uploadImage } from "../../../store/editor.action"
import { SectionStyle } from './SectionStyle';



export function EditAccordion() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const currElement = useSelector(state => state.editorModule.currElement)
    const wap = useSelector(state => state.wapModule.wap)
    const dispatch = useDispatch()

    useEffect(() => {
        if (currElement) {
            dispatch(updateWap(wap, currElement))
        }
    }, [currElement])

    const onChangeStyle = ({ target }) => {
        const style = {
            styleName: target.name,
            styleValue: target.value
        }
        dispatch(updateCurrElementStyle(currElement, style))
    }
    const onChangeColor = (ev, name) => {
        const style = {
            styleName: name,
            styleValue: ev.hex
        }
        dispatch(updateCurrElementStyle(currElement, style))
    }

    const onChangeAttr = ({ target }) => {
        const attr = {
            attrName: target.name,
            attrValue: target.value
        }
        dispatch(updateCurrElementAttr(currElement, attr))
    }

    const onUploadImg = (ev, isBackground) => {
        dispatch(uploadImage(ev, currElement, isBackground))
    }

    const onRemoveElement = () => {
        dispatch(removeElement(wap, currElement));
    }

    const onDuplicateElement = () => {
        dispatch(duplicateElement(wap, currElement));
    }

    const onRemoveElementByKey = ({ key }) => {
        if (key === 'Delete') onRemoveElement();
    }

    useEffect(() => {
        window.addEventListener('keydown', onRemoveElementByKey);

        return () => window.removeEventListener('keydown', onRemoveElementByKey);

    }, [currElement])


    if (!currElement) return <p style={{ padding: '20px', marginTop: '50px', textAlign: 'center' }}>Choose an Item</p>

    return (
        <div className="accordions-container">

            {(currElement.type === 'txt' || currElement.type === 'btn') &&
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <SummaryTypography>Text</SummaryTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextStyles onChangeColor={onChangeColor} elementStyle={currElement.style} onChangeStyle={onChangeStyle} />
                    </AccordionDetails>
                </Accordion>}
            {currElement.type === 'img' &&
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <SummaryTypography>Image</SummaryTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ImageStyles element={currElement} onChangeStyle={onChangeStyle} onUploadImg={onUploadImg} onChangeAttr={onChangeAttr} />
                    </AccordionDetails>
                </Accordion>}
            {currElement.type === 'btn' &&
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <SummaryTypography>Button</SummaryTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ButtonStyles element={currElement} onChangeStyle={onChangeStyle} onChangeAttr={onChangeAttr} />
                    </AccordionDetails>
                </Accordion>}
            {currElement.type === 'container' &&
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Section</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SectionStyle element={currElement} onChangeStyle={onChangeStyle} onChangeAttr={onChangeAttr} onUploadImg={onUploadImg} />
                    </AccordionDetails>
                </Accordion>}

            <div className='other-action-container flex'>
                <button className="remove-el-btn" onClick={onRemoveElement}>Remove Item</button>
                <button className="remove-el-btn" onClick={onDuplicateElement}>Duplicate Item</button>
            </div>
        </div >
    );
}


//////////////////////////////////////////////////////////////// STYLES ///////////////////////////////////////////////////////////////////////////


// Accordion Styling

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderBottom: '1px solid rgba(120, 120, 120, .7)',
    background: 'transparent',
}));

// Accordion Summary Styling

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.1rem', color: '#eee' }} />}
        expandIcon={<ArrowRightIcon sx={{ fontSize: '1.8rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        margin: '10px',
        padding: '5px 0'
    },
}));

// Accordion Details Styling

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: '10px 25px',
    borderTop: '1px solid rgba(60, 60, 60, .5)',
}));

// Typography Styling

const SummaryTypography = styled(Typography)(({ theme }) => ({
    padding: '5px 0',
    textTransform: 'capitalize',
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    // fontWeight: 700
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    padding: `${theme.spacing(1)} 0`,
}));