import { PageName } from '@/common/constants/common.constant';
import MainLayout from '@/layouts/MainLayout.vue';
import type { RouteRecordRaw } from 'vue-router';
import UserListPage from './pages/UserListPage.vue';
import UserDetailPage from './pages/UserDetailPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'user',
        name: PageName.USER_LIST_PAGE,
        component: UserListPage,
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: ':id',
            name: PageName.USER_DETAIL_PAGE,
            component: UserDetailPage,
            meta: {
              requiresAuth: true
            }
          }
        ]
      }
    ]
  }
];

export default routes;
