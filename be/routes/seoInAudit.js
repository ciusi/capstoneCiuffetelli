const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router();
const auth = require('../middleware/auth');
const SeoInAudit = require('../models/SeoInAudit');

// Extended list of common stop words in Italian and JavaScript code words to exclude
const stopWords = new Set([
  'div', 'class', 'id', 'data', 'type', 'widget', 'container', 'async', 'role', 'group', 'element', 'swiper', 'slide', 'elementor',
  'a', 'ad', 'al', 'allo', 'ai', 'agli', 'all', 'agl', 'alla', 'alle', 'con', 'col', 'coi', 'da', 'dal', 'dallo', 'dai', 'dagli', 'dall', 'dagl', 'dalla', 'dalle', 'di', 'del', 'dello', 'dei', 'degli', 'dell', 'degl', 'della', 'delle', 'in', 'nel', 'nello', 'nei', 'negli', 'nell', 'negl', 'nella', 'nelle', 'su', 'sul', 'sullo', 'sui', 'sugli', 'sull', 'sugl', 'sulla', 'sulle', 'per', 'tra', 'contro', 'io', 'tu', 'lui', 'lei', 'noi', 'voi', 'loro', 'mio', 'mia', 'miei', 'mie', 'tuo', 'tua', 'tuoi', 'tue', 'suo', 'sua', 'suoi', 'sue', 'nostro', 'nostra', 'nostri', 'nostre', 'vostro', 'vostra', 'vostri', 'vostre', 'mi', 'ti', 'ci', 'vi', 'lo', 'la', 'li', 'le', 'gli', 'ne', 'il', 'un', 'uno', 'una', 'ma', 'ed', 'se', 'perché', 'anche', 'come', 'dov', 'dove', 'che', 'chi', 'cui', 'non', 'quale', 'quanto', 'quanti', 'quanta', 'quante', 'quello', 'quelli', 'quella', 'quelle', 'questo', 'questi', 'questa', 'queste', 'si', 'tutto', 'tutti', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
  'avere', 'essere', 'fare', 'dire', 'venire', 'andare', 'potere', 'volere', 'sapere', 'stare', 'dovere', 'vedere', 'parlare', 'pensare', 'lavorare',
  'var', 'function', 'const', 'timeout', 'width', 'height', 'true', 'false', 'let', 'document', 'window', 'return', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'typeof', 'new', 'null', 'undefined', 'this'
]);

router.post('/seo-in-audit', auth, async (req, res) => {
  const { url } = req.body;

  try {
    const results = await performSeoAnalysis(url);

    const newAuditResult = new SeoInAudit({
      url,
      results,
      user: req.user.id
    });

    await newAuditResult.save();

    res.json({ results });
  } catch (error) {
    console.error('Error fetching SEO-in results:', error);
    res.status(500).json({ error: error.message });
  }
});

async function performSeoAnalysis(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const protocol = url.startsWith('https') ? 'https' : 'http';
    const keywordSummary = getTopKeywords($('body').text(), 10);
    const title = $('title').text();
    const description = $('meta[name="description"]').attr('content') || '';
    const h1 = $('h1').map((i, el) => $(el).text()).get();
    const h2 = $('h2').map((i, el) => $(el).text()).get();

    const metaTags = {
      title,
      description,
      analysis: {
        title: {
          present: !!title,
          quality: title.length > 60 ? 'too long' : title.length < 10 ? 'too short' : 'good',
          readability: calculateReadability(title)
        },
        description: {
          present: !!description,
          quality: description.length > 160 ? 'too long' : description.length < 50 ? 'too short' : 'good',
          readability: calculateReadability(description),
          keywordDensity: calculateKeywordDensity(description, keywordSummary)
        }
      }
    };

    const headings = {
      h1,
      h2,
      analysis: {
        h1: {
          tooMany: h1.length > 1,
          empty: h1.some(text => !text.trim())
        },
        h2: {
          empty: h2.some(text => !text.trim())
        }
      }
    };

    return {
      protocol,
      keywordSummary,
      metaTags,
      headings
    };
  } catch (error) {
    console.error('Error performing SEO analysis:', error);
    throw new Error('Error performing SEO analysis');
  }
}

function calculateKeywordDensity(text, keywords) {
  const words = text.toLowerCase().split(/\s+/);
  const keywordDensity = {};
  keywords.forEach(({ keyword }) => {
    keywordDensity[keyword] = words.filter(word => word === keyword).length;
  });
  return keywordDensity;
}

function calculateReadability(text) {
  if (!text) return 'N/A';
  const words = text.split(' ').length;
  if (words < 5) return 'too short';
  if (words > 15) return 'too long';
  return 'good';
}

function getTopKeywords(text, limit) {
  const cleanedText = text
    .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '') // Remove tag <script>
    .replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, '') // Remove tag <style>
    .replace(/<[^>]+>/g, '') // Remove tag HTML
    .replace(/https?:\/\/[^\s]+/g, '') // Remove URL
    .replace(/&[^\s;]+;/g, '') // Remove HTML special characters
    .replace(/[^a-zA-ZàèéìòùÀÈÉÌÒÙ\s]/g, ''); // Remove everything except letters and spaces

  const words = cleanedText.toLowerCase().split(/\s+/);

  const wordCount = {};
  words.forEach(word => {
    if (word.length > 2 && !stopWords.has(word)) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  });

  const sortedWords = Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([keyword, count]) => ({ keyword, count }));

  return sortedWords;
}

module.exports = router;
