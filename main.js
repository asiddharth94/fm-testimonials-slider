var details = document.querySelector('.testimonial-details');
var avatar = document.querySelector('.testimonial-image > img');

var users = [
    {
        name: 'Tanya Sinclair',
        designation: 'UX Engineer',
        description: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
        image: './images/image-tanya.jpg',
        imageAlt: 'Image of a girl'
    },
    {
        name: 'John Tarkpor',
        designation: 'Junior Front-end Developer',
        description: `“ If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
        image: './images/image-john.jpg',
        imageAlt: 'Image of a guy'
    }];

function setAvatar(user) {
    avatar.src = `${user.image}`;
    avatar.alt = `${user.imageAlt}`;
}

function previousClicked() {
    var user = users[0];
    details.innerHTML = `<p>${user.description}</p>
                         <footer><p class="user-name"><b>${user.name}</b></p>
                         <p class="user-designation">${user.designation}</p>
                         </footer>`;
    setAvatar(user);
}

function nextClicked() {
    var user = users[1];
    details.innerHTML = `<p>${user.description}</p>
                         <footer><p class="user-name"><b>${user.name}</b></p>
                         <p class="user-designation">${user.designation}</p>
                         </footer>`;
    setAvatar(user);
}

previousClicked();

var prevIcon = document.querySelector('.prev-icon');
var nextIcon = document.querySelector('.next-icon');

prevIcon.addEventListener('click', previousClicked);
nextIcon.addEventListener('click', nextClicked);


