const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// 상태 확인용 엔드포인트
app.get('/api/health', (req, res) => {
    res.json({ status: 'running', message: 'Blossom Topper Automation Server is up.' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});