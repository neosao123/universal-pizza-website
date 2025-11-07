import React from 'react'
import Navbar from '../component/Header/components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer/components/Footer'

const Layouts = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            
            <main className="flex-1 pt-16 sm:pt-20 md:pt-24 lg:pt-20">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default Layouts
