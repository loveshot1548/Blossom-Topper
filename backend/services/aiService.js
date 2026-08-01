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
});const axios = require('axios');

// 1. 로컬 Ollama 호출 함수 (데이터 분석, 키워드 추출용)
async function callOllama(prompt) {
    try {
        const response = await axios.post('http://localhost:11434/api/generate', {
            model: 'llama3.1', // 설치된 모델명 입력
            prompt: prompt,
            stream: false
        });
        return response.data.response;
    } catch (error) {
        console.error('Ollama 연동 오류:', error.message);
        throw error;
    }
}

// 2. Google AI Studio (Gemini API) 호출 함수 (본문 및 홍보글 작성용)
async function callGemini(prompt, apiKey) {
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`;
        const response = await axios.post(url, {
            contents: [{ parts: [{ text: prompt }] }]
        });
        return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Gemini API 연동 오류:', error.message);
        throw error;
    }
}

module.exports = { callOllama, callGemini };