// interface - некоторый тип, который в основном служит для объектов или для классов, 
// где мы указываем, какие поля, какие функции и какие вообще элементы должны присутствовать у этих объектов

import { black } from "color-name"

interface Rect {
  readonly id: string // readonly - модификатор, который делает поле неизменным, только для чтения
  color?: string // ? - делает поле необязательным
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20, 
    height: 30
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: '12345',
  size: {
    width: 10, 
    height: 5
  }
}

rect2.color = 'black'

// мы можем указывать, к какому типу будет относится объект
const rect3 = {} as Rect
const rect4 = <Rect>{} // альтернативная старая запись

// Наследование интерфейсов
interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

// интерфейс часто называют через I, чтобы было понятно, что это интерфейс
interface IClock {
  time: Date
  setTime(date: Date): void
}

// implements - принадлежит
class Clock implements IClock {
  time: Date = new Date() 

  setTime(date: Date): void {
    this.time = date
  }
}

// бывают ситуации, когда нам необходимо создать интерфейс для объекта, у которого будет большое количество динамических ключей
interface Styles {
  [key: string]: string
} // перечислять здесь вообще все свойства будет неэффективно, поэтому существует такая запись 

const css: Styles = {
  border: '1px solid black',
  marginTop: '1px',
  borderRadius: '5px'
}