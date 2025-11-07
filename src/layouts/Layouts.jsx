import React from 'react'
import Navbar from '../component/Header/components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer/components/Footer'

const Layouts = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1  sm:pt-2 md:pt-2 lg:pt-2">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layouts
