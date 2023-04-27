import { Puppy, PuppyProps } from "./Puppy";

interface PuppyListProps {
  puppies: PuppyProps[];
}

const PuppyList = ({ puppies }: PuppyListProps) => {
  return (
    <>
      {puppies.map((puppy) => {
        return <Puppy name={puppy.name} age={puppy.age}></Puppy>;
      })}
    </>
  );
};

export default PuppyList;
