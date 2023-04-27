import { SuperheroEntity } from "@ngneat/falso";
import "./SuperHero.css";

export const SuperHero = ({
  id,
  realName,
  alterEgo,
  company,
}: SuperheroEntity) => {
  return (
    <div className={company === "Marvel" ? "marvel" : "dc"}>
      <p>
        {alterEgo} ({realName})
      </p>
    </div>
  );
};
