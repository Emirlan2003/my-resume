import {
  Header,
  DetailsInfo,
  MainInfo,
  Projects,
  Footer,
} from "@features/main";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <MainInfo />
      <DetailsInfo />
      <Projects />
      <Footer />
    </div>
  );
};
