import asyncLoad from "direct-core/asyncLoad";

import Index from "Page/Index";

const NotFound = asyncLoad( () => import("Page/NotFound") );

const TestPage = asyncLoad( () => import("Page/Test") );

export default {
  "/": {
    page: Index,
    exact: true
  },
  "/test": {
    page: TestPage,
    exact: true
  },
  "*": {
    page: NotFound
  }
};
