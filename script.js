const quotesStore = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
    },
    {
        quote: " The way to get started is to quit talking and begin doing. ",
        person: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma– which is living with the results of other people's thinking. ",
        person: "Steve Jobs"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        person: "Oprah Winfrey"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        person: "James Cameron "
    },
    {
        quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        person: "John Lennon"
    },
    {
        quote: "You must be the change you wish to see in the world.",
        person: "Mahatma Gandhi"
    },
    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        person: "Martin Luther King Jr"
    }

]
let btn = document.querySelector(".next-quote")
let content = document.querySelector(".quote")
let personality = document.querySelector(".personality")
btn.addEventListener("click", function () {
    let randomNum = Math.floor(Math.random() * quotesStore.length)
    content.textContent = quotesStore[randomNum].quote
    //be precise in selecting the elements
    personality.textContent = quotesStore[randomNum].person
})