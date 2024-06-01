import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export default async (
  _: RouteLocationNormalized,
  __: RouteLocationNormalized,
  next: NavigationGuardNext
): Promise<void> => {
  // const permission = localStorageAuthService.getUserPermission();
  // const IS_PUBLIC = to?.meta?.public || false;
  // const onlyWhenLoggedOut = to?.meta?.onlyWhenLoggedOut || false;
  // const hasToken = localStorageAuthService.getAccessToken() ? true : false;
  // const tokenExpiredAt = localStorageAuthService.getAccessTokenExpiredAt();
  // const isExpired = dayjs().isAfter(dayjs(tokenExpiredAt), 'second');

  // const IS_AUTHENTICATED = tokenExpiredAt && !isExpired && hasToken;
  // if (!IS_AUTHENTICATED && to.name !== PageName.SIGN_IN_PAGE && !IS_PUBLIC) {
  //   sessionStorage.setItem('redirect', to.fullPath);
  //   return next({ name: PageName.SIGN_IN_PAGE });
  // }
  // if (IS_PUBLIC) {
  //   // Do not allow user to visit entry page if they are logged in
  //   if (IS_AUTHENTICATED && onlyWhenLoggedOut) {
  //     return next({ name: PageName.DASHBOARD_PAGE });
  //   }
  //   return next();
  // }
  // if (!IS_PUBLIC && !IS_AUTHENTICATED) {
  //   return next({
  //     name: PageName.SIGN_IN_PAGE
  //   });
  // }
  // if (IS_AUTHENTICATED) {
  //   const metaRole = to?.meta?.role || [];
  //   let hasPermission = false;
  //   if (typeof metaRole === 'string') {
  //     hasPermission = get(permission, metaRole, false);
  //   } else if (Array.isArray(metaRole)) {
  //     hasPermission = metaRole.length
  //       ? metaRole.some((permission) => get(permission, permission, false))
  //       : true;
  //   }
  //   if (hasPermission) {
  //     return next();
  //   } else {
  //     return next({ name: PageName.DASHBOARD_PAGE });
  //   }
  // }
  return next();
};
