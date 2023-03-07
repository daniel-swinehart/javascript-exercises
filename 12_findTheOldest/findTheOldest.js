const findTheOldest = function(peopleArray) {
    return peopleArray.reduce((oldestPerson, currentPerson) => {
        const oldestAge = findAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = findAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldestPerson;
    })
};

const findAge = function (birthYear, deathYear){
    if(!deathYear){
       deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
};

// Do not edit below this line
module.exports = findTheOldest;
