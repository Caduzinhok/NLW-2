const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Geografia",       
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
]

//Funcionalidades
function convertHoursToMinutes(time) {
    const [hour,minutes] = time.split(":")
    return Number((hour*60) + minutes)
}
function getSubject(subjectNumber){
    console.log("uhsuhshu")
    const position = +subjectNumber - 1
    return subjects[position]
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}