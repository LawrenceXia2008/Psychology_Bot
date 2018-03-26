import asyncLoad from "direct-core/asyncLoad";

import Index from "Page/Index";

const NotFound = asyncLoad( () => import("Page/NotFound") );

const TestPage = asyncLoad( () => import("Page/Test") );
const Login = asyncLoad( () => import("Page/UserAuth/LoginForm") );
const SignUp = asyncLoad( () => import("Page/UserAuth/SignUpForm") );

export default {
  "/": {
    page: Index,
    exact: true
  },
  "/test": {
    page: TestPage,
    exact: true
  },
  "/UserAuth/LoginForm": {
    page: Login,
    exact: true
  },
  "/UserAuth/SignUpForm": {
    page: SignUp,
    exact: true
  },
  "*": {
    page: NotFound
  }
  
};
