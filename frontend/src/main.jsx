import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"; // 이렇게 수정하면 .js나 .jsx 둘 다 찾아냅니다!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)