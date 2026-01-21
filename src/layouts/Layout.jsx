import { Header } from "../components";
import { Footer } from "../components";

export function Layout({children}){
    return(
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}