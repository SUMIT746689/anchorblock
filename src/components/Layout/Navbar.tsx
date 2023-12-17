import React from "react";
import { CompanyLogoLight, NotificationLogo, SearchLogo, SettingLogo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";
import { NavButtonWrapper } from "../Button/Button";

const Navbar = () => {
    return (
        <React.Fragment>
            <div className=" bg-[#6941C6] flex justify-between h-[74px]">
                <Container>
                    <div className=" h-full flex justify-between align-middle">
                        <section className=" flex gap-10">
                            <section className=" flex gap-2 my-auto">
                                <CompanyLogoLight />
                                <div className=" text-xl font-bold text-white my-auto"> Stack</div>
                            </section>

                            <section className=" text-base text-white my-auto flex gap-1">
                                <NavLink to="/">
                                    {({ isActive }) => (
                                        <NavButtonWrapper isActive={isActive}>Home</NavButtonWrapper>
                                    )}
                                </NavLink>
                                <NavLink to="/users">
                                    {({ isActive }) => (
                                        <NavButtonWrapper isActive={isActive}>Users</NavButtonWrapper>
                                    )}
                                </NavLink>
                                <NavLink to="/projects">
                                    {({ isActive }) => (
                                        <NavButtonWrapper isActive={isActive}>Projects</NavButtonWrapper>
                                    )}
                                </NavLink>
                                <NavLink to="/tasks">
                                    {({ isActive }) => (
                                        <NavButtonWrapper isActive={isActive}>Tasks</NavButtonWrapper>
                                    )}
                                </NavLink>
                                <NavLink to="/reporting">
                                    {({ isActive }) => (
                                        <NavButtonWrapper isActive={isActive}>Reporting</NavButtonWrapper>
                                    )}
                                </NavLink>
                            </section>
                        </section>

                        <section className="flex my-auto">
                            <div className="cursor-pointer p-2">
                                <SearchLogo />
                            </div>
                            <div className="cursor-pointer p-2">
                                <SettingLogo />
                            </div>
                            <div className="cursor-pointer p-2">
                                <NotificationLogo />
                            </div>
                        </section>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Navbar;

