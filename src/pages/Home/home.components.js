import React from "react";
import HeroBanner from "../../components/Hero-Banner/hero-banner.components";
import Details from "../../components/Details/details.components";
import Form from "../../components/Form/form.components";
import Footer from "../../components/Footer/footer.components";

const Home = () => {
  return (
    <>
      <HeroBanner src="https://images.unsplash.com/photo-1625604086816-4bfaf603e842?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Details />
      <Form />
      <Footer />
    </>
  );
};

export default Home;
