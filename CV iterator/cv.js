console.log("CV screener");

const data = [
    {
        name: 'Allu arjun',
        age: 38,
        city: 'Hyderabad',
        languages: 'Python',
        framework: 'Django',
        image: 'AlluArjun_290321_1200_TNM.jpg'
    },
    {
        name: 'Virat kohli',
        age: 38,
        city: 'Delhi',
        languages: 'Javascript',
        framework: 'Vue',
        image: 'virat.jpg'
    },
    {
        name: 'Mahesh Babu',
        age: 46,
        city: 'Hyderabad',
        languages: 'CSS',
        framework: 'bootstrap',
        image: 'maheshbabu.jpg'
    },
    {
        name: 'Sonu sood',
        age: 48,
        city: 'Ludhiana',
        languages: 'CSS',
        framework: 'Tailwind',
        image: 'sonusood.jpg'
    },
    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Ranchi',
        language: 'Go',
        framework: 'Go Framework',
        image: 'hitman.jpg'
    }

]

//Cv iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
}
const candidates = cvIterator(data);

nextCV();


const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    // console.log('Button is clicked')
    const currentCandidate = candidates.next().value;
    let Image = document.getElementById('Image')
    let profile = document.getElementById('profile');

    if (currentCandidate != undefined) {
        Image.innerHTML = `<img src=${currentCandidate.image}>`;
        profile.innerHTML = `<ul class="list-group">;

    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.languages}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
    </ul>`}
    else {
        alert('End of candidate applications');
        window.location.reload();
    }

}


