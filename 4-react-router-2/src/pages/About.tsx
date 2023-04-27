import { randText } from "@ngneat/falso";
import { Navbar } from "../components/Navbar";

export const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <h1>Om oss</h1>
      <p>{randText({ length: 100 })}</p>
    </>
  );
};
