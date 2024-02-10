const articles = [
    {
        name: 'Статья 1',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda provident eos eligendi quae ullam facilis sapiente corporis repudiandae, laudantium, illo sequi incidunt fugiat eaque neque quibusdam inventore voluptatum sit amet.'
    },
    {
        name: 'Статья 2',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error assumenda perferendis distinctio in cum sequi saepe voluptatibus incidunt, necessitatibus id?'
    },
    {
        name: 'Статья 3',
        info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quia autem optio cumque, earum temporibus ex assumenda in facere totam mollitia, velit deleniti excepturi esse eum officia nulla debitis maiores! Maxime vero rem, voluptates minima accusantium voluptas quae laborum mollitia!'
    }
]

const app = document.querySelector('#app');

articles.forEach(element => {
    const articleEl = document.createElement('div');
    articleEl.classList.add('article');

    const headingName = document.createElement('h2');
    headingName.classList.add('heading');
    headingName.textContent = element.name;

    const headingInfo = document.createElement('h3');
    headingInfo.classList.add('article__info');
    headingInfo.textContent = element.info;

    articleEl.append(headingName);
    articleEl.append(headingInfo);

    app.append(articleEl);
});

