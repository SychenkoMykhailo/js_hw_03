// Задание 6
// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта 
// (значение свойства name). Возвращает общую стоимость продукта (цена * количество).
// Вызовы функции для проверки работоспособности твоей реализации.
const products = [
	{ name: 'Радар', price: 1300, quantity: 4 },
	{ name: 'Сканер', price: 2700, quantity: 3 },
	{ name: 'Дроид', price: 400, quantity: 7 },
	{ name: 'Захват', price: 1200, quantity: 2 },
];
const calculateTotalPrice = function(allProdcuts, productName) {
	const arrays = Object.values(allProdcuts)
	for (let array of arrays) {
		let arr = Object.values(array)
		if (arr.includes(productName)) {
			return `Общая стоимость продукта равна: \ ${arr[1]*arr[2]}`;
		}
	}
};
console.log(calculateTotalPrice(products, 'Радар'));
console.log(calculateTotalPrice(products, 'Дроид'));