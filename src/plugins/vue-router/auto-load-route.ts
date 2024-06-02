import type { RouteRecordRaw } from 'vue-router';

const routeFiles = import.meta.glob<{ default: RouteRecordRaw[] }>('@/modules/**/route.ts', {
  eager: true
});
const moduleRoutes: Array<RouteRecordRaw> = [];

for (const path in routeFiles) {
  const route = routeFiles[path];
  moduleRoutes.push(...route.default);
}

export default moduleRoutes;
