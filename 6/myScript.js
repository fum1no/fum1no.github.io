function updatePrice() {
    // Находим select по имени в DOM.
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.prodTypes[priceIndex];
    }
    
    // Стиль радиокнопок для всех блок
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "block";
    
    // Смотрим какая товарная опция выбрана.
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      if (radio.checked) {
        let optionPrice = prices.prodOptions[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });
  
    // Скрываем или показываем чекбоксы.
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value == "1" ? "block" : "none");
  
    // Смотрим какие товарные свойства выбраны.
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        let propPrice = prices.prodProperties[checkbox.name];
        if (propPrice !== undefined) {
          price += propPrice;
        }
      }
    });
    
    // Скрываем или показываем доп свойства.Ч
    let selectDiv = document.getElementById("prodselect");
    selectDiv.style.display = (select.value == "2" ? "block" : "none");

    // Какой селект выбран.
    if(select.value == "2"){
        let selectElement = document.querySelector("#prodselect");
        let SelectOptions = selectElement.options[selectElement.selectedIndex]; // Получаем выбранную опцию
        let selPrice = prices.SelectedProperties[SelectOptions.value];
        if (selPrice !== undefined) {
        price += selPrice;
        }   
}
    


    let prodPrice = document.getElementById("prodPrice");
    let ProductCol = document.getElementById("NumOfProduct").value;
    prodPrice.innerHTML = ProductCol * price + " рублей";
  }
  
  function getPrices() {
    return {

        prodTypes: [100, 200, 300],
        prodOptions: {
            option1: 10,
            option2: 20,
            option3: 30,
        },
        prodProperties: {
            prop1: 100,
            prop2: 200,
        },
        SelectedProperties:
        {
            extraprop1: 1000,
            extraprop2: 2000,
            extraprop3: 3000,
        }
    };
  }
  
  window.addEventListener('DOMContentLoaded', function (event) {
    // Скрываем радиокнопки.

    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";
    
    // Находим select по имени в DOM.
    let s = document.getElementsByName("prodType");
    let select = s[0];
    // Назначаем обработчик на изменение select.
    select.addEventListener("change", function(event) {
      let target = event.target;
      console.log(target.value);
      updatePrice();
    });
    
    // Назначаем обработчик радиокнопок.  
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let r = event.target;
        console.log(r.value);
        updatePrice();
      });
    });
  
    let prop = document.getElementsByName("SelectOptions");
    prop.forEach(function(select) {
      select.addEventListener("change", function(event) {
        let r = event.target;
        console.log(r.value);
        updatePrice();
      });
    });

    // Назначаем обработчик чекбоксов.  
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let c = event.target;
        console.log(c.name);
        console.log(c.value);
        updatePrice();
      });
    });
  
    updatePrice();
  });