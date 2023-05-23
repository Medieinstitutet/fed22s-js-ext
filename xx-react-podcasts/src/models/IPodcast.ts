export interface IPodcast {
  id: number;
  name: string;
  programurl: string;
  programimage: string;
  listened: boolean;
}

export interface IApiReponse {
  programs: IPodcast[];
}
