import React, { useEffect, useState } from "react";
import LinkList from "./LinkList"

function Form() {
  const [links, setLinks] = useState([]);
  const loadLinks = async () => {
    try {
      const res = await fetch("./api/getLinks");
      const links = await res.json();
      setLinks(links);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div classname="container py-5">
      <h1 className="text-center mb-5">list of links</h1>
      <LinkList links={links}/>
    </div>
  );
}

export default Form;
