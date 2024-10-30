import React from 'react';

export default function ServiceCard({ title, description, icon: Icon, bgColor }) {
  return (
    <div className={`${bgColor} rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105`}>
      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-green-700" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-green-50">{description}</p>
      <button className="mt-4 bg-white text-green-700 px-4 py-2 rounded-md hover:bg-green-50 transition-colors">
        Learn More
      </button>
    </div>
  );
}