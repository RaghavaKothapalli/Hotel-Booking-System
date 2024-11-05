const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h5 className="font-bold">About Us</h5>
          <p>We provide the best hotel booking experience with great deals and offers.</p>
        </div>
        <div>
          <h5 className="font-bold">Quick Links</h5>
          <ul>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold">Contact</h5>
          <p>Have Queries? Call for any assistance<br /><i className="fas fa-phone"></i> 0124-6201600</p>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
  