// Задание 3
// Напиши функцию findBestEmployee(employees), 
// которая принимает объект сотрудников и возвращает 
// имя самого продуктивного (который выполнил больше всех задач).
// Сотрудники и кол-во выполненых задач содержатся как свойства 
// объекта в формате "имя":"кол-во задач".
const findBestEmployee = function(employees) {
	const values = Object.values(employees)
	const maxValue = Math.max.apply(null, values)
	for (const value of values) {
		if (value === maxValue) {
			const key = Object.keys(employees).find(key => employees[key] === value);
			return `Самый продуктивный сотрудник: \ ${key}: ${maxValue}`
		}
	}
};
console.log(findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
}),
);
console.log(findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
}),
);
console.log(findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
}),
);