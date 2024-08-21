const KEY = '96b947a45d33d7dc1c49af3203966408'

const getData = async (city) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather',
        query = `?q=${city}&units=metric&appid=${KEY}`;

    loader(true)
    const request = await fetch(base + query),
        data = await request.json();
    loader(false)
    return data
}
