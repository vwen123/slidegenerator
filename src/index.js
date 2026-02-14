import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 注意：这里的 App 必须对应 src 文件夹里的 App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
