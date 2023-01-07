import Navbar from "./Navbar";
import Footer from "./Footer";

function MyLayout({children}) {
    return (
        <>
            <Navbar/>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                {children}
            </div>

            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <Footer/>
            </div>
        </>
    )
}

export default MyLayout