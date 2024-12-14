import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import './WaiterService.css';
import { propTypes } from 'react-bootstrap/esm/Image';

const WaiterService = ({ username }) => {
  const [message, setMessage] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [code, setCode] = useState('');
  const [pickUpCode, setPickUpCode] = useState('');

  const handelPickUp = async (e) => {
    e.preventDefault();
    if (code == pickUpCode) {
      await pickUpOrder(orderId, pickUpCode, setMessage, code);
      setMessage(false);
      window.location.reload();
    } else {
      alert('kod odbioru jest nieprawudłowy');
    }
  };

  useEffect(() => {
    const socket = new SockJS(`${import.meta.env.VITE_SOCKJS}/ws`);
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
          <form className="form-inline waiter-form" onSubmit={handelPickUp}>
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

const pickUpOrder = async (id, pickUpCode) => {
  const token = localStorage.getItem('token');

  const API_URL = import.meta.env.VITE_WAITER_PICKUP;

  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id, pickUpCode }),
    });
  } catch (e) {
    console.log('Error ' + e);
  }
};

WaiterService.propTypes = {
  username: propTypes.string,
};
