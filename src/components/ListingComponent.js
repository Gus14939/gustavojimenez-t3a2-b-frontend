import React, { useEffect, useState } from "react";

const API_KEY = "key=sk-REKG66a5179656da26352";
const guideAPIurl = "https://perenual.com/api/species/details/";

function ListingComponent() {
  const [passID, setPassID] = useState(() => Math.floor(Math.random() * 500 + 1));
  const [data, setData] = useState(null);

  const getPlantica = async () => {
    try {
      let result = await fetch(`${guideAPIurl}${passID}?${API_KEY}`)
        .then((response) => response.json());
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getPlantica();
  }, [passID]);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  useEffect(() => {
    if (data) {
      // const titleElement = document.querySelector('.listingContent h1');
      const descriptionElement = document.querySelector('.listingContent p');

      // if (titleElement) {
      //   titleElement.innerText = truncateText(data.common_name, 36); // Adjust maxLength as needed
      // }

      if (descriptionElement) {
        descriptionElement.innerText = truncateText(data.description, 300); // Adjust maxLength as needed
      }
    }
  }, [data]);

  return (
    <div className="listing">
      {data && (
        <div className="listing">
          <div className="imgContainer">
            <img
              src={data.default_image.small_url}
              alt={data.scientific_name}
            />
          </div>
          <div className="listingContent">
            <h1 title={data.common_name}>{data.common_name}</h1>
            <h6>{data.scientific_name}</h6>
            <p>{data.description}</p>
            <div className="listingDetailsContainer">
              <div className="listingDetails">
                <div>
                  <p>User:</p>
                  <p>Date:</p>
                  <p>Location:</p>
                </div>
                <div>
                  <p>**user**</p>
                  <p>**dateCreated**</p>
                  <p>**dateCreated**</p>
                </div>
              </div>
              <div>
                <span>O</span> <span>O</span> <span>O</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListingComponent;


// import React, { useEffect, useState } from "react";

// const API_KEY = "key=sk-REKG66a5179656da26352";
// const guideAPIurl = "https://perenual.com/api/species/details/";

// function ListingComponent() {
//   const [passID, setPassID] = useState(() => Math.floor(Math.random() * 500 + 1));
//   const [data, setData] = useState(null);

//   const getPlantica = async () => {
//     try {
//       let result = await fetch(`${guideAPIurl}${passID}?${API_KEY}`).then(
//         (response) => response.json()
//       );
//       setData(result);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     getPlantica();
//     // eslint-disable-next-line 
//   }, [passID]);

//   return (
//     <div className="listing">

//       {data && (
//         <>
//         <div className="listing">
//           <div className="imgContainer">
//             <img
//               src={data.default_image.small_url}
//               alt={data.scientific_name}
//             />
//           </div>
//           <div className="listingContent">
//             <h1 title={data.common_name}>{data.common_name}</h1>
//             <h6>{data.scientific_name}</h6>
//             <p>{data.description}</p>
//             <div className="listingDetailsContainer">
//               <div className="listingDetails" >
//                 <div>
//                   <p>User:</p>
//                   <p>Date:</p>
//                   <p>Location:</p>
//                 </div>
//                 <div>
//                   <p>**user**</p>
//                   <p>**dateCreated**</p>
//                   <p>**dateCreated**</p>
//                 </div>
//               </div>
//               <div>
//                 <h3><span>O</span> <span>O</span> <span>O</span></h3>
//               </div>
//             </div>
//           </div>
//         </div>    
//         </>
//       )}
//     </div>
//   );
// }

// export default ListingComponent;