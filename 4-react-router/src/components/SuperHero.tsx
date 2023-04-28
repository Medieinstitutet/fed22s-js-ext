import { SuperheroEntity } from "@ngneat/falso";
import "./SuperHero.css";

// SuperheroProps = SuperheroEntity + fullDescription: boolean
interface SuperheroProps extends SuperheroEntity {
  fullDescription?: boolean;
}

export const SuperHero = ({
  id,
  realName,
  alterEgo,
  company,
  fullDescription = false,
}: SuperheroProps) => {
  if (fullDescription === false) {
    return (
      <div className={company === "Marvel" ? "marvel" : "dc"}>
        <p>
          {alterEgo} ({realName})
        </p>
      </div>
    );
  } else {
    return (
      <>
        <h1>
          {alterEgo} ({realName})
        </h1>
        <p>id - {id}</p>
        <p>Serietidningsbolag - {company}</p>
      </>
    );
  }
};
