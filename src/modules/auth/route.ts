import { PageName } from '@/common/constants/common.constant';
import AuthLayout from '@/layouts/AuthLayout.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'sign-in',
        name: PageName.SIGN_IN_PAGE,
        component: () => import('@/modules/auth/pages/SignInPage.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'sign-up',
        name: PageName.SIGN_UP_PAGE,
        component: () => import('@/modules/auth/pages/SignUpPage.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
];

export default routes;
