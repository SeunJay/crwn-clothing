import React from "react";
import {HomePageContainer} from "./homePage.styles"
import "./homePage.styles.scss";
import Directory from "../../components/directory/Directory";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
