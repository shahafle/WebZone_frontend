import * as React from 'react';
import { useMemo, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { useDispatch, useSelector } from 'react-redux';
import { addElement } from '../../../store/wap.action';
import { wapService } from '../../../services/wap.service'






// Accordions

export function AddAccordion() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const templateSections = wapService.getTemplateSections()
    const sectionCategories = wapService.getSectionsCategories()
    // const wap = useSelector(state => state.wapModule.wap)
    const dispatch = useDispatch()



    const onAddElement = (section) => {
        const elementToAdd = section
        dispatch(addElement(elementToAdd))
    }


    return (
        <div>
            {sectionCategories.map((category, i) => {
                return <Accordion key={category} expanded={expanded === `panel${i + 1}`} onChange={handleChange(`panel${i + 1}`)}>
                    <AccordionSummary aria-controls={`panel${i + 1}d-content`} id={`panel${i + 1}d-header`}>
                        <Typography style={{ textTransform: 'capitalize' }}>{category.substring(4, category.length)}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {templateSections.filter(section => section.category === category).map(section => {
                            return <div key={section.id}>
                                <StyledTypography onClick={() => onAddElement(section)}>{section.name}</StyledTypography>
                            </div>
                        })
                        }
                    </AccordionDetails>
                </Accordion>
            })
            }
        </div>
    );
}


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
    // padding: '1rem 2rem',
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

// Typography Styling

const StyledTypography = styled(Typography)(({ theme }) => ({
    // padding: '1rem 2rem',
    padding: `${theme.spacing(2)} 0`,
}));

