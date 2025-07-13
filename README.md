# 🧠 Simple Blog Summarizer using Free Gemini API

This is a **simple AI blog summarizer** project created using:

- ✅ Free **Gemini API** (from Google AI Studio)
- ✅ **Next.js**
- ✅ **TypeScript**
- ✅ **Tailwind CSS**

You paste any blog or article, and the app gives you a short AI-generated summary.

---

## 🔧 What I Used

- **Next.js** – for building the frontend and backend
- **TypeScript** – for better code safety
- **Tailwind CSS** – for styling
- **Gemini API** – to generate blog summaries using AI (free API from Google)

---

## 📦 Project Structure (Simple)

```
blog-summarizer/
├── app/
│   ├── page.tsx                # Main page with form
│   └── api/summarize/route.ts  # API route to call Gemini
├── components/
│   └── SummarizerForm.tsx      # Input form UI
├── lib/
│   └── summarizer.ts           # Calls Gemini API
├── .env.local                  # API key stored here
└── tailwind.config.ts
```

---

## 🌐 How It Works

1. User pastes a blog or text into the form.
2. When user clicks “Summarize”, the app sends the text to `/api/summarize`.
3. This route sends a request to the **Gemini API**.
4. The AI returns a summary, and the app displays it.

---

## 🛠️ Setup Instructions

### 1. Clone this repo

```bash
git clone https://github.com/sheix-khizar/Nexium_Khizar_Assign2.git
cd blog-summarizer
```

### 2. Install packages

```bash
npm install
```

### 3. Add your Gemini API key

Create a file named `.env.local` and paste this:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

> You can get your **free Gemini API key** from:  
> [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)

### 4. Run the project locally

```bash
npm run dev
```

Go to `http://localhost:3000` in your browser.

---


## 📌 Notes

- This is a beginner-friendly, small AI project.
- It uses **Google Gemini API for free**, so no payment is needed.
- Only basic features are included for learning purposes.

---

## 🙌 Made By

**Sheikh Muhammad Khizar**  
Software Engineer  
Built this to learn AI + Next.js integration 💻🤖 using TypeScript...
