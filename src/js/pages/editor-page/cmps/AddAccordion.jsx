import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addElement } from '../../../store/wap.action';
import { wapService } from '../../../services/wap.service';

import { Droppable, Draggable } from 'react-beautiful-dnd';

// ACCORDION
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { templateService } from '../../../services/template.service';
import { PersonalVideoRounded } from '@mui/icons-material';
// ACCORDION


export function AddAccordion() {

    const dispatch = useDispatch();

    const [expanded, setExpanded] = useState('panel1');
    const [templateSections, setTemplateSections] = useState([]);
    const [sectionCategories, setSectionCategories] = useState([]);
    // const wap = useSelector(state => state.wapModule.wap);

    useEffect(() => {
        setTemplateSections(templateService.getTemplateSections())
        setSectionCategories(templateService.getSectionsCategories())

    }, [])

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const onAddElement = (elementToAdd) => {
        dispatch(addElement(elementToAdd));
    }

    return (<Droppable
        isDropDisabled={true}
        droppableId='sidebar'>
        {provided => {
            return <div {...provided.droppableProps}
                ref={provided.innerRef}
                className="add-accordion">

                {sectionCategories.map((category, i) => {
                    return <Accordion key={category} expanded={expanded === `panel${i + 1}`} onChange={handleChange(`panel${i + 1}`)}>

                        {/* Accordion title */}
                        <AccordionSummary aria-controls={`panel${i + 1}d-content`} id={`panel${i + 1}d-header`}>
                            <SummaryTypography>{category.substring(4, category.length)}</SummaryTypography>
                        </AccordionSummary>



                        {/* Accordion items */}
                        <AccordionDetails>
                            {templateSections.filter(section => section.category === category).map((section, idx) => {
                                return <Draggable key={section.id} draggableId={section.id} index={idx}>
                                    {(provided, snapshot) => {
                                        return <>
                                            <div key={section.id}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}
                                                className='dnd-container'>
                                                <img onClick={() => onAddElement(section)} src={section.thumbnail} alt='thumbnail' className='template-thumbnail' />
                                            </div>
                                            {snapshot.isDragging && <img src={section.thumbnail} alt='thumbnail' style={{ 'zIndex': '0' }} className='template-thumbnail' />}
                                        </>
                                    }}
                                </Draggable>
                            })}
                        </AccordionDetails>

                    </Accordion>
                })}
                <div style={{ 'display': 'none' }}>
                    {provided.placeholder}
                </div>
            </div>
        }}
    </Droppable >

    )
}






// Accordion Styling

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderBottom: '1px solid rgba(120, 120, 120, .7)',
    background: 'transparent'
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
    padding: '20px 8px',
    borderTop: '1px solid rgba(60, 60, 60, .5)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem'
}));

// Typography Styling

const SummaryTypography = styled(Typography)(({ theme }) => ({
    // padding: '5px 0',
    textTransform: 'capitalize',
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    // fontWeight: 700
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    padding: `${theme.spacing(1)} 0`,
    fontFamily: 'Montserrat',
}));