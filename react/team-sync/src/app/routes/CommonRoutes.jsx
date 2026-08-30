import Home from "../../features/dashboard/ui/pages/Home";
import Chat from "../../features/chats/ui/pages/Chat";
import Setting from "../../features/settings/ui/pages/Setting";

export const commonRoutes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path: "setting",
    element: <Setting />,
  },
];
