import React, { useEffect, useState } from "react";
import { LogOut } from "lucide-react";


const ProfileSection = () => {
  const [data, setData] = useState(null);
  
    
  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  if (!data) {
    return <p className="text-white">Loading...</p>;
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("data");
    setData(null); 
  };


  return (
    <div className="bg-gray-800 rounded-t-2xl shadow-xl overflow-hidden mb-8">
      <div className="h-40 bg-gradient-to-r from-red-500 to-gray-800 relative"></div>
      <div className="px-6 py-6 flex flex-col md:flex-row md:items-end gap-6 relative">
        <div className="absolute -top-16 left-6 w-24 h-24 rounded-full border-4 border-gray-800 bg-gray-800 overflow-hidden">
          <img
            src={data.user.user_metadata.avatar_url}
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:ml-28 flex-grow">
          <h1 className="text-2xl font-bold text-white">
            {data.user.user_metadata.full_name}
          </h1>
          <p className="text-gray-400">{data.user.user_metadata.email}</p>
        </div>
        <div>
          <button className="border border-gray-500 text-gray-400 hover:text-red-500 hover:border-red-500 rounded-lg py-2 px-4 flex items-center gap-2 cursor-pointer" onClick={handleSignOut}>
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
