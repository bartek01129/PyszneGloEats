import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import './WaiterService.css';

const WaiterService = ({ username }) => {
  const [message, setMessage] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [code, setCode] = useState('');
  const [pickUpCode, setPickUpCode] = useState('');

  const handelPickUp = async (e) => {
    e.preventDefault();
    await pickUpOrder(orderId, pickUpCode, setMessage, code);
  };

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws');
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      stompClient.subscribe(`/topic/messages/${username}`, (msg) => {
        const messageBody = JSON.parse(msg.body);
        setMessage(true);
        setOrderId(messageBody.id);
        setCode(messageBody.pickUpCode);
      });
    });

    return () => {
      stompClient.disconnect();
    };
  }, [username]);

  return (
    <>
      {message && (
        <div className="loading-overlay">
          <div className="h4 ">Twoje zamówienie jest gotowe do odbioru!</div>
          <div className="h5">Podaj kod</div>
          <form
            className="form-inline waiter-form"
            onSubmit={() => handelPickUp}
          >
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="text"
                className="form-control"
                id="inputPassword2"
                placeholder="Kod odbioru"
                onChange={(e) => setPickUpCode(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              Confirm identity
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default WaiterService;

export const pickUpOrder = async (id, pickUpCode, setMessage, code) => {
  const token = localStorage.getItem('token');

  const API_URL = 'http://localhost:8080/guest/order/pickup';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id, pickUpCode }),
    });

    if (response.ok) {
      if (pickUpCode == code) {
        console.log(code + 'code');
        console.log(pickUpCode + 'pickUpCode');
        setMessage(false);
      }
    } else {
      throw new Error('Failed to register');
    }
  } catch (e) {
    console.log('Error ' + e);
  }
};
