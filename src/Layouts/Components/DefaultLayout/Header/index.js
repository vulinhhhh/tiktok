import {
    AppBar, Link, TextField, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText
} from '@mui/material';
/* /* import ClearIcon from '@mui/icons-material/Clear'; */
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TranslateIcon from '@mui/icons-material/Translate';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import { Box, } from '@mui/system';
import { useState } from 'react';
import { EffectHouse, IconLogo } from '../../svg_file';

const buttonsx = {
    width: 52,
    height: 46,
    borderTopRightRadius: '22px',
    borderBottomRightRadius: '22px',
    "&:hover": {
        background: '#d4d2d2',
    }
}
const listitemsx = {
    height: 42,
    "& .MuiTypography-root": {
        fontWeight: 600,
        fontSize: 14,
        color: 'text.primary',
    },
    "& .MuiListItemIcon-root": {
        minWidth: 35,
    },
    "& .MuiListItemIcon-root path": {
        fill: "currentColor",
        color: "text.primary"
    },
}

function Header() {
    const [Inputvalue, useInputvalue] = useState('');
    const ChangeValue = (e) => {
        const value = e.target.value;
        useInputvalue(value)
    }
    return <AppBar sx={{
        height: 60,
        position: 'static',
        alignItems: 'center',
        boxShadow: '#d4d4d4 0px 1px 1px 0px',
        justifyContent: "space-between",
        bgcolor: 'background.default',
    }}>
        <Box sx={{
            justifyContent: 'space-between',
            maxWidth: 1150,
            height: 60,
            width: '100%',
            padding: '0px 24px 0px 20px',
            display: 'flex',
            alignItems: 'center',
        }}>
            <Link href='/' sx={{
                display: 'flex',
                height: 42,
                width: 118,
                alignItems: 'center',
                position: 'relative',
                top: '-5px'
            }}>
                <IconLogo sx={{
                    color: 'text.primary',
                    fill: 'currentcolor',
                    height: 'inherit',
                    width: 'inherit'
                }}></IconLogo>
            </Link>
            <Box sx={{
                width: 361,
                height: 46,
                display: 'flex',
                background: '#f2f1f2',
                borderRadius: 50,
                justifyContent: "space-between",
            }}>
                <TextField
                    placeholder='Tìm kiếm tài khoản và video '
                    onChange={ChangeValue}
                    value={Inputvalue}
                    sx={{
                        width: 292,
                        height: '100%',
                        lineHeight: 22,
                        fontSize: 16,
                        '& .MuiInputBase-root': {
                            height: '100%',
                            borderTopLeftRadius: '22px',
                            borderBottomLeftRadius: '22px',
                            '& .MuiInputBase-input': {
                                padding: '12px 40px 12px 17px'
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                top: -9,
                                border: 'none'
                            }
                        }
                    }}>
                </TextField>
                <Button sx={buttonsx}></Button>
            </Box>
            <Box sx={{
                height: 36,
                width: 309,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Button sx={{
                    width: 111,
                    height: '100%',
                    border: '1px solid #DDDDDE',
                    borderRadius: '4px',
                    fontWeight: 600,
                    textTransform: 'none',

                    '&:hover': {
                        background: '#F8F8F8',
                    }
                }}><Link href="/" sx={{
                    fontSize: '16px',
                    textDecoration: 'none',
                    color: 'text.primary'
                }}>Tải lên</Link></Button>
                <Button sx={{
                    width: 100,
                    height: '100%',
                    background: '#ef2950',
                    borderRadius: '4px',
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    lineHeight: 22,
                    '&:hover': {
                        background: '#ef2950'
                    }
                }}>Đăng nhập</Button>
                <EffectHouse></EffectHouse>
                <Box sx={{
                    position: 'relative',
                    width: '28px',
                    height: '20px',
                }}>
                    <MoreVertIcon sx={{
                        "& path": {
                            color: 'text.primary',
                            fill: 'currentcolor'
                        }
                    }}></MoreVertIcon>
                    <Box sx={{
                        width: 215,
                        minHeight: '186px',
                        position: 'absolute',
                        top: 33,
                        right: 0,
                        borderRadius: '4px',
                        backgroundColor: 'background.paper',
                        boxShadow: '0px 1px 28px -11px'
                    }}>
                        <List>
                            <ListItem disablePadding >
                                <ListItemButton sx={listitemsx}>
                                    <ListItemIcon>
                                        <TranslateIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Tiếng Việt" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding >
                                <ListItemButton sx={listitemsx}>
                                    <ListItemIcon>
                                        <HelpOutlineIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Phản hồi và trợ giúp" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding >
                                <ListItemButton sx={listitemsx}>
                                    <ListItemIcon>
                                        <KeyboardAltOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Phím tắt trên bàn phím" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding >
                                <ListItemButton sx={listitemsx}>
                                    <ListItemIcon>
                                        <DarkModeOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Chế độ tối" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
        </Box>
    </AppBar>
}
export default Header;