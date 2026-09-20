const people = [
    { name: "Ana Silva", street: "Rua das Flores, 120", city: "São Paulo", state: "SP", country: "Brasil", telephone: "+55 11 98123-4567", birthday: "1988-03-14" },
    { name: "Lucas Pereira", street: "Avenida Paulista, 1500", city: "São Paulo", state: "SP", country: "Brasil", telephone: "+55 11 97234-5678", birthday: "1992-07-22" },
    { name: "Beatriz Costa", street: "Rua das Laranjeiras, 45", city: "Rio de Janeiro", state: "RJ", country: "Brasil", telephone: "+55 21 99345-6789", birthday: "1995-11-03" },
    { name: "Gabriel Santos", street: "Avenida Atlântica, 820", city: "Rio de Janeiro", state: "RJ", country: "Brasil", telephone: "+55 21 98456-7890", birthday: "1985-05-19" },
    { name: "Mariana Oliveira", street: "Rua da Bahia, 310", city: "Belo Horizonte", state: "MG", country: "Brasil", telephone: "+55 31 97567-8901", birthday: "1990-09-30" },
    { name: "Rafael Souza", street: "Avenida Afonso Pena, 1200", city: "Belo Horizonte", state: "MG", country: "Brasil", telephone: "+55 31 98678-9012", birthday: "1998-01-12" },
    { name: "Juliana Rodrigues", street: "Rua das Palmeiras, 88", city: "Curitiba", state: "PR", country: "Brasil", telephone: "+55 41 99789-0123", birthday: "1987-12-05" },
    { name: "Matheus Almeida", street: "Avenida Sete de Setembro, 2040", city: "Curitiba", state: "PR", country: "Brasil", telephone: "+55 41 98890-1234", birthday: "1993-04-18" },
    { name: "Camila Ferreira", street: "Rua dos Andradas, 512", city: "Porto Alegre", state: "RS", country: "Brasil", telephone: "+55 51 97901-2345", birthday: "1996-08-25" },
    { name: "Thiago Lima", street: "Avenida Ipiranga, 6681", city: "Porto Alegre", state: "RS", country: "Brasil", telephone: "+55 51 98012-3456", birthday: "1983-02-10" },
];

const peopleList = document.getElementById('people');
const personMsg = document.getElementById('person-msg');
const personContainer = document.getElementById('person-container');

let activeLi = null;
let activePerson = null;

function renderPeople() {
    peopleList.innerHTML = '';
    people.forEach(person => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            if (activeLi) {
                activeLi.classList.remove('active');
            }
            activeLi = li;
            activePerson = person;
            li.classList.add('active');
            renderPerson(person);
        });
        link.addEventListener('mouseover', e => {
            e.preventDefault();
            renderPerson(person);
        });
        link.addEventListener('mouseleave', e => {
            e.preventDefault();
            if (activePerson) {
                renderPerson(activePerson);
                return;
            }
            hidePersonContainer(); // Porque esta não está sendo executada...
            showPersonMsg(); // ...mas esta está sendo executada?
        })
        link.textContent = person.name.split(' ')[0];
        li.appendChild(link);
        peopleList.appendChild(li);
    });
}

function hidePersonMsg() {
    personMsg.hidden = true;
    personMsg.style.display = 'none';
}

function showPersonMsg() {
    personMsg.hidden = false;
    personMsg.style.display = 'block';
}

function hidePersonContainer() {
    personContainer.hidden = true;
    personContainer.style.display = 'none';
}

function showPersonContainer() {
    personContainer.hidden = false;
    personContainer.style.display = 'block';
}

function renderPerson(person) {
    document.getElementById('person-name').textContent = person.name;
    document.getElementById('person-street').textContent = person.street;
    document.getElementById('person-city').textContent = person.city;
    document.getElementById('person-state').textContent = person.state;
    document.getElementById('person-country').textContent = person.country;
    document.getElementById('person-telephone').textContent = person.telephone;
    document.getElementById('person-birthday').textContent = person.birthday;
    showPersonContainer();
    hidePersonMsg();
}

window.addEventListener('load', renderPeople);