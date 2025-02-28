'use client'
import Header from "@/components/Header"
import { useSelector } from "react-redux";





const MainLayout = ({ children }) => {
    const {theme} = useSelector((state) => state.userPreference);
    return (
        <main className={theme}>
            <Header />
            {children}
            
        </main>




    )
}

export default MainLayout