const husbandElement = document.getElementById('husband');
const languages = [
    'marido', '丈夫', 'पति', 'marido', 'муж', '夫', 'Ehemann', 'mari', '남편', 'koca', 'echtgenoot', 'Make', 'mand', 'aviomies', 'ektemann', 'mąż', 'чоловік', 'manžel', 'σύζυγος', 'férj', 'soț', 'съпруг', 'manžel', 'mož', 'suprug', 'мужа', 'vyras', 'vīrs', 'abikaasa', 'suami', 'suami', 'สามี', 'chồng'
];

let intervalId;
let currentIndex = 0;

husbandElement.addEventListener('mouseenter', () => {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % languages.length;
        husbandElement.textContent = languages[currentIndex];
    }, 250);
});

husbandElement.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
    husbandElement.textContent = 'husband';
});


