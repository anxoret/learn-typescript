// классы в TS создаются также как и в ES6, но есть нюансы

class Typescript {
  version: string // приватная переменная

  constructor(version: string) {
      this.version = version
  }

  info(name: string) { // метод
    return `[${name}: Typescript version is ${this.version}]`
  }
}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel // переписать приватную переменную можно только в констукторе
//   }
// }

// еще более лучшая практика написания того же class Car:

class Car {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) {}
}

// ============

// Модификаторы
// их 3 вида: 
// protected (поле может быть доступно в классе Animal и для всех классов, к. наследуются от класа Animal), 
// public, 
// private (поле доступно только в том классе, в котором было определено)
// по умолчанию модификатор public везде используется

class Animal {
  // voice, color - переменные
  protected voice: string = '' 
  public color: string = 'black'

  private go() {
    console.log('go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()
// cat.voice - не можем так делать, т.к. voice protected, мы можем работать только через функцию setVoice
cat.setVoice('test')
console.log(cat.color)

// ==================

// Абстрактные классы
// они ни во что не компилируются, но они также нам нужны на этапе именно разработки для того, чтобы от них наследоваться
// и помимо этого существуют еще абстрактные методы

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }

  info(): string {
    return 'This is info'
  }
}