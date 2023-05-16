import React from "react";
import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import Grid from "../modules/Grid";

export const PostalCodeGrid = () => (
  <div>
    <Header />
    <div>
      <br></br>
      <Grid />
    </div>
    <br></br>
    <div
    ><Footer />
    </div>
  </div>
);

export default PostalCodeGrid;
