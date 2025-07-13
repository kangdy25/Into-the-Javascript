const API_URL = 'https://trip-wiki-api.vercel.app/'

export const request = async (startIdx, region, sortBy, searchWord) => {
    try {
        let url = `${API_URL}`;

        if (region && region !== 'All') {
            url += `${region}?start=${startIdx}`
        } else {
            url += `?start=${startIdx}`;
        }

        if (sortBy) url += `&sort=${sortBy}`;

        if (searchWord) url += `&search=${searchWord}`

        const res = await fetch(url);

        if (res) {
            let data = await res.json();
            return data;
        } 
    } catch (err) {
        console.log(err)
    }
}