import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { TextStyles } from './TextStyles';
import { useDispatch, useSelector } from 'react-redux';
import { updateWap } from '../../../store/wap.action'
import { updateCurrElementStyle, updateCurrElementAttr } from '../../../store/editor.action'
import { ImageStyles } from './ImageStyles';
import { ButtonStyles } from './BtnStyles';
import { uploadImage } from "../../../store/editor.action"
import { SectionStyle } from './SectionStyle';




// Accordions

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

    if (!currElement) return <p>Choose element</p>

    return (
        <div className="edit-accordions-container">

            {(currElement.type === 'txt' || currElement.type === 'btn') &&
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Text</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextStyles elementStyle={currElement.style} onChangeStyle={onChangeStyle} />
                    </AccordionDetails>
                </Accordion>}
            {currElement.type === 'img' &&
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Image</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ImageStyles element={currElement} onChangeStyle={onChangeStyle} onUploadImg={onUploadImg} />
                    </AccordionDetails>
                </Accordion>}
            {currElement.type === 'btn' &&
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Button</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ButtonStyles element={currElement} onChangeStyle={onChangeStyle} onChangeAttr={onChangeAttr} />
                    </AccordionDetails>
                </Accordion>}
            {currElement.type === 'section' &&
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Section</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SectionStyle element={currElement} onChangeStyle={onChangeStyle} onChangeAttr={onChangeAttr} onUploadImg={onUploadImg} />
                    </AccordionDetails>
                </Accordion>}

        </div >
    );
}


//////////////////////////////////////////////////////////////// STYLES ///////////////////////////////////////////////////////////////////////////


// Accordion Styling

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderBottom: `1px solid gray`,
    background: 'transparent',
    color: '#eee'
}));

// Accordion Summary Styling

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#eee' }} />}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

// Accordion Details Styling

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    // pediting: '1rem 2rem',
    pediting: `${theme.spacing(2)} ${theme.spacing(4)}`,
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

// Typography Styling

const StyledTypography = styled(Typography)(({ theme }) => ({
    // pediting: '1rem 2rem',
    pediting: `${theme.spacing(2)} 0`,
}));