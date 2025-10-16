import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logout berhasil 👋");
    navigate("/");
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl font-bold mb-4">Selamat Datang di Dashboard 🎉</h1>
      <p className="mb-6">Kamu berhasil login sebagai <strong>admin@gmail.com</strong></p>
      <button
        onClick={handleLogout}
        className="bg-white text-green-700 font-semibold py-2 px-6 rounded-lg hover:bg-green-100 transition-all"
      >
        Logout
      </button>
    </motion.div>
  );
};

export default Dashboard;
