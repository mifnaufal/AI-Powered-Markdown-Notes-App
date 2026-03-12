Hai Al, berikut rencana detail project **AI-Powered Markdown Notes App** tanpa coding, disusun untuk efisiensi pengembangan dan nilai interview.

### 1. Persiapan Infrastruktur
*   **Repository:** Buat mono-repo atau separate repo (frontend/backend).
*   **Environment:**
    *   Siapkan `.env` untuk `OPENAI_API_KEY`, `PORT`, `CLIENT_URL`.
    *   Pastikan Node.js & npm terinstall.
*   **Dependencies:**
    *   Backend: `express`, `cors`, `dotenv`, `openai`, `express-rate-limit`.
    *   Frontend: `react`, `axios`, `react-markdown`, `remark-gfm`.

### 2. Pengembangan Backend (Express)
*   **Server Setup:** Inisialisasi Express, middleware CORS, dan JSON parser.
*   **OpenAI Service:**
    *   Buat modul khusus untuk koneksi OpenAI.
    *   Definisi template prompt (Summarize, Rewrite, Simplify).
*   **API Routes:**
    *   `POST /api/ai/summarize`: Terima teks, kembalikan ringkasan.
    *   `POST /api/ai/rewrite`: Terima teks + gaya, kembalikan tulisan ulang.
*   **Security:**
    *   Implementasi `express-rate-limit` (cegah spam API).
    *   Validasi input (pastikan teks tidak kosong/terlalu panjang).
*   **Error Handling:** Global error handler untuk catch error OpenAI/Server.

### 3. Pengembangan Frontend (React)
*   **Komponen UI:**
    *   `Editor`: Textarea untuk input Markdown.
    *   `Preview`: Render hasil Markdown ke HTML.
    *   `Toolbar`: Tombol aksi (Summarize, Rewrite, Save).
    *   `Status`: Indikator loading & notifikasi error.
*   **State Management:**
    *   `content`: Isi catatan.
    *   `preview`: Hasil render.
    *   `loading`: Status request AI.
    *   `error`: Pesan error.
*   **API Service:**
    *   Buat fungsi helper (`api.js`) untuk hit endpoint backend.
    *   Handle response & error secara global.
*   **Styling:** Gunakan CSS modular atau Tailwind untuk layout split-screen (Editor | Preview).

### 4. Integrasi & Testing
*   **Koneksi:** Pastikan Frontend bisa hit Backend (cek CORS).
*   **Flow Testing:**
    *   Test input kosong (validasi).
    *   Test response lambat (loading state).
    *   Test error API (network down/key invalid).
*   **UX Improvement:**
    *   Tambahkan tombol "Copy to Clipboard".
    *   Tambahkan opsi "Replace Content" setelah AI selesai.

### 5. Deployment & Portfolio
*   **Backend:** Deploy ke Render/Railway (pastikan env var aman).
*   **Frontend:** Deploy ke Vercel/Netlify.
*   **Dokumentasi (Penting untuk Interview):**
    *   `README.md`: Struktur project, cara run, diagram arsitektur.
    *   `Live Demo`: Link aplikasi yang bisa diakses.
    *   `Case Study`: Jelaskan tantangan (misal: handling rate limit) & solusi.

### 6. Manajemen Risiko
*   **Biaya API:** Batasi panjang karakter input untuk kontrol token OpenAI.
*   **Latency:** Tampilkan skeleton loader saat menunggu response AI.
*   **Data Privacy:** Jangan simpan data sensitif user di log backend.

### 7. Estimasi Waktu (Pribadi)
*   **Setup & Backend:** 1-2 Hari.
*   **Frontend UI:** 2-3 Hari.
*   **Integrasi & Refine:** 1-2 Hari.
*   **Deploy & Docs:** 1 Hari.
*   **Total:** ~1 Minggu (Part-time).

Plan ini fokus pada arsitektur bersih dan keamanan, poin plus saat interview. Selamat mengerjakan, Al!