import "./HelloWorld.scss";

export const HelloWorld = () => {
  const greeting: string = "Hello world works!";
  const imageUrl =
    "https://cdn.leadingcourses.com/userfiles/clubs/thumbs/800x600/filters:format(webp)/525_1494853623.983.jpg?v1";

  return (
    <>
      <h3>{greeting}</h3>
      <img src={imageUrl} alt="my vacation"></img>
    </>
  );
};
