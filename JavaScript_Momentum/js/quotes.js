const quotes = [
    {
        quote: "The Savior—yes, the Messiah, the Lord—has been born today in Bethlehem, the city of David!",
        position: "Luke 2:11"
    },
    {
        quote: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        position: "John 3:16"
    },
    {
        quote: "And do this, understanding the present time. The hour has come for you to wake up from your slumber, because our salvation is nearer now than when we first believed.",
        position: "Roman 13:11"
    },
    {
        quote: "My soul finds rest in God alone; my salvation comes from him.",
        position: "Psalms 62:1"
    },
    {
        quote: "Seek the Kingdom of God above all else, and live righteously, and he will give you everything you need.",
        position: "Matthew 6:33"
    },
    {
        quote: "So let us come boldly to the throne of our gracious God. There we will receive his mercy, and we will find grace to help us when we need it most.",
        position: "Hebrews 4:16"
    },
    {
        quote: "That is why I am suffering here in prison. But I am not ashamed of it, for I know the one in whom I trust, and I am sure that he is able to guard what I have entrusted to him until the day of his return.",
        position: "2 Timothy 1:12"
    },
    {
        quote: "For the Lamb on the throne will be their Shepherd. He will lead them to springs of life-giving water. And God will wipe every tear from their eyes.",
        position: "Revelation 7:17"
    },
    {
        quote: "You gave me life and showed me your unfailing love. My life was preserved by your care.",
        position: "Job 10:12"
    },
    {
        quote: "Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead.",
        position: "1 Peter 1:3"
    }
];

const quoteContents = document.querySelector("#quote span:first-child");
const quotePosition = document.querySelector("#quote span:last-child");

// function RandomNumber() {
//     Math
// }

const TodayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteContents.innerText = TodayQuote.quote;
quotePosition.innerText = TodayQuote.position
