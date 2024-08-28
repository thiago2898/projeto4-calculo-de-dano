const pers1 = prompt('Defina o nome do seu personagem.')
const pers2 = prompt('Defina o nome de outro personagem.')
let attackPower = parseInt(prompt(`Quanto vale o poder de ataque de ${pers1}?`))
let life = parseInt(prompt(`Quantos pontos de vida ${pers2} tem?`))
let defensePower = parseInt(prompt(`Quantos pontos de defesa ${pers2} tem?`))
let haveShield = prompt(`${pers2} tem um escudo?`)
let difference = 0
let damage = 0
let damageInlife = 0

if (attackPower > defensePower &&  haveShield === 'Não' || haveShield === 'não') {
    difference = attackPower - defensePower
    damage = difference
    damageInlife = damage - life
    if (damageInlife < 0) {
        damageInlife *= -1
        alert(`${pers1} atacou. ${pers2} sofreu ${damage} de dano e não possui escudo. Sua vida agora é ${damageInlife}`) 
    } else {
        alert(`${pers1} atacou. ${pers2} sofreu ${damage} de dano e não possui escudo. Sua vida agora é ${damageInlife}`) 
    }
    
} else if (attackPower > defensePower && haveShield === 'Sim' || haveShield === 'sim') {
    difference = (attackPower - defensePower) / 2
    damage = difference
    damageInlife = damage - life
    if (damageInlife < 0) {
        damageInlife *= -1
        alert(`${pers1} atacou. ${pers2} sofreu ${damage} de dano e possui um escudo. Sua vida agora é ${damageInlife}`) 
    } else {
        alert(`${pers1} atacou. ${pers2} sofreu ${damage} de dano e possui um escudo. Sua vida agora é ${damageInlife}`) 
    }
} else if (attackPower <= defensePower) {
    alert(`${pers1} atacou, mas não afetou ${pers2}. Nenhum dano causado!`)
}