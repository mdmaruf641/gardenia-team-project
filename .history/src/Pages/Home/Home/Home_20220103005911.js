import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import { useGetAllPostQuery } from "../../../hooks/useProducts";
import Header from "../../Shared/Header/Header";
import Products from "../../Products/Products";
import { Container, Row } from "react-bootstrap";
import Review from "../../Review/Review";
import Footer from "../../Shared/Footer/Footer";
// import Header from "../../Shared/Header/Header";



import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import RecentProjects from "../RecentProjects/RecentProjects";


const Home = () => {
<<<<<<< HEAD
  return (

    <div>

     

      
          <Navigation></Navigation>
          <h1>This is Home page </h1>
          


      <Banner></Banner>
      <RecentProjects></RecentProjects>
      <Contact></Contact>

    </div>
  );
    const { data } = useGetAllPostQuery();
    return (
        <>
            <Header></Header>

            <Navigation></Navigation>
            <Container>
            <Row>
            <Review></Review>
            <Footer></Footer>

            {
                data?.map((items) => <Products
                    key={items._id}
                    product={items}
                ></Products>)
            }
            </Row>
            </Container>
        </>
    );


};

export default Home;
