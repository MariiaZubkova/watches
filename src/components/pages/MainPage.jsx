// import React, { useState } from 'react';
// import Row from 'react-bootstrap/Row';
// import Carousel from 'react-bootstrap/Carousel';

// import OneWatchCard from '../ui/OneWatchCard';

// export default function MainPage({
//   orders, watch, user, request,
// }) {
//   console.log(request);
//   //   const { currentPosts, submitHandler, deleteHandler } = usePosts({ watch });
//   const [card, setCard] = useState(request);
//   return (

//     <Row>
//       <Carousel data-bs-theme="dark">
//         {card?.map((el) => (
//           <Carousel.Item>
//             <img
//                 // width={500}
//               height={465}
//               className="d-block w-100"
//               src={el?.img}
//               alt="First slide"
//             />
//             <Carousel.Caption>
//               <h5>{el?.title}</h5>
//               <p>{el?.description}</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </Row>

//   );
// }

import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import OneWatchCard from '../ui/OneWatchCard';
import AppCorousel from '../ui/AppCorousel';
import AddWatchForm from '../ui/AddWatchForm';

export default function MainPage({ watch, user, request }) {
  // const { currentPosts, submitHandler, deleteHandler } = usePosts({ watch });
  const [setRes] = useState(request);
  const [watches, setWatches] = useState(watch);

  const clickHandler = async (watchId) => {
    try {
      await axios.delete(`/api/${watchId}`);
      setWatches((prev) => prev.filter((el) => el.id !== watchId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row>
        <AppCorousel />
      </Row>
      <AddWatchForm />
      <Row>
        {watches?.map((el) => <OneWatchCard key={el.id} watch={el} user={user} clickHandler={clickHandler} />)}
      </Row>
    </>
  );
}
