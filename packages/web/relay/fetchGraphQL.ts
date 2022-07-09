export const fetchGraphQL = async (text, variables) => {
  const response = await fetch("http://localhost:3333/", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  const data = await response.json();

  return data;
};
