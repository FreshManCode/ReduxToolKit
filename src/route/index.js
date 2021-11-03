import Home from "./Home/home";
import Layout from "./Layout";
import SubHomes from "./Home/SubHome";

const routes = [
  {
    name: "home",
    path: "/home",
    component: Home,
    children: SubHomes
  },
];

export default routes;
