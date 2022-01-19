import * as React from 'react';
import { useMemo, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { useDispatch, useSelector } from 'react-redux';
import { addWapEl } from '../../../store/wap-el.action'
import { updateCurrWapEl } from '../../../store/editor.action'
import { wapElService } from '../../../services/wap-el.service'





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



// Accordions

export function AddAccordion() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const templateSections = wapElService.getTemplateSections()
    const sectionCategories = wapElService.getSectionsCategories()
    const wap = useSelector(state => state.wapElModule.wapEl)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(updateWapEl(wap, currElement))
    // }, [currElement])




    const onAddWapEl = (section) => {
        console.log(section);
        const elementToAdd = section

        dispatch(addWapEl(elementToAdd))
    }


    return (
        <div>
            {sectionCategories.map((category, i) => {
                return <Accordion key={category} expanded={expanded === `panel${i + 1}`} onChange={handleChange(`panel${i + 1}`)}>
                    <AccordionSummary aria-controls={`panel${i + 1}d-content`} id={`panel${i + 1}d-header`}>
                        <Typography>{category.substring(4, category.length)}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {templateSections.filter(section => section.category === category).map(section => {
                            return <div key={section.id}>
                                <StyledTypography onClick={() => onAddWapEl(section)}>{section.name}</StyledTypography>
                            </div>
                        })
                        }
                    </AccordionDetails>
                </Accordion>
            })
            }











            {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Sections</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {templateSections.map(section => {
                        return <div key={section.id}>
                            <hr />
                            <StyledTypography onClick={() => onAddWapEl(section)}>{section.name}</StyledTypography>
                        </div>
                    })
                    }
                </AccordionDetails>
            </Accordion> */}



            {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Landing Sections</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Template Item #1</Typography>
                    <Typography>Template Item #2</Typography>
                    <Typography>Template Item #3</Typography>
                    <Typography>Template Item #4</Typography>
                    <Typography>Template Item #5</Typography>
                </AccordionDetails>
            </Accordion>



            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Cards</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Template Item #1</Typography>
                    <Typography>Template Item #2</Typography>
                    <Typography>Template Item #3</Typography>
                    <Typography>Template Item #4</Typography>
                    <Typography>Template Item #5</Typography>
                </AccordionDetails>
            </Accordion>



            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Galleries</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Template Item #1</Typography>
                    <Typography>Template Item #2</Typography>
                    <Typography>Template Item #3</Typography>
                    <Typography>Template Item #4</Typography>
                    <Typography>Template Item #5</Typography>
                </AccordionDetails>
            </Accordion>



            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Blogs</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Template Item #1</Typography>
                    <Typography>Template Item #2</Typography>
                    <Typography>Template Item #3</Typography>
                    <Typography>Template Item #4</Typography>
                    <Typography>Template Item #5</Typography>
                </AccordionDetails>
            </Accordion>



            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Footers</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Template Item #1</Typography>
                    <Typography>Template Item #2</Typography>
                    <Typography>Template Item #3</Typography>
                    <Typography>Template Item #4</Typography>
                    <Typography>Template Item #5</Typography>
                </AccordionDetails>
            </Accordion> */}

        </div>
    );
}