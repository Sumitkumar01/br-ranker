"use client"
import CheckoutMain from "@/components/checkout/CheckoutMain";
import { AppContext } from "@/contextApi/AppProvider";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useContext } from "react";




const CheckoutPage = () => {
  const context = useContext(AppContext);

  if (!context) {
    return null; // or handle the context being undefined as necessary
  }
  const { bookSubject, setBookSubject } = context;

  if (!bookSubject) {
    return null; // or handle the
  }

  return (
    <Wrapper>
      <main>
        <CheckoutMain />


        {/* {bookSubject?.title} */}
      </main>
    </Wrapper>
  );
};

export default CheckoutPage;
