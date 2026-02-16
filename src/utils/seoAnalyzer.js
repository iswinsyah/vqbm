
export const analyzeSEO = (content, title, keyword, slug) => {
    const checks = [];
    if (!keyword) return { score: 0, checks: [] };

    const lowerKeyword = keyword.toLowerCase();
    const lowerContent = content ? content.toLowerCase() : '';
    const lowerTitle = title ? title.toLowerCase() : '';
    const lowerSlug = slug ? slug.toLowerCase() : '';

    // 1. Keyword in Title
    if (lowerTitle.includes(lowerKeyword)) {
        checks.push({ status: 'pass', message: 'Kata kunci ada di Judul.' });
    } else {
        checks.push({ status: 'fail', message: 'Kata kunci TIDAK ditemukan di Judul.' });
    }

    // 2. Keyword in Slug
    if (lowerSlug.includes(lowerKeyword)) {
        checks.push({ status: 'pass', message: 'Kata kunci ada di URL (Slug).' });
    } else {
        checks.push({ status: 'warning', message: 'Kata kunci TIDAK ditemukan di URL.' });
    }

    // 3. Keyword in First Paragraph
    const firstParagraph = lowerContent.split('\n')[0] || '';
    if (firstParagraph.includes(lowerKeyword)) {
        checks.push({ status: 'pass', message: 'Kata kunci ada di paragraf pertama.' });
    } else {
        checks.push({ status: 'warning', message: 'Kata kunci sebaiknya ada di awal konten.' });
    }

    // 4. Content Length
    const wordCount = content ? content.split(/\s+/).length : 0;
    if (wordCount >= 300) {
        checks.push({ status: 'pass', message: `Panjang konten bagus (${wordCount} kata).` });
    } else {
        checks.push({ status: 'warning', message: `Konten terlalu pendek (${wordCount} kata). Minimal 300 kata.` });
    }

    // Calculate Score
    const passed = checks.filter(c => c.status === 'pass').length;
    const score = Math.round((passed / checks.length) * 100);

    return { score, checks };
};

export const analyzeReadability = (content) => {
    const checks = [];
    if (!content) return { score: 0, checks: [] };

    // 1. Paragraph Length
    const paragraphs = content.split('\n').filter(p => p.trim().length > 0);
    const longParagraphs = paragraphs.filter(p => p.split(/\s+/).length > 150);

    if (longParagraphs.length === 0) {
        checks.push({ status: 'pass', message: 'Panjang paragraf bagus.' });
    } else {
        checks.push({ status: 'warning', message: `${longParagraphs.length} paragraf terlalu panjang (>150 kata).` });
    }

    // 2. Sentence Length (Approximation)
    // Splitting by . ! ?
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const longSentences = sentences.filter(s => s.split(/\s+/).length > 20);
    const longSentencePercentage = (longSentences.length / sentences.length) * 100;

    if (longSentencePercentage <= 25) {
        checks.push({ status: 'pass', message: 'Panjang kalimat bagus.' });
    } else {
        checks.push({ status: 'warning', message: `${Math.round(longSentencePercentage)}% kalimat terlalu panjang (>20 kata).` });
    }

    // 3. Subheading Distribution
    // Check if there are content blocks > 300 words without subheadings
    // Rough check: length of text / number of headings (if we assume markdown #)
    // Since we use textarea, we check for newlines that look like headings or just length
    // For now, simpler check: Total words vs paragraphs/breaks
    // Better check: If content > 300 words, needs at least one subheading (assumed visual break or markdown)
    // Since we don't have a rich text editor yet, we'll skip complex subheading check or assume double newline is a break.

    const wordCount = content.split(/\s+/).length;
    if (wordCount > 300) {
        checks.push({ status: 'warning', message: 'Artikel panjang sebaiknya menggunakan Sub-judul (Heading) untuk memecah teks.' });
    } else {
        checks.push({ status: 'pass', message: 'Struktur konten cukup baik.' });
    }

    const passed = checks.filter(c => c.status === 'pass').length;
    const score = Math.round((passed / checks.length) * 100);

    return { score, checks };
};
