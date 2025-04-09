
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import Home from "@/pages/Home/Home";

const MainLayout = () => {
    return (
        <>
           <Header/>
           <Home/>
           <Footer/> 
        </>
    );
};

export default MainLayout;