export const load = async ({ fetch }) => {
  let quote;
  try {
    const response = await fetch(`https://stoic-quotes.com/api/quote`);
    quote = await response.json();
  } catch (err) {
    console.log(err);
    quote = '';
  }

  return {
    quote
  };
};
