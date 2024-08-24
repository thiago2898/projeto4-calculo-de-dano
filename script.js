const pers1 = prompt('Defina o nome do seu personagem.')
const pers2 = prompt('Defina o nome de outro personagem.')
let attackPower = parseInt(prompt(`Quanto vale o poder de ataque de ${pers1}?`))
let life = parseInt(prompt(`Quantos pontos de vida ${pers2} tem?`))
let defensePower = parseInt(prompt(`Quantos pontos de defesa ${pers2} tem?`))
 let haveShield = confirm(`${pers2} tem um escudo?`)
let difference = 0
let damage = 0
let damageInlife = 0

if (attackPower > defensePower &&  haveShield === false) {
    difference = attackPower - defensePower
    damage = difference
    damageInlife = damage - life
    if (damageInlife < 0) {
        damageInlife *= -1
        alert(`O dano foi: ${damage}, a vida de ${pers2} é ${damageInlife}`) 
    } else {
        alert(`O dano foi: ${damage}, a vida de ${pers2} é ${damageInlife}`) 
    }
    
} else if (attackPower > defensePower && haveShield === true) {
    difference = (attackPower - defensePower) / 2
    damage = difference
    damageInlife = damage - life
    if (damageInlife < 0) {
        damageInlife *= -1
        alert(`O dano foi: ${damage}, a vida de ${pers2} é ${damageInlife}`) 
    } else {
        alert(`O dano foi: ${damage}, a vida de ${pers2} é ${damageInlife}`) 
    }
} else if (attackPower <= defensePower) {
    alert(`O dano causado foi de 0`)
}