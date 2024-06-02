import { PageName } from '@/common/constants/common.constant';
import HttpStatus from '@/common/constants/http.constant';
import localStorageAuthService from '@/common/storages/authStorage';
import axios from 'axios';
import router from '../vue-router';

export const logout = (redirectToLogin = true) => {
  localStorageAuthService.resetAll();
  const currentPage = router.currentRoute;
  if (redirectToLogin && currentPage.value.name !== PageName.SIGN_IN_PAGE) {
    sessionStorage.setItem('redirect', currentPage.value.fullPath);
    router.push({ name: PageName.SIGN_IN_PAGE }).catch(() => {});
  }
};

export const sendRefreshToken = async () => {
  let response;
  try {
    const API_URL = import.meta.env.VUE_APP_API_URL;
    response = await axios.get(`${API_URL}/auth/token`, { withCredentials: true });
    if (response?.status === HttpStatus.OK) {
      localStorageAuthService.setAccessToken(response.data?.data.accessToken);
      localStorageAuthService.setAccessTokenExpiredAt(response.data?.data.expiresIn);
      return;
    }
    logout(true);
    return;
  } catch (error) {
    logout(true);
    return;
  }
};
