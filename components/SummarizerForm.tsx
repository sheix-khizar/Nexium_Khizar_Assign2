'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function SummarizerForm() {
  const [blogText, setBlogText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    const res = await fetch('/api/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blog: blogText })
    });

    const data = await res.json();
    setSummary(data.summary);
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4 mt-8">
      <Textarea
        placeholder="Paste blog content here..."
        value={blogText}
        onChange={(e) => setBlogText(e.target.value)}
        className="h-40"
      />
      <Button onClick={handleSummarize} disabled={loading}>
        {loading ? 'Summarizing...' : 'Summarize'}
      </Button>

      {summary && (
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <h2 className="font-bold mb-2">Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
