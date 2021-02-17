/** 1 užduotis */
let age = '25';
let name = 'Petras';
let hobby = 'plaukimas';
console.log('Mano vardas ' + name + ', man ' + age + '. Mano hobys yra ' + hobby);
/** 2 užduotis */
let birthYear = '2021';
let anotherYear = '2040';
console.log(anotherYear + ' metais man bus ' + (anotherYear-birthYear) + ' arba ' + (anotherYear-birthYear-1) + ' metai/metų.');
/** 3 užduotis */
let skersmuo = '14';
let spindulys = skersmuo/2;
let plotas = Math.PI*Math.pow(spindulys, 2);
console.log('Apskritimo, kurio skersmuo yra ' + skersmuo + ', plotas yra ' + plotas);
/** 4 užduotis */
let temp = '23';
let tempCtoF = temp * 9 / 5 + 32;
console.log(temp + '\xB0C yra ' + tempCtoF + '\xB0F.');
/** 5 užduotis */
let txt = 'Mes kalbame mažai, jeigu nekalbame apie save.';
console.log(txt.length);
console.log(txt.toUpperCase());
console.log(txt.replace('apie save.', ''));
let array = txt.split(' ');
console.log(array);
console.log(txt.search('mažai'));
console.log(txt.replace('kalbame', 'šnekame'));
/** 6 užduotis */
let text = 'laBa8s rYta56s, lIEtuva';
let textNoNum = text.replace(/[0-9]/g, '');
let textLowerCase = textNoNum.toLocaleLowerCase();
console.log(textNoNum);
console.log(textLowerCase);
//console.log(textLowerCase.toLocaleUpperCase('labas', 'lietuva'));
/** 7 užduotis */
let masyvas = [1, 2, 3, 4, 5, 'labas', 6, 'hello', 9, 10];
console.log(masyvas);
console.log(masyvas.pop() + ' = ' + masyvas);
console.log(masyvas.shift() + ' = ' + masyvas);
masyvas[5] = 'new';
console.log(masyvas);
let newMasyvas = [8, 6, 8, 7, 0, 'krabas', 12, 6546, 99, 1564];
let newArray = masyvas.concat(newMasyvas);
console.log(newArray);
console.log(newArray.join(', '));
/** 8 užduotis */
let mokinys = [
    {
        vardas: 'Martynas',
        pavarde: 'Lubys',
        amzius: 17,
        pazymiusVidurkis: 4.5,
        stipendija: false
    },
    {
        vardas: 'Alina',
        pavarde: 'Alijeva',
        amzius: 16,
        pazymiusVidurkis: 9,
        stipendija: true
    },
    {
        vardas: 'Kazimieras',
        pavarde: 'Bakštys',
        amzius: 17,
        pazymiusVidurkis: 9.3,
        stipendija: true
    },
      {
        vardas: 'Algimantas',
        pavarde: 'Peraitis',
        amzius: 16,
        pazymiusVidurkis: 6.5,
        stipendija: true
    },
      {
        vardas: 'Kotryna',
        pavarde: 'Petraitytė',
        amzius: 16,
        pazymiusVidurkis: 4,
        stipendija: false
    }  
]
/** 9 užduotis */
console.log(mokinys);