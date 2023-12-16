import React, { FC, ReactNode } from "react";
import { CompanyLogoLight, NotificationLogo, SearchLogo, SettingLogo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";
import { NavButtonWrapper } from "../Button/Button";
import Navbar from "./Navbar";

type LayoutType = {
    children: ReactNode
}

const Layout: FC<LayoutType> = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            {children}
        </React.Fragment>
    )
}

export default Layout;

