import HomeMainPage from "./(homes)/home-main/home";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "BCentral | Be Different",
  description:
    "Somos BCentral",
};
export default function Home() {
  return (
    <>
      <HomeMainPage />
    </>
  );
}
