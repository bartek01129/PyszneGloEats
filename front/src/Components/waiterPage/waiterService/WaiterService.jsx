import { Stomp } from '@stomp/stompjs';
import { useEffect } from 'react';
import SockJS from 'sockjs-client';

export const ModalReceiver = (username, setMessage, token) => {
  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws');
    const stompClient = Stomp.over(socket);

    stompClient.connect({ Authorization: `Bearer ${token}` }, () => {
      stompClient.subscribe(`/topic/messages/${username}`, (msg) => {
        setMessage(JSON.parse(msg.body));
      });
    });
    return () => {
      stompClient.disconnect();
    };
  }, [username, setMessage, token]);
};
