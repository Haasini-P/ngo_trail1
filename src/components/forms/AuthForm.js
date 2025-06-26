import React, { useState } from 'react';
import QRCodeId from '../features/QRCodeId';
import FaceRecognitionLogin from '../features/FaceRecognitionLogin';
import Modal from '../common/Modal';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginMethod, setLoginMethod] = useState(null); // 'qr', 'face'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle standard email/password login/register
    console.log('Form submitted');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? 'Admin Login' : 'Register Staff'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input type="text" required className="w-full px-4 py-2 border rounded-md" />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" required className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input type="password" required className="w-full px-4 py-2 border rounded-md" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      
      <div className="text-center mt-4">
        <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:underline">
          {isLogin ? 'Need to register a new staff member?' : 'Already have an account? Login'}
        </button>
      </div>

      <div className="my-6 border-t border-gray-300"></div>

      <div className="space-y-4">
        <button 
          onClick={() => setLoginMethod('qr')}
          className="w-full bg-gray-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800"
        >
          Login with QR Code
        </button>
        <button 
          onClick={() => setLoginMethod('face')}
          className="w-full bg-gray-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800"
        >
          Login with Face Recognition
        </button>
      </div>

      <Modal isOpen={loginMethod === 'qr'} onClose={() => setLoginMethod(null)} title="Scan QR Code ID">
        <QRCodeId isScanner={true} />
      </Modal>

      <Modal isOpen={loginMethod === 'face'} onClose={() => setLoginMethod(null)} title="Face Recognition Login">
        <FaceRecognitionLogin />
      </Modal>
    </div>
  );
};

export default AuthForm;