async function fetchIP(ip: string) {
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    return data;
}

export default fetchIP;