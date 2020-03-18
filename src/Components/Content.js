import React from "react";
import contentStyles from "../styles/Content.module.css";
import giphy from "./images/giphy.gif";

// const Content = props => {
//   const { content, loading } = props;
//   return (
//     <div className={contentStyles.wrapper}>
//       {!loading ? (
//         content.articles.map((item, index) => (
//           <div className={contentStyles.content} key={index}>
//             <h3>{item.title.toUpperCase()}</h3>
//             <div className={contentStyles.flexCont}>
//               <div className={contentStyles.pic}>
//                 <img src={item.urlToImage} alt="Oops...! Failed to load" />
//               </div>
//               <p>
//                 {item.description} &nbsp;
//                 <a href={item.url} target="blank">
//                   Read More &nbsp;
//                   <i className="fa fa-angle-double-right" />
//                 </a>
//               </p>
//             </div>
//             <br />
//             <br />
//           </div>
//         ))
//       ) : (
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             height: "75vh"
//           }}
//         >
//           <img src={giphy} alt="" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Content;

class Content extends React.Component {
  render() {
    const { content, loading } = this.props;
    return (
      //this is the Parent <div> that holds all the content
    <div className={contentStyles.wrapper}>

       
        {!loading ? (
          content.articles.map((item, index) => (
            //this is another child <div> in the content div
            <div className={contentStyles.content} key={index}>
              <h3>{item.title.toUpperCase()}</h3>
              {"//this is also a child <div> in content child <div>"}
              <div className={contentStyles.flexCont}>
                <div className={contentStyles.pic}>
                  <img src={item.urlToImage} alt="Oops...! Failed to load" />
                </div>
                <p>
                  {item.description} &nbsp;
                  <a href={item.url} target="blank">
                    Read More &nbsp;
                    <i className="fa fa-angle-double-right" />
                  </a>
                </p>
              </div>
              <br />
              <br />
            </div>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              height: "75vh"
            }}
          >
            <img src={giphy} alt="" />
          </div>
        )} 
     }
  </div>
    );
  }
}

export default Content;
