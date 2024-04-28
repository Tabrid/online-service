import  { useState } from 'react';
import toast from 'react-hot-toast';

function PhoneNumberForm() {
  const [phone, setNumber] = useState('');

  const handlePhoneNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleNidBalanceUpdate = async () => {
   
    try {
      const response = await fetch('/api/balance/update-phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });
      const data = await response.json();
      console.log(data);
      toast.success('phone updated successfully!');
    } catch (error) {
      console.error('Error updating NID balance:', error.message);
      toast.error('Something went wrong while updating phone!');
    }
  };

  return (
    <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleNidBalanceUpdate}
          >
            Submit
          </button>
        </div>
    </div>
  );
}

export default PhoneNumberForm;
