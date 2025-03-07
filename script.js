// Функция для выполнения вычислений
function calculate(event) {
    // Останавливаем отправку формы
    event.preventDefault();

    // Получаем значения чисел и операции из формы
    let a = parseFloat(document.getElementById("firstNumber").value);  // Первое число
    let b = parseFloat(document.getElementById("secondNumber").value); // Второе число
    let o = document.getElementById("operations").value.trim();  // Операция

    // Получаем элемент для отображения результата
    let result = document.getElementById("result");

    // Выполняем вычисление в зависимости от выбранной операции
    switch(o) {
        case "sum":
            result.textContent = "Result: " + (a + b);
            break;
        case "subtract":
            result.textContent = "Result: " + (a - b);
            break;
        case "multiply":
            result.textContent = "Result: " + (a * b);
            break;
        case "divide":
            // Проверка на деление на 0
            if (b != 0) {
                result.textContent = "Result: " + (a / b);
            } else {
                result.textContent = "Error: you cannot divide by zero!";
            }
            break;
        default:
            result.textContent = "Error: wrong operation selected!";
    }
}
