import {HomeComponent} from '../Home/CustomerApp.component';

export const MainRoutes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Customer', loadChildren: '../Customer/CustomerApp.CustomerModule#CustomerModule'},
  {path: 'Supplier', loadChildren: '../Supplier/CustomerApp.SupplierModule#SupplierModule'},
  {path: 'Login', loadChildren: '../Login/CustomerApp.LoginModule#LoginModule'},
  {path: '', component: HomeComponent}
];
