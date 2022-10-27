import { Card } from '../CardObject/card';

export class Player {
  id!: number;
  pseudo!: String;
  role!: String;
  cards!: Card[];
}
