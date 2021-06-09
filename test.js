const DATA = 'https://23.javascript.pages.academy/keksobooking/data'
const userTemplate = document.querySelector('.user');
const container = document.querySelector('.container');
fetch(DATA)
    .then((result) => {
        return result.json();
    })
    .then(data => {
        const fragment = document.createDocumentFragment()

        /* const element = userTemplate.cloneNode(true);
        console.log(element) */

        data.forEach(({author, offer, location}) => {
            
            const element = userTemplate.cloneNode(true);

            element.querySelector('.avatar').src = author.avatar;
            element.querySelector('.title__addres').textContent = offer.addres;
            element.querySelector('.title__checkin').textContent = offer.checkin;
            element.querySelector('.title__checkout').textContent = offer.checkout;
            element.querySelector('.title__description').textContent = offer.description;
            element.querySelector('.title__features').textContent = offer.features;
            element.querySelector('.title__guests').textContent = offer.guests;
            element.querySelector('.title__photos').textContent = offer.photos;
            element.querySelector('.title__price').textContent = offer.price;
            element.querySelector('.title__rooms').textContent = offer.rooms;
            element.querySelector('.title__title').textContent = offer.title;
            element.querySelector('.title__type').textContent = offer.type;
            element.querySelector('location').textContent = `${location.lat}, ${location.lng}`;
            fragment.appendChild(element);
        })

        container.appendChild(fragment);
    })