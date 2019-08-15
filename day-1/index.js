/**
 * ex: tinh tong nguoi co trong mang
 */

 function sumPerson(persons) {
    for (var person of persons) {
        console.log(person);
    }
 };

 var persons = [
    { name: 'Toàn', age: 20 },
    { name: 'Bích', age: 18}
 ];

 sumPerson(persons);
 