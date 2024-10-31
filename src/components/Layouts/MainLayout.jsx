import PropTypes from "prop-types";
import Header from "../Fragments/Header";
import Navbar from "../Fragments/Navbar";

const MainLayout = (props) => {
    const { children } = props;
    return (
        <div className="flex bg-special-mainBg min-h-screen max-w-full">
            {/* Navbar start */}
            <Navbar />
            {/* Main content */}
            <div className="flex-1 flex flex-col">
                {/* Header start */}
                <Header />
                {/* Header end */}

                {/* content start*/}
                <main className="px-6 py-4">{children}</main>
                {/* content end*/}
            </div>
        </div>
    );
};

// Define prop types for MainLayout
MainLayout.propTypes = {
    children: PropTypes.node,
};

export default MainLayout;
