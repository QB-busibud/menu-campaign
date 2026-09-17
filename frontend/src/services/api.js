const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function fetchJSON(url, options = {}) {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`[API] Fallback for ${url}:`, err.message);
    return null;
  }
}

export const api = {
  getWorksheets: async () => {
    const res = await fetchJSON(`${BASE_URL}/worksheets`);
    return res?.data;
  },
  getWorksheetLeads: async (wsId, search = '') => {
    const res = await fetchJSON(`${BASE_URL}/worksheets/${wsId}/leads?search=${encodeURIComponent(search)}`);
    return res?.data;
  },
  getAnalytics: async (timeframe = 'all_time') => {
    const res = await fetchJSON(`${BASE_URL}/campaigns/analytics?timeframe=${timeframe}`);
    return res?.data;
  },
  getMetricCampaigns: async (metric = 'opened', search = '') => {
    const res = await fetchJSON(`${BASE_URL}/campaigns/metrics/${metric}?search=${encodeURIComponent(search)}`);
    return res?.data;
  },
  getTickets: async (wsId = 'ws-04') => {
    const res = await fetchJSON(`${BASE_URL}/tickets?worksheetId=${wsId}`);
    return res?.data;
  },
  getCredits: async () => {
    const res = await fetchJSON(`${BASE_URL}/campaigns/credits`);
    return res?.data;
  },
  enrichLead: async () => {
    const res = await fetchJSON(`${BASE_URL}/campaigns/credits/enrich`, { method: 'POST' });
    return res;
  }
};
