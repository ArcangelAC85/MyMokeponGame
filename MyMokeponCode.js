let playerAttack
let enemiesAttack
let playerLives = 3
let enemieLives = 3 
let backgroundPeleas = document.getElementById('juego')
let audio = new Audio('./src/audio/Musica-inicio.mp3');
let audioPlayer = new Audio('./src/audio/Select your player.mp3');
let audioWater = new Audio('./src/audio/Mokepones Agua.mp3');
let audioEarth = new Audio('./src/audio/Mokepones Tierra.mp3');
let audioFire = new Audio('./src/audio/Mokepones Fuego.mp3');
let audioAlert = new Audio('./src/audio/Error.mp3');

function startGame() {
    backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"

    let sectionPlayer = document.getElementById('player')
    sectionPlayer.style.display = 'none'
    let sectionMokeponType = document.getElementById('mokepon-type')
    sectionMokeponType.style.display = 'none'

    let sectionMokeponWater = document.getElementById('mokepon-agua')
    sectionMokeponWater.style.display = 'none'
    let sectionMokeponEarth = document.getElementById('mokepon-tierra')
    sectionMokeponEarth.style.display = 'none'
    let sectionMokeponFire = document.getElementById('mokepon-fuego')
    sectionMokeponFire.style.display = 'none'

    let sectionFonts = document.getElementById('fonts')
    sectionFonts.style.display = 'none'
    let sectionAttack = document.getElementById('attack')
    sectionAttack.style.display = 'none'

    let sectionReset = document.getElementById('reset');
    sectionReset.style.display = 'none'

    let bottonGameStart = document.getElementById('botton-game-load');
    bottonGameStart.addEventListener('click', gameStart)

    let botonPlayer = document.getElementById('botton-player');
    botonPlayer.addEventListener('click', selectPlayer)

    let botonTipeMokepon = document.getElementById('botton-type');
    botonTipeMokepon.addEventListener('click', selectTipeMokepon)

    let botonMokeponAgua = document.getElementById('botton-mokepon-agua');
    botonMokeponAgua.addEventListener('click', selectMokeponAgua)

    let botonMokeponTierra = document.getElementById('botton-mokepon-tierra');
    botonMokeponTierra.addEventListener('click', selectMokeponTierra)

    let botonMokeponFuego = document.getElementById('botton-mokepon-fuego');
    botonMokeponFuego.addEventListener('click', selectMokeponFuego)

    let botonFonts = document.getElementById('botton-select-font');
    botonFonts.addEventListener('click', selectFonts)

    let bottonWater = document.getElementById('water');
    bottonWater.addEventListener('click', waterAttack);
    let bottonEarth = document.getElementById('earth');
    bottonEarth.addEventListener('click', earthAttack);
    let bottonFire = document.getElementById('fire');
    bottonFire.addEventListener('click', fireAttack);

    let bottonResetGame = document.getElementById('reset-game');
    bottonResetGame.addEventListener('click', resetGame);

    audio.play();

}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameStart() {
    audio.pause();

    backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Inicio.jpg')"

    let sectionGameLoad = document.getElementById('game-load');
    sectionGameLoad.style.display = 'none'

    let sectionPlayer = document.getElementById('player')
    sectionPlayer.style.display = 'flex'
}

function selectPlayer() {

    let sectionPlayer = document.getElementById('player')
    sectionPlayer.style.display = 'none'

    let sectionMokeponType = document.getElementById('mokepon-type')
    sectionMokeponType.style.display = 'flex'

    let inputAstronut = document.getElementById('astronut');
    let inputBowei = document.getElementById('bowei');
    let inputCastler = document.getElementById('castler');
    let inputDafter = document.getElementById('dafter');
    let inputMecatrin = document.getElementById('mecatrin');
    let inputRalphie = document.getElementById('ralphie');
    let playerCaracterName = document.getElementById('player-caracter-name');
    let playerImage = document.getElementById('player-image');

        if (inputAstronut.checked) {
            audioPlayer.play()
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            playerCaracterName.innerText = 'Astronut';
            playerImage.innerHTML = `<img src='./src/img/players/Astronut1.jpg'>`;
            Swal.fire({
                position: 'center',
                imageUrl: './src/img/players/Astronut.jpg',
                icon: 'success',
                title: 'Astronut',
                text: 'Este es tu Personaje',
                showConfirmButton: false,
                timer: 1500
            })  
        }
        else if (inputBowei.checked) {
            audioPlayer.play()
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            playerCaracterName.innerText = 'Bowei';
            playerImage.innerHTML = `<img src='./src/img/players/Bowei1.jpg'>`;
            Swal.fire({
                position: 'center',
                imageUrl: './src/img/players/Bowei.jpg',
                icon: 'success',
                title: 'Bowei',
                text: 'Este es tu Personaje',
                imageHeight: 500,
                showConfirmButton: false,
                timer: 1500
            })
        }
        else if (inputCastler.checked) {
            audioPlayer.play()
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            playerCaracterName.innerText = 'Castler';
            playerImage.innerHTML = `<img src='./src/img/players/Castler1.jpg'>`;
            Swal.fire({
                position: 'center',
                imageUrl: './src/img/players/Castler.jpg',
                icon: 'success',
                title: 'Castler',
                text: 'Este es tu Personaje',
                imageHeight: 500,
                showConfirmButton: false,
                timer: 1500
            })
        }
        else if (inputDafter.checked) {
            audioPlayer.play()
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            playerCaracterName.innerText = 'Dafter';
            playerImage.innerHTML = `<img src='./src/img/players/Dafter1.jpg'>`;
            Swal.fire({
                position: 'center',
                imageUrl: './src/img/players/Dafter.jpg',
                icon: 'success',
                title: 'Dafter',
                text: 'Este es tu Personaje',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else if (inputMecatrin.checked) {
            audioPlayer.play()
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            playerCaracterName.innerText = 'Mecatrin';
            playerImage.innerHTML = `<img src='./src/img/players/Mecatrin1.jpg'>`;
            Swal.fire({
                position: 'center',
                imageUrl: './src/img/players/Mecatrin.jpg',
                icon: 'success',
                title: 'Mecatrin',
                text: 'Este es tu Personaje',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else if (inputRalphie.checked) {
            audioPlayer.play()
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            playerCaracterName.innerText = 'Ralphie';
            playerImage.innerHTML = `<img src='./src/img/players/Ralphie1.jpg'>`;
            Swal.fire({
                position: 'center',
                imageUrl: './src/img/players/Ralphie.jpg',
                icon: 'success',
                title: 'Ralphie',
                text: 'Este es tu Personaje',
                imageHeight: 500,
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            audioAlert.play();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tienes que seleccionar a tu jugador!',
            })  
        }
        
    enemiesPlayer()

}

function enemiesPlayer() {
    let enemiesPlayerAleatorio = aleatorio(1,6)
    let enemiesPlayerName = document.getElementById('enemies-caracter-name')
    let enemiesImage = document.getElementById('enemies-image')

        if (enemiesPlayerAleatorio == 1) {
            enemiesPlayerName.innerText = 'Astronut';
            enemiesImage.innerHTML = `<img src='./src/img/players/Astronut1.jpg'>`;
        }
        else if (enemiesPlayerAleatorio == 2) {
            enemiesPlayerName.innerText = 'Bowei';
            enemiesImage.innerHTML = `<img src='./src/img/players/Bowei1.jpg'>`;
        }
        else if (enemiesPlayerAleatorio == 3) {
            enemiesPlayerName.innerText = 'Castler';
            enemiesImage.innerHTML = `<img src='./src/img/players/Castler1.jpg'>`;
        }
        else if (enemiesPlayerAleatorio == 4) {
            enemiesPlayerName.innerText = 'Dafter';
            enemiesImage.innerHTML = `<img src='./src/img/players/Dafter1.jpg'>`;
        }
        else if (enemiesPlayerAleatorio == 5) {
            spanEnemiesPlayer.innerText = 'Mecatrin';
            enemiesImage.innerHTML = `<img src='./src/img/players/Mecatrin1.jpg'>`;
        }
        else {
            enemiesPlayerName.innerText = 'Ralphie';
            enemiesImage.innerHTML = `<img src='./src/img/players/Ralphie1.jpg'>`;
        }
}

function selectTipeMokepon() {
    backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"

    let inputAgua = document.getElementById('agua')
    let inputTierra = document.getElementById('tierra')
    let inputFuego = document.getElementById('fuego')

        if (inputAgua.checked) {
            audioWater.play();
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/WaterScreen.gif')"
            let sectionMokeponType = document.getElementById('mokepon-type');
            sectionMokeponType.style.display = 'none';

            let sectionMokeponWater = document.getElementById('mokepon-agua');
            sectionMokeponWater.style.display = 'flex';
            Swal.fire({
                title: 'Has Seleccionado Mokepones de Tipo Agua.',
                imageUrl: './src/img/fonts/Agua-removebg-preview.jpg',
                background: 'transparent',
                imageWidth: 800,
                color: '#09ffff',
                backdrop: `
                rgba(0,230,246,0.1)
                url(./src/img/fonts/Agua1.gif)
                center center
                no-repeat
              `
            })
        }
        else if (inputTierra.checked) {
            audioEarth.play();
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/EarthScreen.gif')"
            let sectionMokeponType = document.getElementById('mokepon-type');
            sectionMokeponType.style.display = 'none';

            let sectionMokeponEarth = document.getElementById('mokepon-tierra');
            sectionMokeponEarth.style.display = 'flex';
            Swal.fire({
                title: 'Has Seleccionado Mokepones de Tipo Tierra.',
                imageUrl: './src/img/fonts/Tierra-removebg-preview.jpg',
                imageWidth: 800,
                color: '#040404',
                background: 'transparent',
                backdrop: `
                rgba(91,91,34,0.4)
                url(./src/img/fonts/Tierra.gif)
                center center
                no-repeat`
            })
        }
        else if (inputFuego.checked) {
            audioFire.play();
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/FireScreen.gif')"
            let sectionMokeponType = document.getElementById('mokepon-type');
            sectionMokeponType.style.display = 'none';

            let sectionMokeponFire = document.getElementById('mokepon-fuego');
            sectionMokeponFire.style.display = 'flex';
            Swal.fire({
                title: 'Has Seleccionado Mokepones de Tipo Fuego.',
                imageUrl: './src/img/fonts/Fuego-removebg-preview.jpg',
                imageWidth: 800,
                color: '#1Cffff',
                background: 'transparent',
                backdrop: `
                rgba(251,4,37,0.4)
                url(./src/img/fonts/Flama.gif)
                center center
                no-repeat`
            })
        }
        else {
            audioAlert.play();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '!Tienes que seleccionar que tipo de Mokepon quieres!',
            })
        }
}

function selectMokeponAgua() {
    audioWater.pause()
    let sectionMokeponWater = document.getElementById('mokepon-agua')
    sectionMokeponWater.style.display = 'none'
    let sectionFonts = document.getElementById('fonts')
    sectionFonts.style.display = 'flex'
 
    let inputIcedFox = document.getElementById('iced-fox');
    let inputFrostWolf = document.getElementById('frost-wolf');
    let inputWarriorBear = document.getElementById('warrior-bear');
    let inputWaterDragon = document.getElementById('water-dragon');
    let inputWaterSphinx = document.getElementById('water-sphinx');
    let inputWiseDeer = document.getElementById('wise-deer');
    let spanPlayerPet = document.getElementById('player-pet')
    let spanPlayerPetImage = document.getElementById('player-pet-image');

        if (inputIcedFox.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Iced Fox';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Agua/IcedFox1.jpg'>`
        }
        else if (inputFrostWolf.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Frost Wolf';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Agua/FrostWolf1.jpg'>`
        }
        else if (inputWarriorBear.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Warrior Bear';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Agua/WarriorBear1.jpg'>`
        }
        else if (inputWaterDragon.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Water Dragon';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Agua/WaterDragon1.jpg'>`
        }
        else if (inputWaterSphinx.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Water Sphinx';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Agua/WaterSphinx1.jpg'>`
        }
        else if (inputWiseDeer.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Wise Deer';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Agua/WiseDeer1.jpg'>`
        }
        else {
            audioAlert.play();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '!No has seleccionado tu Mokepon tipo Agua!',
              })
        }
    enemiesMokepon()
}

function selectMokeponTierra() {
    audioEarth.pause();
    let sectionMokeponEarth = document.getElementById('mokepon-tierra')
    sectionMokeponEarth.style.display = 'none'
    let sectionFonts = document.getElementById('fonts')
    sectionFonts.style.display = 'flex'

    let inputArmorCrow = document.getElementById('armor-crow');
    let inputArmorMole = document.getElementById('armor-mole');
    let inputGolemGiga = document.getElementById('golem-giga');
    let inputGrislieBear = document.getElementById('grislie-bear');
    let inputTigueros = document.getElementById('tigueros');
    let inputWiseMole = document.getElementById('wise-mole');
    let spanPlayerPet = document.getElementById('player-pet');
    let spanPlayerPetImage = document.getElementById('player-pet-image');
    
        if (inputArmorCrow.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Armor Crow';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Tierra/ArmorCrow1.jpg'>`
        }
        else if (inputArmorMole.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Armor Mole';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Tierra/ArmorMole1.jpg'>`
        }
        else if (inputGolemGiga.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Golem Giga';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Tierra/GolemGiga1.jpg'>`
        }
        else if (inputGrislieBear.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Grislie Bear';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Tierra/GrislieBear1.jpg'>`
        }
        else if (inputTigueros.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Tigueros';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Tierra/Tigueros1.jpg'>`
        }
        else if (inputWiseMole.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Wise Mole';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Tierra/WiseMole1.jpg'>`
        }
        else {
            audioAlert.play();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '!No has seleccionado tu Mokepon tipo Tierra!',
              })
        }
    enemiesMokepon()
}

function selectMokeponFuego() {
    audioFire.pause();
    let sectionMokeponFire = document.getElementById('mokepon-fuego')
    sectionMokeponFire.style.display = 'none'
    let sectionFonts = document.getElementById('fonts')
    sectionFonts.style.display = 'flex'

    let inputBoarOnFire = document.getElementById('boar-on-fire');
    let inputDragonix = document.getElementById('dragonix');
    let inputFenix = document.getElementById('fenix');
    let inputFireLion = document.getElementById('fire-lion');
    let inputPantiKaris = document.getElementById('panti-karis');
    let inputWolfFang = document.getElementById('wolf-fang');
    let spanPlayerPet = document.getElementById('player-pet');
    let spanPlayerPetImage = document.getElementById('player-pet-image');

        if (inputBoarOnFire.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Boar On Fire';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Fuego/BoarOnFire1.jpg'>`
        }
        else if (inputDragonix.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Dragonix';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Fuego/Dragonix1.jpg'>`
        }
        else if (inputFenix.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Fenix';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Fuego/Fenix1.jpg'>`
        }
        else if (inputFireLion.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Fire Lion';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Fuego/FireLion1.jpg'>`
        }
        else if (inputPantiKaris.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Panti Karis';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Fuego/PantiKaris1.jpg'>`
        }
        else if (inputWolfFang.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Principio1.gif')"
            spanPlayerPet.innerText = 'Wolf Fang';
            spanPlayerPetImage.innerHTML = `<img src='./src/img/mokepones/Fuego/WolfFang1.jpg'>`
        }
        else {
            audioAlert.play();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '!No has seleccionado tu Mokepon tipo Fuego!',
              })
        }
    enemiesMokepon()
}

function enemiesMokepon() {
    let enemiesMokeponAleatorio = aleatorio(1,18)
    let spanEnemiesMokeponSelect = document.getElementById('enemies-pet')
    let spanEnemiesPetImage = document.getElementById('enemies-pet-image')

        if (enemiesMokeponAleatorio == 1) {
            spanEnemiesMokeponSelect.innerText = 'Frost Wolf';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Agua/FrostWolf1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 2) {
            spanEnemiesMokeponSelect.innerText = 'Iced Fox';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Agua/IcedFox1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 3) {
            spanEnemiesMokeponSelect.innerText = 'Warrior Bear';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Agua/WarriorBear1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 4) {
            spanEnemiesMokeponSelect.innerText = 'Water Dragon';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Agua/WaterDragon1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 5) {
            spanEnemiesMokeponSelect.innerText = 'Water Sphinx';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Agua/WaterSphinx1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 6) {
            spanEnemiesMokeponSelect.innerText = 'Wise Deer';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Agua/WiseDeer1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 7) {
            spanEnemiesMokeponSelect.innerText = 'Armor Crow';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Tierra/ArmorCrow1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 8) {
            spanEnemiesMokeponSelect.innerText = 'Armor Mole';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Tierra/ArmorMole1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 9) {
            spanEnemiesMokeponSelect.innerText = 'Golem Giga';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Tierra/GolemGiga1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 10) {
            spanEnemiesMokeponSelect.innerText = 'Grislie Bear';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Tierra/GrislieBear1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 11) {
            spanEnemiesMokeponSelect.innerText = 'Tigueros';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Tierra/Tigueros1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 12) {
            spanEnemiesMokeponSelect.innerText = 'Wise Mole';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Tierra/WiseMole1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 13) {
            spanEnemiesMokeponSelect.innerText = 'Boar On Fire';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Fuego/BoarOnFire1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 14) {
            spanEnemiesMokeponSelect.innerText = 'Dragonix';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Fuego/Dragonix1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 15) {
            spanEnemiesMokeponSelect.innerText = 'Fenix';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Fuego/Fenix1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 16) {
            spanEnemiesMokeponSelect.innerText = 'Fire Lion';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Fuego/FireLion1.jpg'>`
        }
        else if (enemiesMokeponAleatorio == 17) {
            spanEnemiesMokeponSelect.innerText = 'Panti Karis';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Fuego/PantiKaris1.jpg'>`
        }
        else {
            spanEnemiesMokeponSelect.innerText = 'Wolf Fang';
            spanEnemiesPetImage.innerHTML = `<img src='./src/img/mokepones/Fuego/WolfFang1.jpg'>`
        }
}

function selectFonts() {
    let sectionFonts = document.getElementById('fonts')
    sectionFonts.style.display = 'none'

    let sectionAttack = document.getElementById('attack')
    sectionAttack.style.display = 'flex'
    let sectionMasages = document.getElementById('masages')
    sectionMasages.style.display = 'flex'

    let inputWater1 = document.getElementById('water1');
    let inputWater2 = document.getElementById('water2');
    let inputWater3 = document.getElementById('water3');
    let inputEarth1 = document.getElementById('earth1');
    let inputEarth2 = document.getElementById('earth2');
    let inputEarth3 = document.getElementById('earth3');
    let inputFire1 = document.getElementById('fire1');
    let inputFire2 = document.getElementById('fire2');
    let inputFire3 = document.getElementById('fire3');

        if (inputWater1.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Water Dunes.jpg')"
            Swal.fire({
                title: 'Water Dunes!',
                text: 'Has seleccionado este mundo',
                imageUrl: './src/img/fonts/Water Dunes.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Water Dunes',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else if (inputWater2.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Water Frozen.jpg')"
            Swal.fire({
                title: 'Water Frozen!',
                text: 'Has seleccionado este mundo',
                imageUrl: './src/img/fonts/Water Frozen.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Water Frozen',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else if (inputWater3.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Water in Rocks.jpg')"
            Swal.fire({
                title: 'Water In Rocks!',
                text: 'Has seleccionado este mundo',
                imageUrl: './src/img/fonts/Water in Rocks.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Water In Rocks',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else if (inputEarth1.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Earth Fallen.jpg')"
            Swal.fire({
                title: 'Earth Fallen!',
                text: 'Has seleccionado este mundo',
                imageUrl: './src/img/fonts/Earth Fallen.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Earth Fallen',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else if (inputEarth2.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Earth in Ice.jpg')"
            Swal.fire({
                title: 'Earth In Ice!',
                text: 'Has seleccionado este mundo',
                imageUrl: './src/img/fonts/Earth in Ice.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Earth In Ice',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else if (inputEarth3.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Earth Nature.jpg')"
            Swal.fire({
                title: 'Earth Nature!',
                text: 'Has seleccionado este mundo',
                imageUrl: './src/img/fonts/Earth Nature.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Earth Nature',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else if (inputFire1.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Desert Forzen Fire.jpg')"
            Swal.fire({
                title: 'Desert Frozen Fire!',
                text: 'Has seleccionado este mundo',
                imageUrl: './src/img/fonts/Desert Forzen Fire.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Desert Frozen Fire!',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else if (inputFire2.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Desert On Fire.jpg')"
            Swal.fire({
                title: 'Desert On Fire!',
                text: 'Has seleccionado este mundo',
                imageUrl: './src/img/fonts/Desert On Fire.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Desert On Fire',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else if (inputFire3.checked) {
            backgroundPeleas.style.backgroundImage = "url('./src/img/fonts/Desert.jpg')"
            Swal.fire({
                title: 'Desert!',
                text: 'Has seleccionado este mundo',
                imageUrl: './src/img/fonts/Desert.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Desert',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else {
            audioAlert.play();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '!No has seleccionado un Mundo!',
              })
        }
}

function waterAttack() {
    playerAttack = 'Agua'
    aleatoryEnemiesAttack()
}
function earthAttack() {
    playerAttack = 'Tierra'
    aleatoryEnemiesAttack()
}
function fireAttack() {
    playerAttack = 'Fuego'
    aleatoryEnemiesAttack()
}

function aleatoryEnemiesAttack() {
    let aleatoryAttack = aleatorio(1,3)

    if (aleatoryAttack == 1) {
        enemiesAttack = 'Agua'
    }
    else if (aleatoryAttack == 2) {
        enemiesAttack = 'Tierra'
    }
    else {
        enemiesAttack = 'Fuego'
    }

    combatting()
}

function combatting() {

    let spanPlayerLives = document.getElementById('player-lives')
    let spanEnemiesLives = document.getElementById('enemies-lives')

    if (playerAttack == enemiesAttack ) {
        createMasage('Empate')
    }
    else if (playerAttack == 'Agua' && enemiesAttack == 'Fuego') {
        createMasage('Ganaste')
        enemieLives--
        spanEnemiesLives.innerHTML = enemieLives
    }
    else if (playerAttack == 'Fuego' && enemiesAttack == 'Tierra') {
        createMasage('Ganaste')
        enemieLives--
        spanEnemiesLives.innerHTML = enemieLives
    }
    else if (playerAttack == 'Tierra' && enemiesAttack == 'Agua') {
        createMasage('Ganaste')
        enemieLives--
        spanEnemiesLives.innerHTML = enemieLives
    }
    else {
        createMasage('Perdiste')
        playerLives--
        spanPlayerLives.innerHTML = playerLives
    }
    reviewLives()
}

function reviewLives() {
    if (enemieLives == 0) {
        finalMasage('🎉Ganaste el Combate 🎉')
    }
    else if (playerLives == 0) {
        finalMasage('😞Perdiste el Combate😞')
    }
}

function createMasage(result) {
    let sectionMasage = document.getElementById('masages');
    let playerAttackSelected = document.getElementById('player-attack-selected');
    let enemiesAttackSelected = document.getElementById('enemies-attack-selected');
    
    let newPlayerAttack = document.createElement('p')
    let newEnemiesAttack = document.createElement('p')
    
    sectionMasage.innerHTML = result
    newPlayerAttack.innerHTML = playerAttack
    newEnemiesAttack.innerHTML = enemiesAttack

    playerAttackSelected.innerHTML = newPlayerAttack.innerHTML
    enemiesAttackSelected.innerHTML = newEnemiesAttack.innerHTML
}

function finalMasage(finalResult) {
    let sectionMasage = document.getElementById('masages');
    
    let masage = document.createElement('p')
    masage.innerHTML = finalResult
    
    sectionMasage.innerHTML = masage.innerHTML

    let sectionAttackButtons = document.getElementById('attack-buttons');
    sectionAttackButtons.style.display = 'flex'

    let buttonWater = document.getElementById('water')
    buttonWater.disabled = true
    let buttonEarth = document.getElementById('earth')
    buttonEarth.disabled = true
    let buttonFire = document.getElementById('fire')
    buttonFire.disabled = true

    let sectionReset = document.getElementById('reset');
    sectionReset.style.display = 'flex'

}

function resetGame() {
    location.reload()
}

window.addEventListener('load',startGame,audio.play())