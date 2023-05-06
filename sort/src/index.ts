import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedinList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
numbersCollection.print();

const charactersCollection = new CharactersCollection('yami');
charactersCollection.sort();
charactersCollection.print();

const linkedinList = new LinkedinList();
linkedinList.add(10);
linkedinList.add(4);
linkedinList.add(6);
linkedinList.add(2);
linkedinList.sort();
linkedinList.print();
