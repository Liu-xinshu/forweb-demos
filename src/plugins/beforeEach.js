import router from "../router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
  easing: "ease",
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false,
});
let WHITE_ROUTER = ["/login"];
const getToken = () => sessionStorage.token;
router.beforeEach((to, from, next) => {
  NProgress.start();

  if (getToken()) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      if ($getters["user/queryRole"].length <= 0) {
        $dispatch("user/getUserInfo")
          .then((role) => {
            $dispatch("user/getRoutes", role)
              .then(() => {
                router.addRoutes($getters["user/queryAsyncRoutes"]);
                next({ ...to, replace: true });
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      } else {
        next();
      }
    }
  } else {
    if (WHITE_ROUTER.indexOf(to.path) > -1) {
      next();
    } else {
      next({
        path: "/login",
      });
    }
  }
});
router.afterEach(() => {
  NProgress.done();
});
