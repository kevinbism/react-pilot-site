export async function fetchMenu() {
  const res = await fetch('https://reactpilotapi.blastdemo.com/menu-top-items.json', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  if (!res.ok) throw new Error('Errore nel recupero del menu');
  return res.json();
}

export async function fetchPage() {
  const res = await fetch('https://reactpilotapi.blastdemo.com/pages.json', {
    method: 'GET',
  });
  if (!res.ok) throw new Error('Errore nel recupero della pagina');
  return res.json();
}
