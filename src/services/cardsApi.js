export const postCard = async (card) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/cards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'applications/json'
    },
    body: JSON.stringify(card)
  })
  const json = await res.json();
  if (!res.ok) throw json;

  return json;
};

export const getCards = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/cards`);
  const json = await res.json();
  if (!res.ok) throw json;

  return json;
}

export const deleteCard = async (id) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/cards/${id}`, {
    method: 'DELETE'
  });

  const json = await res.json();
  if (!res.ok) throw json;

  return json;
};
