// src/pages/LoginPage.js

import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import AuthForm from '../components/forms/AuthForm';

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12">
        <AuthForm />
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;