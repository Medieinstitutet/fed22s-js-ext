import "./ConditionalRendering.scss";

export const ConditionalRendering = () => {
  const show = true;

  // 1.
  //   let myDiv = <></>;

  //   if (show) {
  //     myDiv = <div>Lorem</div>;
  //   }

  return (
    <>
      {/*2.  {show ? <div>Lorem</div> : <></>} */}

      {/* { 3.} */}
      {show && <div>Lorem</div>}
      <div className={show ? "show" : "wrapper"}>Ipsum</div>
    </>
  );
};
