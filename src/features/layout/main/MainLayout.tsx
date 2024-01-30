import { Header, DetailsInfo, MainInfo, Projects } from "@features/main";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <MainInfo />
      <DetailsInfo />
      <Projects />
    </div>
  );
};
