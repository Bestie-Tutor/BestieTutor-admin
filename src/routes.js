import Index from "views/Index.js";
import OriginProfile from "views/examples/OriginProfile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import ConfirmEmail from "./views/examples/ConfirmEmail";
import UsersTable from "./views/examples/UsersTable";
import UserManagement from "views/examples/UserManagement.js";
import LanguagesTable from "./views/examples/LanguagesTable";
import LanguageManagement from "./views/examples/LanguageManagement";
import CharactersTable from "./views/examples/CharactersTable";
import CharacterManagement from "./views/examples/CharacterManagement";
import TopicsTable from "./views/examples/TopicsTable";
import TopicManagement from "./views/examples/TopicManagement";
import NoticesTable from "./views/examples/NoticesTable";
import NoticeManagement from "./views/examples/NoticeManagement";
import EventsTable from "./views/examples/EventsTable";
import EventManagement from "./views/examples/EventManagement";
import InquiriesTable from "./views/examples/InquiriesTable";
import InquiryManagement from "./views/examples/InquiryManagement";
import ResetPassword from "./views/examples/ResetPassword";
import ConfirmPassword from "./views/examples/ConfirmPassword";
import ResetPasswordSuccess from "./views/examples/ResetPasswordSuccess";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    api: false,
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
    api: false,
    // excludeFromAdmin: true
  },
  {
    path: "/origin-profile",
    name: "Origin Profile",
    icon: "ni ni-single-02 text-yellow",
    component: OriginProfile,
    layout: "/admin",
    api: true,
    // excludeFromAdmin: true
  },
  {
    path: "/user-management",
    component: UserManagement,
    layout: "/admin",
    api: true,
    excludeFromAdmin: true,
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
    api: false,
    // excludeFromAdmin: true
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    api: true,
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
    api: true,
  },
  {
    path: "/confirm-email/:id",
    name: "Confirm Email",
    icon: "ni ni-check-bold text-green",
    component: ConfirmEmail,
    layout: "/auth",
    api: true,
  },
  {
    path: "/users",
    name: "Users",
    icon: "ni ni-folder-17 text-red",
    component: UsersTable,
    layout: "/admin",
    api: true,
  },
  {
    path: "/languages",
    name: "Languages",
    icon: "ni ni-folder-17 text-orange",
    component: LanguagesTable,
    layout: "/admin",
    api: true,
  },
  {
    path: "/language-management",
    component: LanguageManagement,
    layout: "/admin",
    api: true,
    excludeFromAdmin: true,
  },
  {
    path: "/characters",
    name: "Characters",
    icon: "ni ni-folder-17 text-yellow",
    component: CharactersTable,
    layout: "/admin",
    api: true,
  },
  {
    path: "/character-management",
    component: CharacterManagement,
    layout: "/admin",
    api: true,
    excludeFromAdmin: true,
  },
  {
    path: "/topics",
    name: "Topics",
    icon: "ni ni-folder-17 text-green",
    component: TopicsTable,
    layout: "/admin",
    api: true,
  },
  {
    path: "/topic-management",
    component: TopicManagement,
    layout: "/admin",
    api: true,
    excludeFromAdmin: true,
  },
  {
    path: "/notices",
    name: "Notices",
    icon: "ni ni-folder-17 text-blue",
    component: NoticesTable,
    layout: "/admin",
    api: true,
  },
  {
    path: "/notice-management",
    component: NoticeManagement,
    layout: "/admin",
    api: true,
    excludeFromAdmin: true,
  },
  {
    path: "/events",
    name: "Events",
    icon: "ni ni-folder-17 text-purple",
    component: EventsTable,
    layout: "/admin",
    api: true,
  },
  {
    path: "/event-management",
    component: EventManagement,
    layout: "/admin",
    api: true,
    excludeFromAdmin: true,
  },
  {
    path: "/inquiries",
    name: "Inquiries",
    icon: "ni ni-folder-17 text-grey",
    component: InquiriesTable,
    layout: "/admin",
    api: true,
  },
  {
    path: "/inquiry-management",
    component: InquiryManagement,
    layout: "/admin",
    api: true,
    excludeFromAdmin: true,
  },
  {
    path: "/reset-password",
    name: "Reset Password",
    icon: "ni ni-folder-17 text-pink",
    component: ResetPassword,
    layout: "/auth",
    api: true,
  },
  {
    path: "/confirm-password/:id",
    name: "Confirm Password",
    icon: "ni ni-folder-17 text-pink",
    component: ConfirmPassword,
    layout: "/auth",
    api: true,
  },
  {
    path: "/reset-success",
    name: "Password Reset Confirmed",
    icon: "ni ni-folder-17 text-pink",
    component: ResetPasswordSuccess,
    layout: "/auth",
    api: false,
  },
];
export default routes;
