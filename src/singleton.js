/**
 * Одиночка
 * 
 */
const Singleton = (function () {
    let instance;

    // Конструктор 
    function Singleton() {
        if (!!instance) {
            return instance
        } else {
            instance = this
        }
    }

    // Приватные методы и свойства
    function _privateMethod() {
        // какой то код
    }

    // Публичные методы
    Singleton.prototype.toString = function () {
        return '[object instance]';
    }

    return Singleton
})()

const a = new Singleton();
const b = new Singleton();

console.log(a === b);
