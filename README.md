# 🚀 AI-Powered Markdown Notes App

Aplikasi pencatatan cerdas dengan integrasi AI untuk merangkum dan menulis ulang catatan menggunakan **Markdown**. Dibangun dengan arsitektur fullstack modern untuk demonstrasi kemampuan pengembangan web profesional.

![Status](https://img.shields.io/badge/status-completed-success)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Tech Stack](#-tech-stack)
- [Arsitektur Sistem](#-arsitektur-sistem)
- [Instalasi & Setup](#-instalasi--setup)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Skills yang Ditunjukkan](#-skills-yang-ditunjukkan)
- [Kontak](#-kontak)

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 📝 **Markdown Editor** | Editor real-time dengan preview langsung |
| 🤖 **AI Summarize** | Rangkum catatan panjang menjadi poin-poin penting |
| ✍️ **AI Rewrite** | Tulis ulang catatan dengan berbagai gaya (Formal, Casual, Academic) |
| 💾 **Auto-Save** | Penyimpanan otomatis ke LocalStorage |
| 📱 **Responsive UI** | Tampilan optimal untuk Mobile, Tablet, dan Desktop |
| ⚡ **Real-time Stats** | Word count, character count, dan estimasi waktu baca |
| 🔒 **Rate Limiting** | Proteksi dari spam request API |
| ⚠️ **Error Handling** | Notifikasi error yang user-friendly dengan retry mechanism |

---

## 🛠️ Tech Stack

### Frontend
```
React 18+
Vite
Tailwind CSS v4
Axios
React Markdown
```

### Backend
```
Node.js
Express.js
OpenAI API (GPT-3.5-turbo)
express-rate-limit
dotenv
CORS
```

### Tools & Libraries
```
remark-gfm (GitHub Flavored Markdown)
@tailwindcss/typography
PostCSS
Autoprefixer
```

---

## 🏗️ Arsitektur Sistem

```
┌─────────────────┐
│   React         │
│   Frontend      │
│   (Vite + Tailwind) │
└────────┬────────┘
         │ HTTP/REST
         ▼
┌─────────────────┐
│   Express       │
│   Backend       │
│   (Node.js)     │
└────────┬────────┘
         │ API Request
         ▼
┌─────────────────┐
│   OpenAI        │
│   GPT Model     │
└─────────────────┘
```

### Struktur Folder
```
AI-Powered Markdown Notes App/
├── backend/
│   ├── config/
│   │   ├── openai.js
│   │   └── rateLimit.js
│   ├── controllers/
│   │   └── aiController.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── validateInput.js
│   ├── routes/
│   │   └── aiRoutes.js
│   ├── services/
│   │   └── openaiService.js
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Editor.jsx
│   │   │   ├── Preview.jsx
│   │   │   ├── Toolbar.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── ErrorBanner.jsx
│   │   │   └── Notification.jsx
│   │   ├── hooks/
│   │   │   ├── useNotification.js
│   │   │   ├── useNoteContent.js
│   │   │   ├── useError.js
│   │   │   └── useApi.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## 📦 Instalasi & Setup

### Prerequisites
- Node.js v18+
- npm atau yarn
- OpenAI API Key

### 1. Clone Repository
```bash
git clone <repository-url>
cd AI-Powered-Markdown-Notes-App
```

### 2. Setup Backend
```bash
cd backend
npm install

# Buat file .env
echo "PORT=5000" > .env
echo "OPENAI_API_KEY=your-api-key" >> .env
echo "CLIENT_URL=http://localhost:5173" >> .env

# Jalankan server
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend
npm install

# Buat file .env
echo "VITE_API_URL=http://localhost:5000/api" > .env

# Jalankan development server
npm run dev
```

### 4. Akses Aplikasi
Buka browser dan akses: `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint | Deskripsi | Body |
|--------|----------|-----------|------|
| `GET` | `/` | Health check | - |
| `POST` | `/api/ai/summarize` | Merangkum teks | `{ "text": "..." }` |
| `POST` | `/api/ai/rewrite` | Menulis ulang teks | `{ "text": "...", "style": "formal" }` |

### Response Format
```json
{
  "result": "AI generated content here"
}
```

### Error Response
```json
{
  "error": "Error message description"
}
```

---

## 📸 Screenshots

> *Tambahkan screenshot aplikasi di sini*

| Desktop View | Mobile View |
|--------------|-------------|
| ![Desktop](./screenshots/desktop.png) | ![Mobile](./screenshots/mobile.png) |

---

## 💡 Skills yang Ditunjukkan

### Frontend Development
- ✅ React Component Architecture
- ✅ Custom Hooks (useState, useCallback, useMemo)
- ✅ State Management Pattern
- ✅ Responsive Design (Mobile-First)
- ✅ Tailwind CSS Utility-First Styling
- ✅ API Integration dengan Axios
- ✅ Error Boundary & Loading States

### Backend Development
- ✅ RESTful API Design
- ✅ Express.js Middleware Pattern
- ✅ Environment Variable Security
- ✅ Input Validation & Sanitization
- ✅ Rate Limiting Implementation
- ✅ Global Error Handling
- ✅ CORS Configuration

### AI Integration
- ✅ OpenAI API Integration
- ✅ Prompt Engineering
- ✅ Streaming Response Handling
- ✅ Token Management
- ✅ AI Error Recovery

### Engineering Best Practices
- ✅ Separation of Concerns
- ✅ Clean Code Principles
- ✅ Modular Architecture
- ✅ Error Handling Strategy
- ✅ Code Reusability (Custom Hooks)
- ✅ Performance Optimization (Memoization)

---

## 🎯 Tantangan & Solusi

| Tantangan | Solusi |
|-----------|--------|
| API Rate Limiting | Implementasi express-rate-limit di backend |
| Loading State Management | Per-operation tracking dengan object state |
| Error User Experience | Error banner dengan retry mechanism |
| Markdown Rendering | react-markdown + remark-gfm untuk GFM support |
| Responsive Layout | Tailwind breakpoints (sm, md, lg, xl) |
| Data Persistence | LocalStorage dengan auto-save debounce |

---

## 🚀 Future Improvements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication (JWT)
- [ ] Note sharing & collaboration
- [ ] Export to PDF/DOCX
- [ ] Dark mode toggle
- [ ] Multiple note management
- [ ] Cloud sync (Firebase/AWS)

---

## 📄 License

MIT License - feel free to use this project for learning purposes.

---

## 📧 Kontak

**Nama:** Al  
**Email:** [your-email@example.com]  
**LinkedIn:** [linkedin.com/in/yourprofile]  
**GitHub:** [github.com/yourusername]  
**Portfolio:** [your-portfolio-url.com]

---

**Made with ❤️ using React + Express + OpenAI**
⭐ Star this repo if you find it helpful!
