import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const userOne = new User();
const companyOne = new Company();

const map = document.getElementById('map') as HTMLElement;

const customMap = new CustomMap(map);

customMap.addMarker(userOne);
customMap.addMarker(companyOne);
