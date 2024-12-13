const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function determinarNivel(xp) {
    if (xp <= 1000) {
        return 'Ferro';
    } else if (xp >= 1001 && xp <= 2000) {
        return 'Bronze';
    } else if (xp >= 2001 && xp <= 5000) {
        return 'Prata';
    } else if (xp >= 5001 && xp <= 7000) {
        return 'Ouro';
    } else if (xp >= 7001 && xp <= 8000) {
        return 'Platina';
    } else if (xp >= 8001 && xp <= 9000) {
        return 'Ascendente';
    } else if (xp >= 9001 && xp <= 10000) {
        return 'Imortal';
    } else if (xp >= 10001) {
        return 'Radiante';
    } else {
        return 'Nível desconhecido';
    }
}

rl.question('Qual é o nome do personagem?' , (nome) => {
    rl.question('Qual é o nivel do seu personagem: ', (xpInput) =>{
        const xp = parseInt(xpInput)
        
        if (isNaN(xp)) {
            console.log('XP inválido. Por favor, insira um número válido.');
        } else {
            const nivel = determinarNivel(xp);
            console.log(`O Herói de nome ${nome} está no nível ${nivel}`);
        }
    } )
})