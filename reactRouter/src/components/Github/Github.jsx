import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();

  //   const [data, setdata] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/AftabMankapure")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setdata(data);
  //         console.log(data.name);
  //       });
  //   }, []);

  return (
    <div className="text-center bg-slate-300 text-black p-4 text-2xl ">
      <h1>Github </h1>
      <h3 className="mt-3">Name: {data.name}</h3>
      <h3 className="mt-2">Location: {data.location}</h3>
      <h3 className="mt-2">Public_repos: {data.public_repos}</h3>
    </div>
  );
}

export default Github;

export const githubInfoLoder = async () => {
  const response = await fetch("https://api.github.com/users/AftabMankapure");
  return response.json();
};
