const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
];

function exerciseDog(dogName, dogBreed) {
    const result = [];
    routine.forEach((callbackFn) => {
        result.push(callbackFn(dogName, dogBreed));
    });
    return result;
}

function wakeDog(dogName, dogBreed) {
    const phrase = `Wake ${dogName} the ${dogBreed}`;
    console.log(phrase);
    return phrase;
}

function leashDog(dogName, dogBreed) {
    const phrase = `Leash ${dogName} the ${dogBreed}`;
    console.log(phrase);
    return phrase;
}

function walkToPark(dogName, dogBreed) {
    const phrase = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(phrase);
    return phrase;
}

function throwFrisbee(dogName, dogBreed) {
    const phrase = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(phrase);
    return phrase;
}

function walkHome(dogName, dogBreed) {
    const phrase = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(phrase);
    return phrase;
}

function unleashDog(dogName, dogBreed) {
    const phrase = `Unleash ${dogName} the ${dogBreed}`;
    console.log(phrase);    
    return phrase;
}