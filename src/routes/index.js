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

/*

In Vue.js, "history" and "hash" are two different routing modes used to handle the URLs of the application.

"history" mode uses the HTML5 History API to manipulate the browser's URL without triggering a page refresh. This allows for a cleaner, more traditional-looking URL structure, without the "#" character commonly used in "hash" mode. In "history" mode, the server needs to be configured to always serve the main Vue app's HTML file, regardless of the requested URL, in order to allow Vue to handle routing.

"hash" mode, on the other hand, uses the URL fragment identifier (the part after the "#" symbol) to simulate different URLs for different content, without actually requesting new pages from the server. This mode is generally more compatible with older browsers and server configurations, since it doesn't rely on the HTML5 History API, but it also has some limitations. For example, the fragment identifier is not included in HTTP requests, so server-side routing based on the URL is not possible in "hash" mode.

In summary, "history" mode provides a cleaner URL structure and server-side routing capabilities, while "hash" mode provides compatibility with older browsers and server configurations. The choice between the two modes depends on the specific requirements of the application and the target audience.

*/
