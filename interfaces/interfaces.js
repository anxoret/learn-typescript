"use strict";
// interface - некоторый тип, который в основном служит для объектов или для классов, 
// где мы указываем, какие поля, какие функции и какие вообще элементы должны присутствовать у этих объектов
exports.__esModule = true;
var rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
};
rect2.color = 'black';
// мы можем указывать, к какому типу будет относится объект
var rect3 = {};
var rect4 = {}; // альтернативная старая запись
var rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
// implements - принадлежит
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '1px',
    borderRadius: '5px'
};
