import "@/styles/customDivider.css";
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const MyDivider: React.FC<{ label: string, src: string }> = ({ label, src }) => {
    return (
        <Divider sx={{
            marginY: "30px", position: 'relative',
            '.MuiDivider-wrapper': {
                padding: 0,
            },
            '::before': {
                height: '3px',
                backgroundColor: 'red',
            },
            '::after': {
                height: '3px',
                backgroundColor: 'red',
            }
        }}>
            <div className="absolute w-10 h-10 left-0 right-0 top-[-20px] mx-auto">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
                <div className="circle circle5"></div>
            </div>
            <Chip
                sx={{
                    color: 'white', backgroundColor: '#077eb5',
                    fontSize: '1.1rem',
                    paddingY: '1.25rem'
                }}
                label={label}
                avatar={<Avatar src={src} alt="not found" />}
                variant="outlined"
            />
        </Divider>
    );
}

export default MyDivider;