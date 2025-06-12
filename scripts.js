let tuomas = 0;
let mikko = 0;
let humanoid = 0;
let lauri = 0;
let counter = 0;

document.getElementById('humanoidinfo').onclick = info("humanoid");
document.getElementById('mikkoinfo').onclick = info("mikko");
document.getElementById('lauriinfo').onclick = info("lauri");
document.getElementById('tuomasinfo').onclick = info("tuomas");

function info(name) {
    return function() {
        const infoElem = document.getElementById('info');
        if (name === "humanoid") {
            document.getElementById('info').innerHTML = "<br>Moro!<br>Mä oon humanoidi eli ihan aito UFO mies!";
            document.getElementById('info').scrollIntoView({ behavior: 'smooth' });
        } else if (name === "mikko") {
            document.getElementById('info').innerHTML = "<br>Moi kaikki!<br><br>Mä oon Mikko, ja oon ehdolla moderaattoriksi meidän serverille.<br> Oon ollut täällä pitkään mukana, ja nyt haluaisin auttaa teitä vielä enemmän – pitää huolta siitä, että kaikilla on hyvä fiilis ja meininki pysyy hyvänä.<br><br>Miksi just mä?<br><br>🟢 Oon aktiivinen – pyörin paljon paikalla ja reagoin nopeasti.<br>🟢 Oon rauhallinen ja reilu – kaikki saa mun silmissä saman kohtelun.<br>🟢 Tykkään kehittää juttuja – uudet ideat ja parannukset on mun juttu.<br>🟢 Haluan pitää tunnelman kivana – huumoria saa olla, mutta hommat hoituu.<br><br>Mun mielestä moderaattori ei vaan valvo – se myös kuuntelee, tukee ja auttaa.<br>Jos sä haluat, että serveri pysyy kivana paikkana kaikille, niin ois huikeeta saada sun ääni. 🙌<br><br>🗳️ Äänestä Mikkoa – tehdään tästä porukasta vielä parempi!<br>🤝 Yhdessä, rauhassa, hyvässä hengessä.";
            document.getElementById('info').scrollIntoView({ behavior: 'smooth' });
        } else if (name === "lauri") {
            document.getElementById('info').innerHTML = "<br>Greetings, young padawans!<br>I am Lauri and I am running for moderator.<br><br>I've wandered these channels for a long time. Observed the dark shadow that has covered our server for far too long.<br> Endured the spam, cringe, and muting. Now I step forward to bring peace, balance... and amaybe a little joke (racist) if needed.<br>Why vote for me?<br><br>🛡️ Order… I bring. Chaos… I erase. Chill when needed, firm when necessary.<br>⚡ Unlimited moderation… unlimited power! (With a light touch.)<br>🧠 Wisdom, jokes, and fair judgement – all are equal❤️<br>💬 I listen. I support. I deliver. Sometimes all at once.<br><br>“Fear leads to spam. Spam leads to bans. Bans… I deliver.”<br><br>So if you want a server where the Force is strong, the channels clean, and the vibes immaculate…<br>🗳️ Cast your vote. Choose balance. Choose Lauri.<br>You want democracy? I am democracy.";
            document.getElementById('info').scrollIntoView({ behavior: 'smooth' });
        } else if (name === "tuomas") {
            document.getElementById('info').innerHTML = "<br>Moikka!<br><br>Mun nimi on Tuomas ja olen ehdolla meidän upean serverin moderaattoriksi!<br>Mä uskon että Hyvän serverin salaisuus on kolme asiaa:<br><br>😊Rento ja mukava ilmapiiri.<br>✊Kaikkien jäsenien tasavertaisuus.<br>✝️Kristilliset arvot ja terve Jumalan pelko!<br><br> Uskon että tällä pyhällä kolminaisuudelle serverimme jatkaa tulevaisuudessakin hyvään malliin<br> ja pidämme sen parhaana mahdollisena paikkana meille kaikille!<br><br>Ääni Tuomakselle on ääni tasavertoisuudelle!<br><br> Kiitos paljon kiinnostuksestasi ja siunattua päivää sinulle!❤️";
            document.getElementById('info').scrollIntoView({ behavior: 'smooth' });
        }
        infoElem.classList.add('info-border');
    };
}
var container = document.querySelector("#kone"); 
var arr = ['Arvostan vähemmistöjä ja uskon vahvasti tasa arvoon','Voi vitun nee***** kivekset','Humanoids number one','Vihaan kaikkia vähemmistöjä tasavertaisesti'];
var barr = ['tuomas','mikko','humanoid','lauri'];
var carr = [addT, addM, addH, addL]
for (var i = 0; i < 4; i++) {
    var button = document.createElement("button"); 
    button.setAttribute("attribute", barr[i]); 
    button.innerHTML = arr[i]; 
    button.id += barr[i];
    button.onclick = carr[i];
    container.appendChild(button);
    console.log(button)
}

let countT = document.getElementById('counterT');
let countM = document.getElementById('counterM');
let countH = document.getElementById('counterH');
let countL = document.getElementById('counterL');

function addT() {
    tuomas++;
    console.log(tuomas);
    nextQuestion();
}
function addM() {
    mikko++;
    nextQuestion();
}

function addH() {
    humanoid++;
    nextQuestion();
}
function addL() {
    lauri++;
    nextQuestion();
    console.log(lauri);
}
function nextQuestion() {
    counter++;
    if (counter === 1) {
        document.getElementById('kysymys').textContent = "Mikä on ensimmäinen tekosi kun sinusta tulee moderaattori?";
        container.innerHTML = '';
        var arr2 = ['Minulla ei ole mitään tiettyä mielessä. Serveri on nyt jo hyvä ja uskon että se pysyy edelleen hyvänä.', 'Kiellän välittömästi ilmaisun: "Mutsis pillu"', 'Ajattelin tulla vetämään vähän teikäläisen hilloi.', 'Keskitän lisää valtaa itselleni luodakseni toimivan diktatuurin.'];
        var barrCopy = barr.slice();
        var carrCopy = carr.slice();
        shuffleThree(arr2, barrCopy, carrCopy);
        for (var i = 0; i < 4; i++) {
            var button = document.createElement("button"); 
            button.setAttribute("attribute", barrCopy[i]); 
            button.innerHTML = arr2[i]; 
            button.id = barrCopy[i] + "_q" + counter;
            button.onclick = carrCopy[i];
            container.appendChild(button);
        }
    }
    if (counter === 2) {
        document.getElementById('kysymys').textContent = "Mikä tekee sinusta hyvän moderaattorin?";
        container.innerHTML = '';
        var arr2 = ['Monen vuoden kokemus reilusta ja tasa arvoisesta johtamisesta ovat antaneet minulle moderaatioon sopivat taidot.', 'Olen luonnollinen johtaja ja kuka sä olet kyseenalaistamaan minun taitoni?', 'Eihän tää meille humanoideille oo temppu eikä mikään.', 'Opin paljon katsoessani Star wars elokuvia ja uskon voida olevani hyvä johtaja joka toimii samalla tavalla kuin Senaattori Palpatine.'];
        var barrCopy = barr.slice();
        var carrCopy = carr.slice();
        shuffleThree(arr2, barrCopy, carrCopy);
        for (var i = 0; i < 4; i++) {
            var button = document.createElement("button"); 
            button.setAttribute("attribute", barrCopy[i]); 
            button.innerHTML = arr2[i]; 
            button.id = barrCopy[i] + "_q" + counter;
            button.onclick = carrCopy[i];
            container.appendChild(button);
        }
    }
    if (counter === 3) {
        document.getElementById('kysymys').textContent = "Mikä näistä on paras league of legends champion?";
        container.innerHTML = '';
        var arr2 = ['Ornn', 'Teemo', 'Shaco', 'Galio'];
        var barrCopy = barr.slice();
        var carrCopy = carr.slice();
        shuffleThree(arr2, barrCopy, carrCopy);
        for (var i = 0; i < 4; i++) {
            var button = document.createElement("button"); 
            button.setAttribute("attribute", barrCopy[i]); 
            button.innerHTML = arr2[i]; 
            button.id = barrCopy[i] + "_q" + counter;
            button.onclick = carrCopy[i];
            container.appendChild(button);
        }
    }
    if (counter === 4) {
        document.getElementById('kysymys').textContent = "Pitäisikö serverille lisätä käyttäjäkohtainen vero?";
        container.innerHTML = '';
        var arr2 = ['En usko että vero on tarpeellinen.', 'Kyllä, uskon että tämä vero auttaisi moderaattoreita toimimaan tehokkaammin.', 'Tämä vero mahdollistaisi hillon ostamisen suoraan ja uskon että se olisi serverin hyväksi.', 'Uskon että tämä vero olisi hyvä idea ja se pitäisi ohjata uudelle moderaattorille!'];
        var barrCopy = barr.slice();
        var carrCopy = carr.slice();
        shuffleThree(arr2, barrCopy, carrCopy);
        for (var i = 0; i < 4; i++) {
            var button = document.createElement("button"); 
            button.setAttribute("attribute", barrCopy[i]); 
            button.innerHTML = arr2[i]; 
            button.id = barrCopy[i] + "_q" + counter;
            button.onclick = carrCopy[i];
            container.appendChild(button);
        }
    }
    if (counter === 5) {
        document.getElementById('kysymys').textContent = "Mikä on mielestäsi tehokkain valtio tyyppi?";
        container.innerHTML = '';
        var arr2 = ['Demokratia', 'Fasismi', 'Kuutopia', 'Diktatuuri'];
        var barrCopy = barr.slice();
        var carrCopy = carr.slice();
        shuffleThree(arr2, barrCopy, carrCopy);
        for (var i = 0; i < 4; i++) {
            var button = document.createElement("button"); 
            button.setAttribute("attribute", barrCopy[i]); 
            button.innerHTML = arr2[i]; 
            button.id = barrCopy[i] + "_q" + counter;
            button.onclick = carrCopy[i];
            container.appendChild(button);
        }
    }
    if (counter === 6) {
        document.getElementById('kysymys').textContent = "Mitä mieltä olet toisen maailmansodan eri puolista?";
        container.innerHTML = '';
        var arr2 = ['Onneksi liittoutuneet voittivat', 'Meni kyllä nyt väärälle puolelle voitto...', 'En ollut vielä silloin saapunut maahan joten en ota kantaa.', 'Ei ollut väliä kumpi voittaa kunhan minä pääsen moderaattoriksi.'];
        var barrCopy = barr.slice();
        var carrCopy = carr.slice();
        shuffleThree(arr2, barrCopy, carrCopy);
        for (var i = 0; i < 4; i++) {
            var button = document.createElement("button"); 
            button.setAttribute("attribute", barrCopy[i]); 
            button.innerHTML = arr2[i]; 
            button.id = barrCopy[i] + "_q" + counter;
            button.onclick = carrCopy[i];
            container.appendChild(button);
        }
    }
    if (counter === 7) {
        document.getElementById('kysymys').textContent = "Mikä on mielipiteesi israelista ja palestiinalaisista?";
        container.innerHTML = '';
        var arr2 = ['Koen että Israel ja palestiina molemmat tekevät sotarikoksia Gazassa ja toivon rauhallista loppua konfliktille.', 'Ihan paska valtiona, mutta hatun nosto asevoimille.', 'Kaikki ihmiset ovat yhtä tyhmiä verrattuina UFO-miehiin.', 'Ei kiinnosta kunhan musta tulee Moderaattori.'];
        var barrCopy = barr.slice();
        var carrCopy = carr.slice();
        shuffleThree(arr2, barrCopy, carrCopy);
        for (var i = 0; i < 4; i++) {
            var button = document.createElement("button"); 
            button.setAttribute("attribute", barrCopy[i]); 
            button.innerHTML = arr2[i]; 
            button.id = barrCopy[i] + "_q" + counter;
            button.onclick = carrCopy[i];
            container.appendChild(button);
        }
    }
    if (counter === 8) {
        document.getElementById('kysymys').textContent = "Sinulle paras ehdokas on:";
        console.log("mikko: " + mikko);
        console.log("tuomas: " + tuomas);
        console.log("humanoid: " + humanoid);
        console.log("lauri: " + lauri);
    const scores = {
        tuomas: tuomas,
        mikko: mikko,
        humanoid: humanoid,
        lauri: lauri
    };

    const maxScore = Math.max(...Object.values(scores));

    const winners = Object.keys(scores).filter(key => scores[key] === maxScore);

    container.innerHTML = "";
    winners.forEach(winner => {
        let imgSrc = "";
        let winnerName = "";
        if (winner === "tuomas") {
            imgSrc = "kuvat/tuomasvaali.png";
            winnerName = "Tuomas";
        } else if (winner === "mikko") {
            imgSrc = "kuvat/mikkovaali.png";
            winnerName = "Mikko";
        } else if (winner === "humanoid") {
            imgSrc = "kuvat/humanoidi.png";
            winnerName = "Humanoidi";
        } else if (winner === "lauri") {
            imgSrc = "kuvat/laurivaali.png";
            winnerName = "Lauri";
        }
        container.innerHTML += `<div style="display:inline-block; margin:10px;"><img src="${imgSrc}" alt="${winnerName}" style="width:180px;"><br><span style="font-size:2rem; font-weight:bold; display:block; margin-top:10px;">${winnerName}</div>`;
    });
}
}

function shuffleThree(arr1, arr2, arr3) {
    for (let i = arr1.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
        [arr2[i], arr2[j]] = [arr2[j], arr2[i]];
        [arr3[i], arr3[j]] = [arr3[j], arr3[i]];
    }
}