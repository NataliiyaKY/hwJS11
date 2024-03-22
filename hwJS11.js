// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(one => one.json())
    .then(oneOne => {
        console.log(oneOne)
        let {carts} = oneOne;

        let ul = document.createElement('ul')
        document.body.appendChild(ul)

        for (const cart of carts) {
            let li = document.createElement('li');
            li.innerText = `id - ${cart.id}, total - ${cart.total}, discountedTotal - ${cart.discountedTotal}, userId - ${cart.discountedTotal}`;

            let products = cart.products;
            let productsTotal = []
            let p = document.createElement('p')

            for (let i = 0; i < products.length; i++) {
                productsTotal.push(products[i].title);
            }
            p.innerText = productsTotal;
            ul.append(li)
            li.append(p)

        }
    })

//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(two => two.json())
    .then(twoTwo => {
        console.log(twoTwo)
        let {recipes} = twoTwo;

        let ol = document.createElement('ol');
        document.body.appendChild(ol);

        for (let i = 0; i < recipes.length; i++) {
            let li = document.createElement('li');
            li.innerText = recipes[i].ingredients;
            ol.appendChild(li)
        }
    })


// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)


fetch('http://jsonplaceholder.typicode.com/users')
    .then(three => three.json())
    .then(threeThree => {
        console.log(threeThree)
        let elementsThree = threeThree

        let ol = document.createElement('ol')
        document.body.appendChild(ol)

        for (let p = 0; p < 10; p++) {
            let li = document.createElement('li')
            li.innerText = `id - ${elementsThree[p].id}, name - ${elementsThree[p].name}`
            ol.appendChild(li)
        }
    })