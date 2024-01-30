import { RouteProps } from "react-router-dom";
import { MainPage } from "@pages/MainPage";
import { AppRoutes, Routes } from "@enums/routes";

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: Routes.MAIN,
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
};
