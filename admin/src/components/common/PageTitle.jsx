import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>
        {" "}
        {title
          ? `${title} | Your Digital Pharmacy Partner`
          : "Pharmilow | Your Digital Pharmacy Partner"}
      </title>
      <meta
        name="description"
        content={
          description
            ? ` ${description} `
            : "Pharmilow : React Grocery & Organic Food Store e-commerce Admin Dashboard"
        }
      />
    </Helmet>
  );
};

export default PageTitle;
