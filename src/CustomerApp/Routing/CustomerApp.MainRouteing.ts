import {HomeComponent} from '../Home/CustomerApp.component';
import {CustomerComponent} from '../Customer/CustomerApp.Customer.component';
import {SupplierComponent} from '../Supplier/CustomerApp.Supplier.component';

export const MainRoutes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Customer', component: CustomerComponent},
  {path: 'Supplier', component: SupplierComponent},
  {path: '', component: HomeComponent}
];
