import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

const Default: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <main className="w-screen">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Default;
