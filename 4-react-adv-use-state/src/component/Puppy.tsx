export interface PuppyProps {
  name: string;
  age: number;
}

export const Puppy = ({ name, age }: PuppyProps) => {
  return (
    <>
      <p>Namn: {name}</p>
      <p>Ålder: {age}</p>
    </>
  );
};
