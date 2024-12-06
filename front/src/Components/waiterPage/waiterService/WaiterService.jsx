import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import './WaiterService.css';

const WaiterService = ({ username }) => {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws');
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      stompClient.subscribe(`/topic/messages/${username}`, (msg) => {
        console.log('Received message:', msg.body);
        setMessage(true);
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
          <form className="form-inline waiter-form">
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="text"
                className="form-control"
                id="inputPassword2"
                placeholder="Kod odbioru"
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
