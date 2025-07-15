const API_BASE = 'http://localhost:3333';

export interface Resource {
  id: number;
  title: string;
  description: string;
  type: string;
}

export interface Incident {
  id?: number;
  date: string;
  location: string;
  description: string;
  severity: string;
}

export async function getResources(): Promise<Resource[]> {
  const response = await fetch(`${API_BASE}/resources`);
  if (!response.ok) throw new Error('Erro ao buscar recursos');
  return response.json();
}

export async function getIncidents(): Promise<Incident[]> {
  const response = await fetch(`${API_BASE}/incidents`);
  if (!response.ok) throw new Error('Erro ao buscar incidentes');
  return response.json();
}

export async function reportIncident(
  data: Omit<Incident, 'id'>
): Promise<Incident> {
  const response = await fetch(`${API_BASE}/incidents`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Erro ao enviar denúncia');
  return response.json();
}