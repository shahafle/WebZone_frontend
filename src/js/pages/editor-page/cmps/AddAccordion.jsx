import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';



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

    return (
        <div>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Headers</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledTypography>Template Item #1</StyledTypography>
                    <StyledTypography>Template Item #2</StyledTypography>
                    <StyledTypography>Template Item #3</StyledTypography>
                    <StyledTypography>Template Item #4</StyledTypography>
                    <StyledTypography>Template Item #5</StyledTypography>
                </AccordionDetails>
            </Accordion>



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