import {IPerson} from '../person/IPerson';
import {CustomerType} from './CustomerType';

export class ICustomer extends IPerson{
  birthday: string;
  customerType: CustomerType;
}
