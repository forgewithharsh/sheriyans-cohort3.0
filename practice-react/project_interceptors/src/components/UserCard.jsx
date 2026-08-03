import React from "react";
import { Mail, Phone, MapPin, User } from "lucide-react";

const UserCard = ({ user }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-2xl font-bold uppercase">
          {user.name.firstname[0]}
          {user.name.lastname[0]}
        </div>

        <h2 className="mt-4 text-2xl font-bold capitalize">
          {user.name.firstname} {user.name.lastname}
        </h2>

        <p className="text-sm opacity-90">@{user.username}</p>
      </div>

      {/* Body */}
      <div className="space-y-4 p-6">
        <div className="flex items-center gap-3">
          <Mail size={18} className="text-blue-600" />
          <span className="text-gray-700">{user.email}</span>
        </div>

        <div className="flex items-center gap-3">
          <Phone size={18} className="text-green-600" />
          <span className="text-gray-700">{user.phone}</span>
        </div>

        <div className="flex items-start gap-3">
          <MapPin size={18} className="mt-1 text-red-500" />
          <div>
            <p className="font-medium capitalize">{user.address.city}</p>
            <p className="text-sm text-gray-500 capitalize">
              {user.address.street}, {user.address.number}
            </p>
            <p className="text-sm text-gray-500">ZIP: {user.address.zipcode}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <User size={18} className="text-purple-600" />
          <span className="text-gray-700">ID: {user.id}</span>
        </div>

        <button className="mt-4 w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
