const listaDePaises = ["Brasil", "Argentina", "Nigeria", "India","Russia","China","Africa do Sul","Estados Unidos"]
console.log("a lista de países são",listaDePaises)
if (listaDePaises.length < 10) {
    console.log("É possível cadastrar mais países")
} else { console.log("Não há mais espaço na lista") }

var tamanhokm2 = 5

if (tamanhokm2 = 100) {
    console.log("O tamanho do país está acima do mínimo permitido")

} else { console.log("Não é possível cadastrar miniestado") }

let NomePaises = "Omã"
if (NomePaises.length >= 3) { console.log("Nome com o mínimo de 3 caracteres") }
else if (NomePaises.length == 0) {
    console.log("O nome não pode ser vazio")
} else { console.log("O nome deve possuir mais de 3 ou mais caracteres") }

switch (NomePaises.length) {
    case 0:
        console.log("O nome não pode ser vazio")
        break;

    case 1:
    case 2:
        console.log("O nome deve possuir mais de 3 ou mais caracteres")
        break;
    default:
        console.log("Nome com o mínimo de 3 caracteres")
        break;
}
