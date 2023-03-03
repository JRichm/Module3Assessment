let color = document.getElementById('color');
let place = document.getElementById('place');
let ritual = document.getElementById('ritual');

let picture = document.getElementById('pic-preview');
let description = document.getElementById('desc');

let li_1 = document.getElementById('li_1');
let li_2 = document.getElementById('li_2');
let li_3 = document.getElementById('li_3');
let li_4 = document.getElementById('li_4');
let li_5 = document.getElementById('li_5');
let li_6 = document.getElementById('li_6');
let li_7 = document.getElementById('li_7');
let li_8 = document.getElementById('li_8');
let li_9 = document.getElementById('li_9');

color.addEventListener('click', () => {
    alert("Favorite color is orange!");
});

place.addEventListener('click', () => {
    alert("Favorite place is the beaches of California");
});

ritual.addEventListener('click', () => {
    alert("Favorite ritual is listening to music and playing guitar");
});

li_1.addEventListener('mouseover', () => {
    picture.src = "https://csharp-station.com/wp-content/uploads/2019/08/programming-1873854_1920.png";
    description.textContent = "I am currently attending Devmountain and learning JavaScript, HTML, and CSS and soon will be learning Python. Previously, I have built smaller 2d and 3d game projects in Unity using C#";
});

li_2.addEventListener('mouseover', () => {
    picture.src = "https://2018media.idtech.com/2020-07/primitives.png?b63b3faa99";
    description.textContent = "I first started 3d Modeling in high school, we had a semester long class. Since then, I have created many 3d models for some of the games I've made and other random 3d models used for 3d printing or art";
});

li_3.addEventListener('mouseover', () => {
    picture.src = "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/07/how-to-make-an-image-black-and-white-in-photoshop-main-image.png";
    description.textContent = "Photoshop has been with my since my first computer and use it in many of my projects. I've used photoshop to create 2d srites, note-taking/photo annotation, edit pictues taken from my phone, remove unwanted parts of pictues, and logo design";
})

li_4.addEventListener('mouseover', () => {
    picture.src = "https://upload.wikimedia.org/wikipedia/en/d/d9/Stokeley_album_cover.jpg";
    description.textContent = "Music has always been a huge part of my life. I play guitar and make songs with fl studio in my free time. Some of my favorite arists are A$AP Rocky, Metalica, 100gecs, and Hudson Mohawke";
})

li_5.addEventListener('mouseover', () => {
    picture.src = "https://a.cdn-hotels.com/gdcs/production54/d346/a7f50b1f-9730-4d1e-93d6-c3239b81f394.jpg";
    description.textContent = "I love traveling, especially with friends and family. One of my favorite trips was when me, my girlfriend, and our other couple friends went to Seattle. There was so much to experience and we all want to go back!";
})

li_6.addEventListener('mouseover', () => {
    picture.src = "https://csharp-station.com/wp-content/uploads/2019/08/programming-1873854_1920.png";
    description.textContent = "I have always loved computers. Built my first one at 14 and building software today. There are so many thing you can do with software and I love learning more about what is possible every day!";
})

li_7.addEventListener('mouseover', () => {
    picture.src = "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6GqubkOtzZEmkZHLHf7gs4/eda534603f58482634b02dd53d1ff8bc/GettyImages-1209452765.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=";
    description.textContent = "I want to have a job in the coding scene before the end of the year. This is something I've wanted for a while and goingn through DevMountain has really solidified my passion for coding and tech.";
})

li_8.addEventListener('mouseover', () => {
    picture.src = "https://images.oregon.gov/Portal/Images/Nature/mt-jefferson.jpg";
    description.textContent = "Living somewhere green that has trees everywhere has been a dream of mine for as long as I can remember. The goal is to get paid to code while living in the forest";
})

li_9.addEventListener('mouseover', () => {
    picture.src = "https://www.sellbrite.com/wp-content/uploads/full-1024x536.png";
    description.textContent = "I've always wanted to start or be a part of an online business. Either a service or product to sell, I'd love to be before the customer and create cool, fun, and interactive applications";
})