// src/routes/+layout.js
export const load = ({ url }) => {
  const currentRoute = url.pathname;
  console.log(currentRoute);

  return {
    currentRoute
  };
};
