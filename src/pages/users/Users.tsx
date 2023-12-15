import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { ButtonWrapper } from "../../components/Button/Button";
import { DeleteLogo, EditLogo, FileUploadLogo } from "../../components/Logo/Logo";
import { Container } from "../../components/Container/Container";
import { TableBody, TableHead } from "../../components/Table/Table";
import { useGetUsersQuery } from "../../redux/services/users";

const dummyAbout = [
    { title: "DevOps engineer", about: "Using git, jenkins, ansible, docker, kubernetes" },
    { title: "Design software", about: "Super lightweight design app" },
    { title: "Data prediction", about: "AI and machine learning data" },
    { title: "Android Developer", about: "React native build cross platform apps" },
    { title: "Backend Davalper", about: "Super lightweight design app" },
    { title: "UI/UX  developer", about: "Super lightweight design app" },
    { title: "DevOps engineer", about: "Using git, jenkins, ansible, docker, kubernetes" },
    { title: "Design software", about: "Super lightweight design app" },
    { title: "Data prediction", about: "AI and machine learning data" },
    { title: "Android Developer", about: "React native build cross platform apps" },
    { title: "Backend Davalper", about: "Super lightweight design app" },
    { title: "UI/UX  developer", about: "Super lightweight design app" },

]

const Users = () => {
    const [page, setPage] = useState(1)
    const { data, error, isLoading } = useGetUsersQuery(page);
    console.log({ data })

    const handlePreviousPage = () => {
        setPage((page) => {
            if (page === 1) return Number(data?.total_pages);
            console.log("ffffff", page - 1)
            return page - 1
        })
    }
    const handleNextPage = () => {
        setPage(page => {
            if (page === data?.total_pages) return 1;
            console.log("sssss", page + 1)
            return page + 1
        })
    }
    return (
        <>
            <Layout />

            <Container>
                <section className=" py-8 flex justify-between">
                    <div className=" text-2xl font-medium text-gray-900">Users</div>
                    <div className="flex gap-3">
                        <ButtonWrapper handleClick={() => { }}>
                            <div className="flex gap-2">
                                <FileUploadLogo />
                                Import
                            </div>
                        </ButtonWrapper>
                        <ButtonWrapper handleClick={() => { }} variant="contain"> + Add User</ButtonWrapper>
                    </div>
                </section>

                <section className="border drop-shadow-lg rounded-lg overflow-hidden ">
                    <table className=" w-full">
                        <thead>
                            <TableHead datas={[<input type="checkbox" />, "User Info", "About", "Status", ""]} />
                        </thead>
                        <tbody>
                            {
                                data?.data?.map((user) => (
                                    <TableBody key={user?.id} datas={[
                                        <input type="checkbox" />,
                                        <div className=" flex">
                                            <img src={user.avatar} className=" w-10 h-10 rounded-full object-contain" />
                                            <div className=" pl-3">
                                                <div className=" text-sm font-medium text-black">{user.first_name} {user.last_name}</div>
                                                <div className=" text-gray-500 font-normal">{user?.email}</div>
                                            </div>
                                        </div>,
                                        <div className=" text-sm font-normal">
                                            <div className=" text-black">{dummyAbout[user.id].title}</div>
                                            <div>{dummyAbout[user.id].about}</div>
                                        </div>,
                                        <div></div>

                                    ]} />
                                ))
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={5}>
                                    <div className="flex justify-between px-6 py-3">
                                        <ButtonWrapper handleClick={handlePreviousPage}>Previous</ButtonWrapper>
                                        <div className="my-auto">Page {data?.page} of {data?.total_pages}</div>
                                        <ButtonWrapper handleClick={handleNextPage}>Next</ButtonWrapper>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>

                    </table>
                </section>
            </Container>
        </>
    )
}

export default Users;