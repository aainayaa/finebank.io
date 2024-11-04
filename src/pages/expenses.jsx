import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const ExpensesPage = () => {
  return (
    <MainLayout type="expenses">
      {/* top content start*/}
      <div className="mb-8">
        <h2 className="text-md font-semibold text-gray-600 mb-4">Expenses Comparison</h2>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque
            quam alias enim ullam deserunt ducimus consequatur cumque hic
            voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel
            porro eum.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Expenses" />
        <Card 
        title="&nbsp;" 
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <Card title="&nbsp;" /> 
        </div>

        <div className="md:grid md:grid-cols-3 md:gap-6">
        <Card desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <Card />
        <Card desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />        
        </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default ExpensesPage;