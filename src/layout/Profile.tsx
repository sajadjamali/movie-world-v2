import React from 'react';
import UserInfo from './UserInfo';
import Badge from '@mui/material/Badge';
import AuthButtons from './AuthButtons';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useMainContext } from '@/context/MainContex';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 0.8s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(2)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(3)',
            opacity: 0,
        },
    },
}));


const Profile: React.FC = () => {

    const [isVisibleInfoCard, setIsVisibleInfoCard] = useState<boolean>(false);
    const { loggedUser, handleLogOut } = useMainContext();

    useEffect(() => {
        window.addEventListener('click', () => setIsVisibleInfoCard(false));
        return () => {
            window.removeEventListener('click', () => setIsVisibleInfoCard(false));
        };
    }, []);

    if (!loggedUser.name) return <AuthButtons />

    return (
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
        >
            <div className='relative top-1' onClick={(e) => e.stopPropagation()}>
                {
                    isVisibleInfoCard ?
                        <>
                            <button onClick={() => setIsVisibleInfoCard(false)}>
                                <Avatar sx={{ width: '60px', height: '60px', position: 'relative' }} src="/assets/imgs/profile.png" />
                            </button>
                            <div className='absolute top-[73px] cursor-text'>
                                <UserInfo user={loggedUser} logOut={handleLogOut} />
                            </div>
                        </>
                        :
                        <Tooltip
                            componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: '#111827',
                                        padding: '0'
                                    }
                                }
                            }}
                            title={<UserInfo user={loggedUser} logOut={handleLogOut} />}
                        >
                            <button onClick={() => setIsVisibleInfoCard(x => !x)}>
                                <Avatar style={{ width: '60px', height: '60px' }} src="/assets/imgs/profile.png" />
                            </button>
                        </Tooltip>
                }
            </div>
        </StyledBadge >
    );
};

export default Profile;