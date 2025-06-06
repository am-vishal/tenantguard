export interface PingResponse {
    message: string;
}

export async function fetchPing(): Promise<PingResponse> {
    const res = await fetch('http://localhost:5000/');
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return res.json();
}
