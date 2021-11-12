const paragraphElement = document.getElementById('paragraph');

const pageHeader = document.getElementById('page-header');
const pageBody = document.getElementById('page-body');

const pageImg = document.getElementById('page-img');
const regImg = document.getElementById('reg-img');

const pageRegDead = document.getElementById('reg-dead');
const pageTeam = document.getElementById('team');
const pageEv_date = document.getElementById('ev-date');
const pageReg_link = document.getElementById('reg-link');

const pageReg_Title = document.getElementById('reg-title');

const prevElement = document.getElementById('prev');
const currentElement = document.getElementById('current');
const nextElement = document.getElementById('next');

const persons = [{
    name: 'Event 1',
    date: 'DATEDATEDATE1',
    paragraph: '[Event 1]Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur? <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur? <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur?',
    image: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
    reg_link: 'www.youtube.com',
    reg_dead: 'GOOGOGOGOGOGO[event 1]',
    team: 'INDIVISUAL[event 1]',
},
{
    name: 'Event 2',
    date: 'DATEDATEDATE2',
    paragraph: '[Event 2]Throughout the long history of horror movies, there have been memorable moments and iconic scenes that have made viewers\' skin crawl and hearts pound. Many of these moments contain lines of dialogue that remain entrenched in the lore of horror movie history.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur?',
    image: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
    reg_link: 'www.google.com',
    reg_dead: 'GOOGOGOGOGOGO[event 2]',
    team: 'INDIVISUAL[event 2]',
},
{
    name: 'Event 3',
    date: 'DATEDATEDATE3',
    paragraph: '[Event 3]Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur? <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur? <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur?',
    image: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"',
    reg_link: 'www.duckduckgo.com',
    reg_dead: 'GOOGOGOGOGOGO[event 3]',
    team: 'INDIVISUAL[event 3]',
},
{
    name: 'Event 4',
    date: 'DATEDATEDATE4',
    paragraph: '[Event 4]Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur? <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur? <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur?',
    image: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"',
    reg_link: 'www.music.youtube.com',
    reg_dead: 'GOOGOGOGOGOGO[event 4]',
    team: 'INDIVISUAL[event 4]',
}
];

let activePage = 0; // Default

loadApp();

function loadApp() {
    persons.map(({
        name,
        date,
        paragraph,
        image,
        reg_link,
        reg_dead,
        team
    }, index) => {
        console.log(index);


        let pageDate =
            `
        <div class="page-date ${activePage !== index ? 'disabled' : ''}">
            <span class="page__date d-flex align-items-end" style="font-size: 25px;font-weight: 300;" >${date}</span>
        </div>
        `;

        let pageName =
            `
        <div class="page-name ${activePage !== index ? 'disabled' : ''}">
            <span class="page__title" >${name}</span>
        </div>
        `;

        pageHeader.innerHTML += pageName + pageDate;
        let pageImage = `
            <div class="page-image ${activePage !== index ? 'disabled' : ''}">
                <img src="${image}" class="img-fluid" alt="Image" height="1000">
            </div>
        
        `;
        pageImg.innerHTML += pageImage;
        
        regImg.innerHTML += pageImage;

    });
    let eventRegisterButton = `<a href = "${persons[activePage].reg_link}"><button type="button" class="btn btn-primary" style="width: 21.75vw;">REGISTER & PAY</button></a>`;
    paragraphElement.innerHTML = persons[activePage].paragraph;

    pageTeam.innerHTML = persons[activePage].team;
    pageEv_date.innerHTML = persons[activePage].date;
    
    pageRegDead.innerHTML = persons[activePage].reg_dead;
    pageReg_link.innerHTML = eventRegisterButton;

    let eventTitle = `${persons[activePage].name}`;
    pageReg_Title.innerHTML = eventTitle;

    prevElement.innerHTML = `${getPrevName(activePage)}`;
    currentElement.innerHTML = `${persons[activePage].name}`;
    nextElement.innerHTML = `${getnextName(activePage)}`;
}


function getPrevName(index) {
    if (index == 0) {
        return persons[persons.length - 1].name;
    }
    else {
        return persons[index - 1].name;
    }
}

function getnextName(index) {
    // console.log(index);
    if (index == persons.length - 1) {
        return persons[0].name;
    }
    else {
        return persons[index + 1].name;
    }
}



function sliderPrev() {
    if (activePage === 0) {
        activePage = persons.length - 1;
    } else {
        activePage--;
    }
    console.log(activePage);
    console.log('prev');
    changeSlider(activePage);
    changeHeader();
}
function sliderNext() {
    if (activePage === persons.length - 1) {
        activePage = 0;
    } else {
        activePage++;
    }
    console.log(activePage);
    console.log('next');
    changeSlider(activePage);
    changeHeader();
}

function changeHeader() {
    prevElement.innerHTML = `${getPrevName(activePage)}`;
    currentElement.innerHTML = `${persons[activePage].name}`;
    nextElement.innerHTML = `${getnextName(activePage)}`;
}

function changeSlider(next) {
    let id = next;
    let pageName = document.getElementsByClassName('page-name')[id];
    let pageDate = document.getElementsByClassName('page-date')[id];
    let otherNames = [...document.getElementsByClassName('page-name')];
    let otherDates = [...document.getElementsByClassName('page-date')];

    otherNames = otherNames.filter((e, i) => i != next)
    otherDates = otherDates.filter((e, i) => i != next)

    otherNames.map(e => {
        if (!e.classList.contains('disabled')) {
            e.classList.add('disabled');
        }
    });

    otherDates.map(e => {
        if (!e.classList.contains('disabled')) {
            e.classList.add('disabled');
        }
    });


    pageName.classList.remove('disabled');
    pageDate.classList.remove('disabled');

    let pageImage = `
            <div class="page-image">
                <img src="${persons[id].image}" class="img-fluid" alt="Image" width="400">
            </div>
        
        `;

    let eventRegisterButton = `<a href = "${persons[activePage].reg_link}"><button type="button" class="btn btn-primary" style="width: 21.75vw;">REGISTER & PAY</button></a>`;

    let eventTitle = `<div> ${persons[id].name} </div>`;

    paragraphElement.textContent = persons[id].paragraph;
    pageImg.innerHTML = pageImage;
    regImg.innerHTML = pageImage;
    pageRegDead.innerText = persons[id].reg_dead;
    pageTeam.innerText = persons[id].team;
    pageEv_date.innerText = persons[id].date;
    pageReg_link.innerHTML = eventRegisterButton;

    pageReg_Title.innerHTML = eventTitle;
}