import React from "react";
import { CompanyLogoLight, NotificationLogo, SearchLogo, SettingLogo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";
import { NavButtonWrapper } from "../Button/Button";

const Layout = () => {
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

                            <section className=" text-base text-white my-auto">
                                <NavLink to="/"><NavButtonWrapper>Home</NavButtonWrapper></NavLink>
                                <NavLink to="/users"><NavButtonWrapper>Users</NavButtonWrapper></NavLink>
                                <NavLink to="/projects"><NavButtonWrapper>Projects</NavButtonWrapper></NavLink>
                                <NavLink to="/tasks"><NavButtonWrapper>Tasks</NavButtonWrapper></NavLink>
                                <NavLink to="/reporting"><NavButtonWrapper>Reporting</NavButtonWrapper></NavLink>
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

export default Layout;

