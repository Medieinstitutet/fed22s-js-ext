import { SuperheroEntity } from "@ngneat/falso";
import "./SuperHero.css";

// type Character = {
//     name: string
// }

// type SuperHeroProps = Character & {
//     superpower: string
// }

// type VillainProps = Character & {
//     evilPlan: string
// }

// type SideKickProps = Omit<SuperHeroProps, 'name'>

// const Robin: SideKickProps = {
//     superpower: 'kan springa jättesnabbt'
// }

export const SuperHero = ({
  id,
  realName,
  alterEgo,
  company,
}: SuperheroEntity) => {
  //   const { name, telephoneNumber, evil } = props;

  //   const name = props.name
  //   const telephoneNumber = props.telephoneNumber
  //   const evil = props.evil

  return (
    <div className={company === "Marvel" ? "marvel" : "dc"}>
      <p>{id}</p>
      <p>{realName}</p>
      <p>{alterEgo}</p>
    </div>
  );
};
