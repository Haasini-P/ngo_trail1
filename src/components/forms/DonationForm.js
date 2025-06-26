import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import Modal from '../common/Modal'; // Make sure this is imported

const DonationForm = () => {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleDonate = () => {
    setLoading(true);
    // Simulate Razorpay API call
    console.log(`Initiating donation for $${amount}`);
    setTimeout(() => {
      setLoading(false);
      setShowSuccessModal(true);
      // In a real app, you would only show success after Razorpay confirms payment
    }, 2000); 
  };

  const amounts = [10, 25, 50, 100];

  return (
    <>
      <div className="card-base p-8 max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center text-dark mb-6">Make a Donation</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {amounts.map(val => (
            <button 
              key={val} 
              onClick={() => { setAmount(val); setCustomAmount(''); }}
              className={`py-3 px-4 rounded-md font-semibold transition-colors duration-200 ${amount === val ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              ${val}
            </button>
          ))}
        </div>
        <div className="mb-6">
          <label htmlFor="customAmount" className="block text-secondary font-semibold mb-2">Or Enter Custom Amount</label>
          <input 
            type="number" 
            id="customAmount"
            value={customAmount}
            onChange={(e) => { setCustomAmount(e.target.value); setAmount(Number(e.target.value)); }}
            placeholder="$75"
            className="input-field"
          />
        </div>
        <button 
          onClick={handleDonate}
          disabled={loading}
          className="w-full btn-accent flex items-center justify-center disabled:opacity-50"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin mr-2" />
              Processing...
            </>
          ) : 'Donate Now with Razorpay'}
        </button>
      </div>
      
      <Modal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} title="Thank You!">
        <div className="text-center">
            <p className="text-secondary mb-4">Your generous donation has been received. We are incredibly grateful for your support!</p>
            <button onClick={() => setShowSuccessModal(false)} className="btn-primary">
              Close
            </button>
        </div>
      </Modal>
    </>
  );
};

export default DonationForm;