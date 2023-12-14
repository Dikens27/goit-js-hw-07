
const categories = document.querySelectorAll('#categories');
const items = document.querySelectorAll('.item');

console.log(`Namber of categories: ${items.length}`);

const categoryArray = Array.from(items);

categoryArray.forEach(item => {
    const title = item.querySelectorAll('h2')[0].textContent;
    const elements = item.querySelectorAll('li').length;
    console.log(title);
    console.log(elements);
});
