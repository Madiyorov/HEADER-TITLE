// function User(name, age) {
//     this.name = name
//     this.age = age


//     this.birthYear = function () {
//         return new Date().getFullYear() - this.age
//     }
// }


// let user = new User('John', 30)

// console.log(user.birthYear());

// let user2 = new User('Alex', 20)

// console.log(user2.birthYear());



// class Human {
//     constructor(obj) {
//         this.name = obj.name
//         this.gender = obj.gender
//     }
// }

// class Man extends Human {
//     constructor(obj) {
//         super(obj)
//         this.name = 'Alex'
//         this.gender = 'М'
//     }
// }


// const human = new Human({
//     name: 'Имя',
//     gender: 'Пол'
// })

// const man = new Man({})

// console.log(human);
// console.log(man);


/* Урок */

class Scroll {
    constructor(obj) {
        this.element = document.querySelector(obj.selector)

        this.top = obj.top

        this.element.style.position = 'fixed';

        this.unit = obj.unit

        this.element.style.top = this.scroll()

        window.addEventListener('scroll', () => this.scroll())
    }


    scrollNumber() {
        if(this.unit == 'px') {
            return this.top >= 0 ? this.top : 0;
        }else if(this.unit == '%' || this.unit == undefined) {
            return (window.innerHeight / 100 * this.top) - this.element.clientHeight
        }
    }

    scroll() {
        this.window = this.scrollNumber()

        if(this.window - scrollY > 0) {
            this.element.style.top = this.window - scrollY + 'px'
        }else {
            this.element.style.top = 0
        }
    }
}

const myScroll = new Scroll({
    selector: '.header__nav',
    top: 100
})

/* ДЗ */

class Hover {
    constructor (selector) {
        this.element = document.querySelector(selector)

        this.element.addEventListener('mouseover', () => this.move())
    }

    random(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min)
    }

    move() {
        this.element.style.marginLeft = this.random(0, innerWidth - this.element.clientWidth) + 'px'
        this.element.style.marginTop = this.random(0, innerHeight - this.element.clientHeight) + 'px'
    }

}  

const hover = new Hover('.header__content')

// console.log(hover);

/* ДЗ */

class Menu {
    constructor(obj) {
        this.btn = document.querySelector(obj.btn)
        this.menu = document.querySelector(obj.menu)
        this.closeBtn = document.querySelector(obj.closeBtn)


        this.menu.style = `
        position: fixed;
        height: 100vh;
        flex-direction: column;
        background: #008f8f;
        top: 0;
        left: -100%;
        max-width: 200px;
        width: 100%;
        padding-left: 30px;
        justify-content: space-evenly;
        transition: 1s;            
        `

        this.btn.addEventListener('click', () => this.open())
        this.closeBtn.addEventListener('click', () => this.close())
    }

    open() {
        this.menu.style.left = '0'
    }

    close() {
        this.menu.style.left = '-100%'
        this.menu.style.transition = '1s'
    }
}

const menu = new Menu({
    btn: '.open',
    menu: '.header__menu',
    closeBtn: '.header__menu-close'
})


/* ДЗ */

function printText(el) {

	const letterTimeout = 100

	let text = el.innerHTML
	let i = 1

	let print__fn = function() {

			if(i <= text.length) {
				el.innerHTML = text.substr(0, i);
				setTimeout(arguments.callee, letterTimeout);
			}
			i++;
		}

	print__fn() // init
};

// init
let el = document.getElementById('my-text')
let el2 = document.getElementById('my-description')
printText(el2);
printText(el);


/* class Print {
    constructor (selector) {
        this.element = document.querySelector(selector)

        this.element.addEventListener('mouseover', () => this.printText())
    }
}


printText() {
    
}


const print = new Print('h1') */