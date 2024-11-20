export async function fetchMenu() {
  const res = await fetch('https://reactpilotapi.blastdemo.com/menu-top-items.json');
  if (!res.ok) throw new Error('Errore nel recupero del menu');
  return res.json();
}

export async function fetchPage() {
  const res = await fetch('https://reactpilotapi.blastdemo.com/pages.json');
  if (!res.ok) throw new Error('Errore nel recupero della pagina');
  return res.json();
}
