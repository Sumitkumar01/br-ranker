import EventDetailsMain from "@/components/event-details/EventDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

import { event_data } from "@/data/event-data"

export async function generateStaticParams() {
  const ids = event_data.map(event => event.id);
  return ids.map(id => ({
    id: id.toString(), // Convert id to string
  }));
}


const page = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <Wrapper>
      <main>
        <EventDetailsMain id={id} />
      </main>
    </Wrapper>
  );
};

export default page;
