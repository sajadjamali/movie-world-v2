import GenreList from '../GenreList';
import { ClickHandler } from '@/types';
import { rules, questions } from '@/constant';
import { RuleAndQuestionType } from '@/types';
import Accordion from '@mui/material/Accordion';
import GavelIcon from '@mui/icons-material/Gavel';
import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

const MyAccordion: React.FC<{ expanded: boolean, handleCloseMenu: ClickHandler, role: string }> = ({ expanded, handleCloseMenu, role }) => {

    const [isexpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (!expanded)
            setIsExpanded(false)
    }, [expanded])

    return (
        <>
            {
                role == 'menu' ?
                    <Accordion expanded={isexpanded} onChange={() => setIsExpanded(!isexpanded)}
                        sx={{ backgroundColor: '#10151f', color: 'white' }}>
                        <AccordionSummary
                            sx={{
                                '.MuiAccordionSummary-expandIconWrapper': {
                                    color: 'white'
                                }
                            }}
                            className='text-lg' expandIcon={<ExpandMoreIcon />}>
                            <TheaterComedyIcon className='me-2' fontSize='large' />
                            <p className='mt-1'>Movie Genre</p>
                        </AccordionSummary>
                        <AccordionDetails className='rounded-xl ms-4 me-5 bg-black'>
                            <GenreList handleClick={handleCloseMenu} />
                        </AccordionDetails>
                    </Accordion >
                    :
                    <>
                        {
                            (role == 'rules' ? rules : questions).map((rule: RuleAndQuestionType) => (
                                <Accordion className='pb-3' key={rule.title} sx={{ backgroundColor: '#10151f', color: 'white' }}>
                                    <AccordionSummary
                                        sx={{
                                            '.MuiAccordionSummary-expandIconWrapper': {
                                                color: 'white'
                                            }
                                        }}
                                        className='text-lg' expandIcon={<ExpandMoreIcon />}>
                                        {
                                            role == 'rules' ?
                                                <GavelIcon className='me-2 text-rose-700' fontSize='large' />
                                                :
                                                <HelpOutlineIcon className='me-2 text-rose-700' fontSize='large' />
                                        }
                                        <p className='mt-1'>{rule.title}</p>
                                    </AccordionSummary>
                                    <AccordionDetails className='rounded-xl mx-2 bg-black'>
                                        {rule.description}
                                    </AccordionDetails>
                                </Accordion >
                            ))
                        }
                    </>
            }
        </>

    );
}

export default MyAccordion;