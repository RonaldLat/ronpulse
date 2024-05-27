const load = ({ url }) => {
  const currentRoute = url.pathname;
  console.log(currentRoute);
  return {
    currentRoute
  };
};
export {
  load
};
