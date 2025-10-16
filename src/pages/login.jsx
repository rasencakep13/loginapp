import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulasi cek login (seolah dari server)
    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "123456") {
        alert("Login berhasil 🎉");
        navigate("/dashboard");
      } else {
        alert("Email atau password salah ❌");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="bg-white/20 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full max-w-md"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
      >
        <motion.img
          src={logo}
          alt="Logo"
          className="w-20 h-20 mx-auto mb-4 drop-shadow-lg"
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="text-2xl sm:text-3xl font-bold text-center text-white mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Selamat Datang 👋
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg border border-white/40 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60 w-full text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg border border-white/40 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60 w-full text-sm sm:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className={`${
              loading ? "bg-gray-300 text-gray-600" : "bg-white text-purple-600"
            } font-semibold py-3 rounded-lg hover:bg-purple-100 transition-all duration-200 text-sm sm:text-base`}
          >
            {loading ? "Memproses..." : "Login"}
          </motion.button>
        </motion.form>

        <motion.p
          className="text-center text-white/80 mt-4 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Belum punya akun?{" "}
          <a href="#" className="underline">
            Daftar
          </a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Login;
