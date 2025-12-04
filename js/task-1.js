function analyzeCategories() {
  const categoriesElem = document.querySelectorAll('.item');
  console.log(`Number of categories: ${categoriesElem.length}`);

  categoriesElem.forEach(item => {
    const titleElem = item.querySelector('h2');
    const categoryName = titleElem.textContent;

    const ulElem = item.querySelector('ul');
    const items = ulElem.children.length;

    console.log(`Kategory: ${categoryName}`);
    console.log(`Elements: ${items}`);
  });
}
analyzeCategories();
