$(() => {
    const products = [
        { name: 'shirts', price: 25, id: 3, description: '', picture: 'http://www.helstektgris.se/images/hels5244/Billiga%20Online%20Kl%C3%A4dwebbplatser%20-%20South%20West%20Marinbl%C3%A5%20R%C3%B6d%20Klubboverall%20Billigt%2033.jpg',categor: 'Hemmet' },
        { name: 'shirts', price: 25, id: 3, description: '', picture: 'http://www.blommamode.com/upfiles/m/Sportkl%C3%A4der-Dam-Herr-H%C3%B6st-L%C3%B6pning-Trend-Byxor-Dr%C3%A4kter-2717.jpg', category: 'Kontor' },
        { name: ' shirts', price: 800, id: 5, description: '', picture: 'http://www.hansmat.se/images/Image/Joggingbyxor%20och%20sportoverall/Tracksuit%20-%20Marinbl%20Sportkl%20der%20Online%20Custom%20made%20adidas%20Originals%20Herrkl%20der%20-%205-Q4PYXGSF%203809.jpg', category: 'Kontor' },
        { name: 'shirts', price: 800, id: 5, description: '', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9huACAB3Xpo51aaN-Rcr_mU5_q4ZjtmYqlL6eTNmHDf0h9QqA', category: 'Kontor' },
        { name: 'shirts', price: 800, id: 5, description: '', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9huACAB3Xpo51aaN-Rcr_mU5_q4ZjtmYqlL6eTNmHDf0h9QqA', category: 'Kontor' },
        { name: 'shirts', price: 800, id: 5, description: '', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9huACAB3Xpo51aaN-Rcr_mU5_q4ZjtmYqlL6eTNmHDf0h9QqA', category: 'Kontor' },
        { name: 'shirts', price: 25, id: 3, description: '', picture: 'http://www.billigtklader.com/image/c/Herr-Huvtr%C3%B6jor-V%C3%A5r-Trenchcoat-Sportkl%C3%A4der-2018-Huvtr%C3%B6ja-H%C3%B6st-M%C3%B6rkbl%C3%A5-Rea-2702-c02.jpg',categor: 'Hemmet' },
        { name: 'shirts', price: 25, id: 3, description: '', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9huACAB3Xpo51aaN-Rcr_mU5_q4ZjtmYqlL6eTNmHDf0h9QqA', category: 'Kontor' },
        { name: ' shirts', price: 800, id: 5, description: '', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9huACAB3Xpo51aaN-Rcr_mU5_q4ZjtmYqlL6eTNmHDf0h9QqA', category: 'Kontor' },
        { name: ' shirts', price: 800, id: 5, description: '', picture: 'https://www.dressinn.com/f/13702/137027517/adidas-originals-radkin-crewneck.jpg', category: 'Kontor' },
        { name: 'shirts', price: 800, id: 5, description: '', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9huACAB3Xpo51aaN-Rcr_mU5_q4ZjtmYqlL6eTNmHDf0h9QqA', category: 'Kontor' },
        { name: 'shirts', price: 800, id: 5, description: '', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9huACAB3Xpo51aaN-Rcr_mU5_q4ZjtmYqlL6eTNmHDf0h9QqA', category: 'Kontor' },

    ];
 
    let cart = [];
    const appendlist = (array, location) => {
        const temolate = array.map((item, id) => {
            return `
        <li class="product col-3">
        <img src="${item.picture}" alt="${item.description}">
        <div class="product-content">
        <h4>${item.name} - <span class="catogry">${item.category}</span> <sm<l>${item.price}kr
        <p>${item.description}</p>
        </div>
        <button type="button" id="${item.id}">Köp Nu! </button>
        </li>`
        });
        $(location).html(temolate);

    }
 
    const addToCart = (array, id, location) => {
 
        let a = array.find(i => i.id === id);
 
        cart.push(a);
 
        const item = `
    <li class="item" id=${a.id}">
    <h4>${a.name}</h4>
    <button type="button">x</button>
    `;
        $('span.amount').text(cart.length);
        $(location).append(item);
    }
 
 
    const removeFromCart = (array, removedItem) => {
        array.splice(removedItem, 1);
    }
 
    const populateCart = (array, location) => {
        let item = `
    <li class="item id="${array.id}">
    <button type="button"></button>
    </li>
    `;
        $(`span.amount`).text(array.length);
 
        $(location).append(item);
    }
 
 
    appendlist(products, $('.products-list'));
 
 
 
    $(`.product`).on(`click`, `button`, (e) => {
        let id = e.currentTarget.id;
 
        addToCart(products, +id, $('.cart-list'));
 
    });
    $(`.cart-list`).on(`click`, `button`, (e) => {
        let item = $(e. currentTarget).closest(`li`).remove();
        removeFromCart(cart, item);
        populateCart(cart, $(`.cart-list`));

    });
 });



function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}



       





