export interface Rating {
  name: string;
  rating: number;
}

export class Wine {
  constructor(
    public brand: string,
    public name: string,
    public color: string,
    public rating: Rating[],
  ) { }
}

const wine1: Rating[] = [
  { name: 'Kathy', rating: 4 },
  { name: 'Sam', rating: 0 },
  { name: 'Claire', rating: 4 },
  { name: 'Matt', rating: 3 },
  { name: 'Nicole', rating: 5 },
  { name: 'Annette', rating: 6 },
  { name: 'Janet', rating: 5 },
  { name: 'Ben', rating: 2 },
];

const wine2: Rating[] = [
  { name: 'Brianna', rating: 6 },
  { name: 'Kathy', rating: 2.5 },
  { name: 'Sam', rating: 2 },
  { name: 'Claire', rating: 3 },
  { name: 'Matt', rating: 6 },
  { name: 'Nicole', rating: 1.5 },
  { name: 'Annette', rating: 5 },
  { name: 'Janet', rating: 6 },
  { name: 'Ben', rating: 9 },
  { name: 'Bob', rating: 4 },
];

const wine3: Rating[] = [
  { name: 'Brianna', rating: 3 },
  { name: 'Kathy', rating: -2 },
  { name: 'Sam', rating: 6.5 },
  { name: 'Claire', rating: 2 },
  { name: 'Matt', rating: 4 },
  { name: 'Nicole', rating: 6 },
  { name: 'Annette', rating: 5 },
  { name: 'Ben', rating: 7 },
];

const wine4: Rating[] = [
  { name: 'Brianna', rating: 3 },
  { name: 'Kathy', rating: 2 },
  { name: 'Katie', rating: 2 },
  { name: 'Sam', rating: 4 },
  { name: 'Claire', rating: 7 },
  { name: 'Matt', rating: 5 },
  { name: 'Nicole', rating: 8 },
  { name: 'Annette', rating: 4 },
  { name: 'Ben', rating: 4 },
  { name: 'Bob', rating: 5 },
  { name: 'Janet', rating: 6 },
];

const wine5: Rating[] = [
  { name: 'Brianna', rating: 3 },
  { name: 'Kathy', rating: 4 },
  { name: 'Sam', rating: 4.75 },
  { name: 'Claire', rating: 5 },
  { name: 'Matt', rating: 6 },
  { name: 'Nicole', rating: 7 },
  { name: 'Annette', rating: 4 },
  { name: 'Ben', rating: 5 },
];

const wine6: Rating[] = [
  { name: 'Brianna', rating: 3 },
  { name: 'Kathy', rating: 6 },
  { name: 'Katie', rating: 3 },
  { name: 'Sam', rating: -5 },
  { name: 'Claire', rating: 5 },
  { name: 'Matt', rating: 3 },
  { name: 'Nicole', rating: 8 },
  { name: 'Ben', rating: 4 },
];

export const ruffino: Wine = new Wine('Ruffino', 'Pinot Grigio', 'white', wine1);
export const riserva: Wine = new Wine('Riserva', 'Vernaccia di san Gimignano', 'white', wine2);
export const verrazzano: Wine = new Wine('Castello Di Verrazzano', 'Chianti Classico', 'red', wine3);
export const terrilogio: Wine = new Wine('Terrilogio', 'Primitivo Puglia', 'red', wine4);
export const chianti: Wine = new Wine('Chianti', 'Il Poggetto', 'red', wine5);
export const gallo: Wine = new Wine('Gallo', 'Merlot California', 'red', wine6);
