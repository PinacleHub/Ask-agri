import './App.css';
import Navbar from './component/Navbar.jsx';
import Footer from './component/Footer.jsx';
import ServiceCard from './component/ServiceCard.jsx';
import { Bot, ShoppingCart, LineChart, Shield } from 'lucide-react';


function App() {

  return (
  <div>
     <Navbar/>  
     <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Smart Agriculture Solutions
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Empowering farmers with cutting-edge technology and sustainable practices
              </p>
              <button className="bg-white text-green-700 px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-50">
                Get Started
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
           
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <a href=''><ServiceCard
                title="AI Chatbot"
                description="Get instant answers to your farming queries with our AI-powered chatbot"
                icon={Bot}
                bgColor="bg-green-600"
              /></a>
              <a href=''><ServiceCard
                title="Agri E-Commerce"
                description="Buy and sell agricultural products directly through our platform"
                icon={ShoppingCart}
                bgColor="bg-green-700"
              /></a>
              <a href='..\Pages\Renting\home\home.html'target="_blank" rel="noopener noreferre"><ServiceCard
                title="TRAF"
                description="Rent the agriculuteral related item's and get it's useas"
                icon={LineChart}
                bgColor="bg-green-800"
              /></a>
              <a href=''><ServiceCard
                title="Crop Insurance"
                description="Protect your harvest with comprehensive crop insurance solutions"
                icon={Shield}
                bgColor="bg-green-900"
              /></a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-green-50 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/029/286/792/non_2x/ecology-eco-friendly-people-fashion-characters-illustration-vector.jpg"
                  alt="Sustainable Farming"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
                <p className="text-gray-600">Promoting eco-friendly farming methods for a better future</p>
              </div>
              <div className="text-center p-6">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/003/716/797/non_2x/touch-screen-technology-concept-with-man-and-woman-touching-digital-objects-with-modern-flat-style-free-vector.jpg"
                  alt="Technology Integration"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
                <p className="text-gray-600">Leveraging cutting-edge solutions for improved yields</p>
              </div>
              <div className="text-center p-6">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/008/445/707/non_2x/a-flat-illustration-of-logistics-office-vector.jpg"
                  alt="Expert Support"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-600">24/7 assistance from agricultural experts</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    
     <Footer/>
  </div>
  );
}

export default App;
 