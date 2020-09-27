export const apiEndpoint = process.env.API_ENDPOINT;
export const authHeaders = { headers: { Authorization: `Bearer ${process.env.AUTH_TOKEN}` } };
