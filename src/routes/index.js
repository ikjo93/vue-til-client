import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  // mode 의 default 값은 hash -> # 기준으로 오른쪽에 있는 url 을 기준으로 라우터 매핑 -> #을 기준으로 오른쪽에 작성된 사용자 입력 url 은 서버에 요청하지 않음 -> 클라이언트단에서 처리(단, 새로고침은 서버에 요청)
  // histroy url 에 # 이 제거 -> 사용자가 브라우저 창에 입력한 url 은 클라이언트에서 처리하지 않고 서버에 요청 -> 라우터 매핑에 의한 페이지 전환은 서버에 요청 X
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/signup",
      component: () => import("@/views/SignupPage.vue"),
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundPage.vue"),
    },
  ],
});
