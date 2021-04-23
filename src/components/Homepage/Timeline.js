import React from "react";
// import "../styles.css";
import { Chrono } from "react-chrono";
// import data from "../data";
import '../App.css';


class MyTimeline extends React.Component {
    state = {
         items : [
            {title: "12th October 2020"},
            {title: "14th November 2020"},
            {title: "17th November 2020"}
          ]
      }
    
    
    render(){
        return (
            <div className="App">
              <div style={{ width: "100%", height: "850px" , paddingTop: "100px", color: "whitesmoke"}}>
                <Chrono
                   items={this.state.items}
                  mode="VERTICAL_ALTERNATING"
                  slideShow
                  slideItemDuration={4000}
                  scrollable={{ scrollbar: false }}
                  theme={{primary: "#059999", secondary: "#cfdbe6", cardBgColor: "#42464d", cardForeColor: "black"
                  }}
                >
                    <div className="chrono-icons" >
                    <img style = {{
                             background: "#059999",
                        borderRadius:"50%",
                        MozBorderRadius:"50%",
                        WebkitBorderRadius:"50%",
                        boxShadow: "0 0 0 1.25px #059999"
                    }}
                    src="https://i.gifer.com/XDZT.gif" alt="image1"/>
                        <img style = {{
                             background: "#059999",
                        borderRadius:"50%",
                        MozBorderRadius:"50%",
                        WebkitBorderRadius:"50%",
                        boxShadow: "0 0 0 1.25px #059999"
                    }}
                    src="https://i.gifer.com/XDZT.gif" alt="image1"/>
                        <img style = {{
                             background: "#059999",
                        borderRadius:"50%",
                        MozBorderRadius:"50%",
                        WebkitBorderRadius:"50%",
                        boxShadow: "0 0 0 1.1px #059999"
                    }}
                    src="https://i.gifer.com/XDZT.gif" alt="image1"/>
                    </div>

                  <div>
                    <div style={{ width: "250px", height: "250px" }}>
                      <img
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                        alt="test"
                        src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h3>This is a List</h3>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                    </ul>
                  </div>
                  
                  <div >
                    <h3 style = {{color: "rgb(7, 169, 169)"}}>Dunkirk</h3>
                    <p>
                      The Battle of Dunkirk (French: Bataille de Dunkerque) was fought
                      in Dunkirk (Dunkerque), France, during the Second World War,
                      between the Allies and Nazi Germany. As the Allies were losing the
                      Battle of France on the Western Front, the Battle of Dunkirk was
                      the defence and evacuation to Britain of British and other Allied
                      forces in Europe from 26 May to 4 June 1940.
                    </p>
                  </div>

                  <div style={{ margin: "1rem" }}>
                    <h3>Table</h3>
                    <table>
                      <thead>
                        <tr>
                          <td>Column 1</td>
                          <td>Column 2</td>
                          <td>Column 3</td>
                          <td>Column 4</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Value 1</td>
                          <td>Value 2</td>
                          <td>Value 3</td>
                          <td>Value 4</td>
                        </tr>
                        <tr>
                          <td>Value 5</td>
                          <td>Value 6</td>
                          <td>Value 7</td>
                          <td>Value 8</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Chrono>
              </div>
            </div>
          );
    }
}

export default MyTimeline;


// const MyTimeline = () => {
//     const items = [{
//         title: "May 1940",
//         cardTitle: "Dunkirk",
//         cardSubtitle:
//         "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
//         cardDetailedText: ["paragraph1", "paragraph2"]
//       },];

 

//     return (
//       <div style={{ width: "500px", height: "400px" }}>
//         <Chrono items={items} />
//       </div>
//     )
//   }

//   export default MyTimeline;
