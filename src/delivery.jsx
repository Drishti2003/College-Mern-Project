import React, { useEffect, useState } from "react";

const Delivery = () => {
  const [data, setState] = useState([]);

  const getPostOfficeData = () => {
    fetch("https://api.postalpincode.in/pincode/301001")
      .then((res) => res.json())
      .then((res) => setState(res));
  };
  useEffect(() => {
    getPostOfficeData();
  }, []);
  return (
    <div>
      {data[0]?.PostOffice?.map((items, i) => (
        <>
          <h1>{items.Name}</h1>
          <p>{items.Circle}</p>
        </>
      ))}
      <h1>post</h1>
    </div>
  );
};

export default Delivery;
