const getInfoBtn = document.getElementById('getInfoBtn');
const infoDiv = document.getElementById('info');

const getGeorgiaInfo = () => {
    fetch('https://restcountries.com/v3.1/name/Georgia')
        .then(response => response.json())
        .then(data => {
            const country = data[1];
            infoDiv.innerHTML = `
                <h3>${country.name.common}</h3>
                <p><strong>დედაქალაქი:</strong> ${country.capital[0]}</p>
                <p><strong>მოსახლეობა:</strong> ${country.population.toLocaleString()}</p>
                <p><strong>ოფიციალური ენა:</strong> ${Object.values(country.languages).join(', ')}</p>
                <img src="${country.flags.png}" alt="Georgia Flag">
            `;
            infoDiv.style.display = 'block';
        })
};

getInfoBtn.addEventListener('click', getGeorgiaInfo);