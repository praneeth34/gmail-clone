import React from 'react'
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://images.macrumors.com/t/tOeSavAWwmT_Nsa7e67NCK_J-FA=/400x0/filters:quality(90)/article-new/2020/10/newgmaillogo.0.jpg?lossy" alt=""/>
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text"/>
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header
