// src/components/Affiliations.jsx
const Affiliations = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-700 font-medium">
          Member of the following Motor Institutions:
        </p>
        <div className="flex justify-center gap-6 mt-4 flex-wrap">
          <span className="bg-white px-4 py-2 rounded shadow text-blue-900">RMI</span>
          <span className="bg-white px-4 py-2 rounded shadow text-blue-900">SOMERA</span>
          <span className="bg-white px-4 py-2 rounded shadow text-blue-900">NAACAM</span>
        </div>
      </div>
    </section>
  );
};

export default Affiliations;