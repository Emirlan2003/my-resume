import { Header, DetailsInfo, MainInfo } from "@features/main";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <MainInfo />
      <DetailsInfo />
    </div>
  );
};
