import React from "react";
import "./Events.css";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import p1 from "./pig.gif"
const Events = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  return (
    <div className="resp">
      <div className="containerrr">
        <div className="top-section">
          <h1>
            <center style={{ color: "white", backgroundColor: "black" }}>
            <center style={{borderTop:'2px solid white',borderBottom:'2px solid white',width:'50vw',marginLeft:'0vw'}}><h1>TIMELINE</h1> </center>
            </center>
          </h1>
        </div>
        <Timeline position="alternate">
        <TimelineItem className="conta ">
        <TimelineSeparator sx={{color:'black'}}>
          <img src={p1} style={{}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>          <div className="section">
            <div className="bead"></div>
            <div className="content ">
              <h2>Inaguration</h2>
              <p>
                <h4 style={{fontWeight:'bold'}}>Date : 0 2 / 1 2 / 2 3 </h4>
                 <br/>
                 Huge participation of students in the society . The faculty members had also come to the inaguration.The song chorus was sung and wveryone was dancing .

 
              </p>
            </div>
          </div></TimelineContent>
      </TimelineItem>
      <TimelineItem className=" conta reveal">
        <TimelineSeparator>
          <img src={p1} style={{}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>          <div className="section">
            <div className="bead"></div>
            <div className="content ">
              <h2>Inaguration</h2>
              <p>
                <h4 style={{fontWeight:'bold'}}>Date : 0 2 / 1 2 / 2 3 </h4>
                 <br/>
                 Huge participation of students in the society . The faculty members had also come to the inaguration.The song chorus was sung and wveryone was dancing .

 
              </p>
            </div>
          </div></TimelineContent>
      </TimelineItem>
      <TimelineItem className="conta  reveal">
        <TimelineSeparator>
          <img src={p1} style={{}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>          <div className="section">
            <div className="bead"></div>
            <div className="content ">
              <h2>Inaguration</h2>
              <p>
                <h4 style={{fontWeight:'bold'}}>Date : 0 2 / 1 2 / 2 3 </h4>
                 <br/>
                 Huge participation of students in the society . The faculty members had also come to the inaguration.The song chorus was sung and wveryone was dancing .

 
              </p>
            </div>
          </div></TimelineContent>
      </TimelineItem>
      <TimelineItem  className=" conta reveal">
        <TimelineSeparator>
        <img src={p1} style={{}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>          <div className="section">
            <div className="bead"></div>
            <div className="content ">
              <h2>Inaguration</h2>
              <p>
                <h4 style={{fontWeight:'bold'}}>Date : 0 2 / 1 2 / 2 3 </h4>
                 <br/>
                 Huge participation of students in the society . The faculty members had also come to the inaguration.The song chorus was sung and wveryone was dancing .

 
              </p>
            </div>
          </div></TimelineContent>
      </TimelineItem>
      <TimelineItem className=" conta reveal">
        <TimelineSeparator>
        <img src={p1} style={{}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>          <div className="section">
            <div className="bead"></div>
            <div className="content ">
              <h2>Inaguration</h2>
              <p>
                <h4 style={{fontWeight:'bold'}}>Date : 0 2 / 1 2 / 2 3 </h4>
                 <br/>
                 Huge participation of students in the society . The faculty members had also come to the inaguration.The song chorus was sung and wveryone was dancing .

 
              </p>
            </div>
          </div></TimelineContent>
      </TimelineItem>
      <TimelineItem className="conta  reveal">
        <TimelineSeparator>
        <img src={p1} style={{}} />
        </TimelineSeparator>
        <TimelineContent>          <div className="section">
            <div className="bead"></div>
            <div className="content ">
              <h2>Inaguration</h2>
              <p>
                <h4 style={{fontWeight:'bold'}}>Date : 0 2 / 1 2 / 2 3 </h4>
                 <br/>
                 Huge participation of students in the society . The faculty members had also come to the inaguration.The song chorus was sung and wveryone was dancing .

 
              </p>
            </div>
          </div></TimelineContent>
      </TimelineItem>
       
      
    </Timeline>
      </div>
    </div>
  );
};

export default Events;
