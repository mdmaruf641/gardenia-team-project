import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";



import { useGetAllPostQuery } from "../../../hooks/useProducts";
import Header from "../../Shared/Header/Header";

const Home = () => {
    const { data } = useGetAllPostQuery();
    console.log(data)
    return (
        <>
            <Header></Header>
            <Navigation></Navigation>
            {
                data && data.map((items) => <h2>{items.name}</h2>)
            }
        </>
    );

};

export default Home;
