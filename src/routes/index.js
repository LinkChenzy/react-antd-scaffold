
import Contacts               from 'pages/contacts';
import SuccussPage            from 'pages/success';
import LifeCycle              from 'pages/lifecycle/parent'
// import Layout             from 'layout/default';

export default {
  path: '/',
  name: 'home',
  // component: Layout,
  childRoutes: [
    // { path: '', component: Contacts },
    { path: 'contacts', component: Contacts },
    { path:'success',component:SuccussPage},
    { path:'lifecycle',component:LifeCycle}
  ]
}
