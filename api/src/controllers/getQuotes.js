const axios = require("axios");

const getApiQuotes = async () => {
  const apiurl = await axios.get("https://breakingbadapi.com/api/quotes");
  const apiQuotes = await apiurl.data.map((el) => {
    return {
      quote_id: el.quote_id,
      quote: el.quote,
      name:
        el.author === "Gus Fring"
          ? "Gustavo Fring"
          : el.author && el.author === "Hank Schrader"
          ? "Henry Schrader"
          : el.author,
      series: el.series,
    };
  });
  const QuotesFilter = apiQuotes.filter((e) => e.series === "Breaking Bad");
  const quotes = QuotesFilter.map((el) => {
    return {
      quotes: el.name,
      name: el.name,
    };
  });

  return quotes;
};

module.exports = getApiQuotes;
