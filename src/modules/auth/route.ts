import { PageName } from '@/common/constants/common.constant';
import AuthLayout from '@/layouts/AuthLayout.vue';
import type { RouteRecordRaw } from 'vue-router';
import SignInPage from './pages/SignInPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'sign-in',
        name: PageName.SIGN_IN_PAGE,
        component: SignInPage,
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
];

export default routes;
