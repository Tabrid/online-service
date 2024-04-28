import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../Context/AuthContext";
import Marquee from "react-fast-marquee";


const ServerCopy = () => {
    const { refresh, setRefresh, balance } = useAuthContext();
    const [servernid, setServerNid] = useState("");
    const [serverbirthday, setServerBirthday] = useState("");
    const [Balance, setBalance] = useState({});
    useEffect(() => {
        const fetchBalance = async () => {
          try {
            const response = await fetch('/api/balance');
            const data = await response.json();
            setBalance(data);
            
          } catch (error) {
            console.error('Error fetching balance:', error.message);
          }
        };
        fetchBalance();
      }, []);
    const handleNidChange = (e) => {
        setServerNid(e.target.value);
    };

    const handleBirthdayChange = (e) => {
        setServerBirthday(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        
        if (balance < Balance.serverBalance) {
          toast.error('Insufficient balance!');  
        }
        else{
            const data ={
                serverNid: servernid,
                serverBirthday: serverbirthday,
                category: 'server'
            }
            console.log(data);
            fetch('/api/apply/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                fetch('/api/users/update-balance-server', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                    toast.success('Order placed successfully!');
                    setRefresh(!refresh);
                })
                .catch((error) => {
                    console.error('Error:', error);
                    toast.error('Something went wrong!');
                });
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error('Something went wrong!');
            });
        }
    };
    
    return (
        <div>
            <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold mb-4">Enter NID and Birthday</h2>
                <Marquee>
                <h2 className="text-xl font-bold mb-4">💢আপনার একাউন্ট থেকে {Balance.serverBalance}tk কেটে নেয়া হবে ।💢</h2>
                </Marquee>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nid" className="block text-gray-700">
                            NID Number:
                        </label>
                        <input
                            type="text"
                            id="nid"
                            value={servernid}
                            onChange={handleNidChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            placeholder="Enter NID Number"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="birthday" className="block text-gray-700">
                            Birthday:
                        </label>
                        <input
                            type="text"
                            id="birthday"
                            value={serverbirthday}
                            onChange={handleBirthdayChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            placeholder="YYYY-MM-DD"
                        />
                    </div>
                    <div className="flex gap-5">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Order Now
                    </button>
                    
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServerCopy;