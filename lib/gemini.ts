export async function generateSummary(blog: string) {
  const apiKey = process.env.GEMINI_API_KEY!;
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Summarize this blog:\n\n${blog}`
              }
            ]
          }
        ]
      })
    });

    const data = await res.json();
    console.log("🔍 Gemini Response:", JSON.stringify(data, null, 2));

    if (data.error) {
      console.error("❌ Gemini API Error:", data.error.message);
      return `Error: ${data.error.message}`;
    }

    const summary =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Error generating summary.';

    return summary;

  } catch (error: any) {
    console.error("🚨 Fetch Error:", error.message);
    return 'Error calling Gemini API.';
  }
}
