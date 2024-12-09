import CancellationPolicy from "@/components/cancellation/CancellationMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <main>
        <CancellationPolicy />
      </main>
    </Wrapper>
  );
};

export default page;