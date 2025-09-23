const Home = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {[1,2,3,4].map((i) => (
        <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <img src="rose.jpg" alt={`Product ${i}`} className="h-40 w-full object-cover" />
          <div className="p-4">
            <h4 className="font-semibold">Product {i}</h4>
            <p className="text-sm text-gray-600">$10.00</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home