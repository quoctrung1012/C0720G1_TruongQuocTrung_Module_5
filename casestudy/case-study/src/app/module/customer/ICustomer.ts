import {ICustomerType} from './ICustomerType';
import {IPerson} from '../person/IPerson';

export interface ICustomer extends IPerson{
  birthday: string;
  customerType: ICustomerType;

}
