"use client"
import React, { useState } from 'react';

const WithdrawalForm = () => {
  const [withdrawableBalance, setWithdrawableBalance] = useState(0); // Example balance
  const [amount, setAmount] = useState('');
  const [isWithdrawalAvailable, setIsWithdrawalAvailable] = useState(false); // Set to false to show the non-interactive state

  const handleAmountChange = (e:any) => {
    setAmount(e.target.value);
  };

  const handleRequestWithdrawal = (e:any) => {
    e.preventDefault();
    // Logic for withdrawal drequest (e.g., API call)
    console.log('Withdrawal requested for amount:', amount);
  };

  return (
    <div className={`relative ${isWithdrawalAvailable ? '' : 'opacity-50 pointer-events-none'}`}>
      {/* Non-Interactive Overlay */}
      {!isWithdrawalAvailable && (
        <div className="absolute inset-0  bg-gray-500 opacity-50 flex items-center justify-center z-10">
          <h2 className="text-white p-[3rem] text-center text-3xl font-semibold">Withdrawals are currently unavailable plese check back later</h2>
        </div>
      )}

      <div className="max-w-lg h-[50rem] mx-auto p-6 bg-white rounded-lg shadow-lg">
        {/* Withdrawable Balance */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">Withdrawable Balance:</p>
          <div className="text-lg font-semibold text-blue-600">{withdrawableBalance} USD</div>
        </div>

        {/* Withdrawal Input */}
        <div className="mb-4">
          <label htmlFor="withdrawAmount" className="block text-sm text-gray-600">Amount to Withdraw:</label>
          <input
            id="withdrawAmount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter amount"
            disabled={!isWithdrawalAvailable}
          />
        </div>

        {/* Request Withdrawal Button */}
        <button
          onClick={handleRequestWithdrawal}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
          disabled={!isWithdrawalAvailable || !amount}
        >
          Request Withdrawal
        </button>
      </div>
    </div>
  );
};

export default WithdrawalForm;
