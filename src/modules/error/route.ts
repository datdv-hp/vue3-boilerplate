import { PageName } from '@/common/constants/common.constant';
import MainLayout from '@/layouts/MainLayout.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '404',
        name: PageName.NOT_FOUND_PAGE,
        component: () => import('@/modules/error/pages/NotFoundPage.vue'),
        meta: {
          public: true
        }
      },
      {
        path: '403',
        name: PageName.FORBIDDEN_PAGE,
        component: () => import('@/modules/error/pages/ForbiddenPage.vue'),
        meta: {
          public: true
        }
      }
    ]
  }
];

export default routes;
