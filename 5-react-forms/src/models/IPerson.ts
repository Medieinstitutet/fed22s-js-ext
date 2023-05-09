export interface IPerson {
  lastname: string;
  firstname: string;
  isMarried: boolean;
}

export const defaultPerson: IPerson = {
  lastname: "",
  firstname: "",
  isMarried: false,
};
