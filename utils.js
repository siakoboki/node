const greeting = () => {
    console.log('Hello nodejs !');

}

const add = (a, b) => {

    console.log(a+b)
} 
console.log('the file is loaded')
module.exports = {
            greeting,
            add

}