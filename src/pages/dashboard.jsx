import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";

const DashboardPage = () => {
    return (
        <MainLayout type="dashboard">
            <div className="mb-4 sm:flex sm:gap-6">
                <div className="mb-4 sm:w-1/3">
                    <Card />
                </div>
                <div className="mb-4 sm:w-1/3">
                    <Card />
                </div>
                <div className="mb-4 sm:w-1/3">
                    <Card />
                </div>
            </div>
            {/* bottom content start */}
            <div className="sm:flex sm:gap-6">
                <div className="mb-4 sm:w-1/3">
                    <Card />
                </div>
                <div className="sm:w-2/3">
                    <div className="mb-4">
                        <Card />
                    </div>
                    <div className="mb-4">
                        <Card />
                    </div>
                </div>
            </div>
            {/* bottom content end */}
        </MainLayout>
    );
};

export default DashboardPage;
