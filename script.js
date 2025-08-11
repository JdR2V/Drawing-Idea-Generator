const characters = [
    "A brave knight",
    "A mischievous cat",
    "A robot from the future",
    "A wise old wizard",
    "A space explorer",
    "A pirate captain",
    "A superhero in disguise",
    "A friendly ghost",
    "A dragon",
    "A time-traveling teenager",
    "A curious alien",
    "A magical fairy",
    "A detective",
    "A Pocket Monster",
    "A talking tree",
    "A puppy",
    "A tiger cub",
    "A talking car",
    "A talking dinosaur",
];

const situations = [
    "discovering a hidden treasure",
    "lost in a magical forest",
    "riding a bicycle on the moon",
    "baking a giant cake",
    "escaping from a maze",
    "teaching a class of animals",
    "building a sandcastle at the beach",
    "having a picnic in the rain",
    "competing in a dance contest",
    "solving a mysterious puzzle",
    "exploring an underwater city",
    "flying a kite in a storm",
    "having a tea party with stuffed animals",
    "playing hide and seek in a library",
    "going on a treasure hunt",
    "discovering a secret garden",
    "racing against a robot",
    "having a snowball fight with friends",
    "creating a new invention",
    "building a robot",
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById('characterBtn').addEventListener('click', function() {
    document.getElementById('characterPrompt').textContent = getRandomItem(characters);
});

document.getElementById('situationBtn').addEventListener('click', function() {
    document.getElementById('situationPrompt').textContent = getRandomItem(situations);
});
