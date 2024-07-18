// src/components/Payment.js
import React, { useContext, useState } from 'react';
import { Web3Context } from '../context/Web3Context';

const Payment = ({ amount }) => {
  const { web3, account } = useContext(Web3Context);
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = async () => {
    if (web3 && account) {
      try {
        const usdtAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; // USDT contract address
        const usdtAbi = [ /* USDT ABI */ ];

        const contract = new web3.eth.Contract(usdtAbi, usdtAddress);
        const amountInWei = web3.utils.toWei(amount.toString(), 'mwei'); // USDT has 6 decimals

        await contract.methods.transfer('recipient_address', amountInWei).send({ from: account });
        setPaymentStatus('Payment successful!');
      } catch (error) {
        setPaymentStatus('Payment failed. Please try again.');
        console.error(error);
      }
    } else {
      setPaymentStatus('Web3 not initialized. Please install MetaMask and connect your wallet.');
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay {amount} USDT</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default Payment;
