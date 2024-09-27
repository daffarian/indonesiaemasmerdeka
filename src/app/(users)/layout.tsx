import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { FORMERR } from "dns";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
}
