const express = require('express');
const app = express();
const port = 3000;

// Artist Discography
let songs = 
[{ 
    id: 0,
    name:"I Am",
    publishDate:"1979",
    imgURL:"https://th.bing.com/th/id/OIP.wUiQd4xT8fb2FrKdfkzF2wHaHa?pid=ImgDet&rs=1",
    songTitles:["Let's Groove","My Love", "Kalimba Tree", "I've Had Enough"]
},{  
    id: 1,
    name:"Raise!",
    publishDate:"1981",
    imgURL:"https://th.bing.com/th/id/R.f74482c2e7ab1be8c03ea038cfe0b471?rik=Po4PlyQhm%2bwVJQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-Y0TpZ7UdoNc%2fTiMIvBLVCnI%2fAAAAAAAACAg%2fx6OaTI-WKbw%2fs1600%2fewfrfr.jpeg&ehk=HhZNpI%2fyffsiAZ%2b%2fRvdLk7pH4Noh%2fetWpVqJAzDgk8s%3d&risl=&pid=ImgRaw&r=0",
    songTitles:["After The Love Has Gone","Boogie Wonderland", "Can't Let Go", "You and I"]
}]

// Nav List
let nav = 
`
<ul>
<li><a href="/">Home</a><li>
<li><a href="/albums/0">I Am</a><li>
<li><a href="/albums/1">Raise!</a><li>
</ul>
`
// Homepage
app.get('/', (req,res)=>{
    res.send(`
    ${nav}
    <h1>This Is Earth Wind & Fire</h1>
    <img src="https://usercontent2.hubstatic.com/13685511_f496.jpg">
    `)
})

// Band Music Page
app.get('/albums/:id', (req,res)=>{
    let id = req.params.id;
    res.send(`
        ${nav}
        <h1>${songs[id].name}</h1>
        <h3>${songs[id].publishDate}</h3>
        <img src="${songs[id].imgURL}">
        <h2>${songs[id].songTitles}</h2>
    `)
})


// Listen
app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
})