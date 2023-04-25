interface EnemyInterface {
  name: string;
  prison: string;
}

export class Enemy implements EnemyInterface {
  public name: string;
  public prison: string;

  constructor(name: string, prison: string) {
    this.name = name;
    this.prison = prison;
  }
}
