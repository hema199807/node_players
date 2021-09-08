const mongoose=require('mongoose');
const express=require('express');
const app=express();
require('dotenv').config()
var password=process.env.Atlas_Password;
const hostname="localhost";
const port=8000;
const dburi=`mongodb+srv://root:${password}@cluster0.29oaz.mongodb.net/playersDb?retryWrites=true&w=majority`;
const options={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.connect(dburi,options).then(()=>{
    console.log("Database connected");
})

const playersSchema=new mongoose.Schema({},{strict:false})

const players=mongoose.model("playersdetails",playersSchema)

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','*');
    res.setHeader('Access-Control-Allow-Headers','content-type,Authurization');
    next();
})

app.post("/players",async(req,res)=>{
    var data=await players.insertMany([
        {   
            PlayerName:"Sanju Viswanath Samson",
            Country:"India",
            Born:"11 November 1994",
            BirtPlace:"Pulluvila, Vizhinjam, Thiruvananthapuram, Kerala, India",
            Batting:"Right-handed",
            Bowling:"Right-arm off break",
            Role:"Wicket-keeper-batsman",
            Description:"He is an Indian international cricketer who plays for Kerala in domestic cricket and captains Rajasthan Royals in the Indian Premier League.He was the vice-captain of the Indian Under-19 team for the 2014 Under-19 Cricket World Cup and 2013 ACC Under-19 Asia Cup.",
            Photo:"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/fatr5zcgsfh18om271rojn1ngisiclgi.png"
        },{   
            PlayerName:"Sivam Dube",
            Country:"India",
            Born:"26 June 1993",
            BirtPlace:"Mumbai, Maharashtra, India",
            Batting:"Left-handed",
            Bowling:"Right-arm medium-fast",
            Role:"All-rounder",
            Description:"He is an Indian cricketer who plays for Mumbai in domestic cricket and the Rajasthan Royals in the Indian Premier League (IPL).He made his international debut for the India cricket team in November 2019.",
            Photo:"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/5p8d3jtqyzyugme4e1etjbgbj5j8qnrb.png"
        },{   
            PlayerName:"Riyan Parag Das",
            Country:"India",
            Born:"10 November 2001",
            BirtPlace:"Guwahati, Assam, India",
            Batting:"Right-handed",
            Bowling:"Leg break",
            Role:"Batsman",
            Description:"In December 2018, he was bought by the Rajasthan Royals in the player auction for the 2019 Indian Premier League.he became the youngest cricketer to score a fifty in the history of the Indian Premier League.",
            Photo:"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/e21z16eazldripv61664ira8tbvhppk7.png"
        },{ 
            PlayerName:"Navdeep Amarjeet Saini",
            Country:"India",
            Born:"23 November 1992",
            BirtPlace:"Karnal, Haryana, India",
            Batting:"Right-handed",
            Bowling:"Right-arm fast",
            Role:"Bowler",
            Description:"In February 2017, he was bought by the Delhi Daredevils team for the 2017 Indian Premier League for 10 lakhs.In January 2018, he was bought by the Royal Challengers Bangalore.",
            Photo:"https://www.royalchallengers.com/PRRCB01/public/2021-04/Saini%20800%20x%201200.png"
        },{ 
            PlayerName:"Scott Christopher Kuggeleijn",
            Country:"New Zealand",
            Born:"3 January 1992",
            BirtPlace:" Hamilton, New Zealand",
            Batting:"Right-handed",
            Bowling:"Right-arm fast-medium",
            Role:"Bowling all-rounder",
            Description:"He was called up to the Chennai Super Kings as a replacement for injured South Africa's Lungi Ngidi in the 2019 Indian Premier League (IPL). On 27 April 2021, he was signed by the Royal Challengers Bangalore as a replacement for Kane Richardson during the 2021 Indian Premier League.",
            Photo:"https://www.royalchallengers.com/PRRCB01/public/2021-04/Scott%20K%20800%20x%201200.png"
        },{ 
            PlayerName:"Mohammed Siraj",
            Country:"India",
            Born:"13 March 1994",
            BirtPlace:"Hyderabad, Telangana, India",
            Batting:"Right-handed",
            Bowling:"Right-arm fast",
            Role:"Bowler",
            Description:"He is an Indian cricketer who plays for Hyderabad in domestic cricket, Royal Challengers Bangalore in the Indian Premier League, and the India national cricket team.",
            Photo:"https://www.royalchallengers.com/PRRCB01/public/2021-04/Siraj%20800%20x%201200.png"
        },{
            PlayerName:"Yashasvi Bhupendra Kumar Jaiswal",
            Country:"India",
            Born:"28 December 2001",
            BirtPlace:"Suriyawan, Bhadohi, Uttar Pradesh, India",
            Batting:"Left-handed",
            Bowling:"Leg break",
            Role:"Opening batsman",
            Description:"He is an Indian cricketer who plays Mumbai in domestic cricket and Rajasthan Royals in the Indian Premier League (IPL). In October 2019, he became the youngest cricketer in the world to score a List A double century.",
            Photo:"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/ju86h30phs1pq3ab1z31e0dihxxljbvo.png"
        },{
            PlayerName:"Kartik Tyagi",
            Country:"India",
            Born:"8 November 2000",
            BirtPlace:"Hapur, Uttar Pradesh, India",
            Batting:"Right-handed",
            Bowling:"Right-arm fast",
            Role:"Bowler",
            Description:"He was bought by the Rajasthan Royals ahead of the 2020 Indian Premier League. He made his Twenty20 debut for the Rajasthan Royals in the 2020 Indian Premier League on 6 October 2020, against the Mumbai Indians.On 26 October 2020, Tyagi was named as one of four additional bowlers to travel with Indian cricket team for their tour to Australia",
            Photo:"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/zzvo1uoynm2pj1g19ljp6dgmnzpk7i27.png"
        },{ 
            PlayerName:"Virat Kohli",
            Country:"India",
            Born:"5 November 1988",
            BirtPlace:"New Delhi, India",
            Batting:"Right-handed",
            Bowling:"Right-arm medium",
            Role:"Batsman",
            Description:"Virat Kohli is an Indian cricketer and the current captain of the India national team. He plays for Delhi in domestic cricket and for Royal Challengers Bangalore in the Indian Premier League (IPL) as captain of the franchise since 2013. He was a part of the Indian cricket team which won the 2011 Cricket World Cup.",
            Photo:"https://www.royalchallengers.com/PRRCB01/public/2021-04/4_2.png"
        },{
            PlayerName:"M.S Washington Sundar",
            Country:"India",
            Born:"5 October 1999",
            BirtPlace:"Chennai City, Tamil Nadu, India",
            Batting:"Left-handed",
            Bowling:"Right-arm off-break",
            Role:"All-rounder",
            Description:"He started his IPL career in 2017 with Rising Pune Supergiant. Since 2018, he has been playing for Royal Challengers Bangalore.",
            Photo:"https://www.royalchallengers.com/PRRCB01/public/2021-04/5_0.png"

        }
    ])
    res.send(data);
})

app.get("/players",async(req,res)=>{
    var data=await players.find()
    res.send(data)
})
app.listen(port,()=>{console.log(`server runing on http://${hostname}:${port}/`)});