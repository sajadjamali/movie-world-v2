import React from 'react';
import Button from '@mui/material/Button';

const Btn: React.FC<{ href: string, icon: any, text: string }> = ({ href, icon, text }) => {
    return (
        <Button
            target={`${text !== 'Back' ? '_blank' : ''}`}
            sx={{
                color: 'white',
                backgroundColor: '#0f70d1',
                '&:hover': {
                    backgroundColor: '#ed052f'
                },
                transition: 'background-color 0.6s',
            }}
            className="sm:text-base ring-2 ring-green-400"
            href={href}
            endIcon={icon}>
            {text}
        </Button>
    )
}

export default Btn;