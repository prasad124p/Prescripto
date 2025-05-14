import React from "react";
import { useParams } from "react-router-dom";
const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(Appcontext);
  return <div></div>;
};

export default Doctors;
