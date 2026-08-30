import Attendance from "../../features/employee module/attendance/ui/pages/Attendance"
import MyTask from "../../features/employee module/mytask/ui/pages/MyTask"
import Profile from "../../features/employee module/profile/ui/pages/Profile"

export const employeeRoutes = [
  {
    path: "/home/myTask",
    element: <MyTask />,
  },
  {
    path: "/home/attendance",
    element: <MyTask />,
  },
  {
    path: "/home/profile",
    element: <Profile />,
  },
];
