import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HSearch = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const cities = [
        'Agra', 'Ahmedabad', 'Ajmer', 'Allahabad', 'Amritsar', 'Aurangabad', 'Bangalore', 'Bhopal', 'Bhubaneswar', 'Chandigarh',
        'Chennai', 'Coimbatore', 'Delhi', 'Faridabad', 'Ghaziabad', 'Goa', 'Gurgaon', 'Guwahati', 'Hyderabad', 'Indore',
        'Jaipur', 'Jalandhar', 'Jammu', 'Jamnagar', 'Jamshedpur', 'Jodhpur', 'Kanpur', 'Kochi', 'Kolkata', 'Lucknow',
        'Ludhiana', 'Madurai', 'Mangalore', 'Mumbai', 'Nagpur', 'Nashik', 'Noida', 'Patna', 'Pune', 'Rajkot',
        'Ranchi', 'Srinagar', 'Surat', 'Thane', 'Thiruvananthapuram', 'Udaipur', 'Vadodara', 'Varanasi', 'Vijayawada', 'Visakhapatnam'
    ];

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle search logic here
        console.log(selectedCity);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url('src/assets/2.jpg')] bg-cover">
            <div className="backdrop-blur-sm bg-white/30 p-8 py-10 rounded-3xl shadow-lg mb-40 w-3/12 ">
                <h2 className="text-4xl font-bold mb-4 ">Select City</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <select id="city" name="city" value={selectedCity} onChange={handleCityChange} className="text-lg mt-1 p-2 border border-gray-300 rounded-md w-full">
                            <option value="">Name of cities</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                    <Link to="/requirement">
                        <button type="submit" className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-lg">Selected</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default HSearch;