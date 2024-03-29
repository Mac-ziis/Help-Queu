import React from "react";
import Ticket from "./Ticket";

const mainTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Prop types are throwing an error.'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Child component isn\'t rendering.'
  }
];

return (
  <React.Fragment>
    <hr/>
    {mainTicketList.map((ticket, index) =>
      <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        key={index}/>
    )}
  </React.Fragment>
);

function TicketList(){
  return (
    <Ticket
      location="3A"
      names="Thato and Haley"
      issue="Firebase will not save record!"/>
  );
}

export default TicketList;