document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
});


const temples = [
      {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "Belo Horizonte Brazil",
        location: "Belo Horizonte, Brazil",
        dedicated: "2023, June, 17",
        area: 27000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/belo-horizonte-brazil-temple/belo-horizonte-brazil-temple-22100-main.jpg"
      },
      {
        templeName: "Porto Alegre Brazil",
        location: "Porto Alegre, Brazil",
        dedicated: "2000, December, 17",
        area: 13325,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-14267-main.jpg"
      },
      {
        templeName: "London England",
        location: "London, England",
        dedicated: "1983, December, 2",
        area: 42652,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg"
      },
  ];
  
  const templesGallery = document.querySelector("#temples-gallery");

  function displayTemples(templesList) {
      templesGallery.innerHTML = "";
  
      templesList.forEach(temple => {
          let templeCard = document.createElement("figure");
  
          let templeImg = document.createElement("img");
          templeImg.src = temple.imageUrl;
          templeImg.alt = temple.templeName;
          templeImg.loading = "lazy"; 
  
          let templeCaption = document.createElement("figcaption");
          templeCaption.innerHTML = `
              <strong>${temple.templeName}</strong><br>
              ${temple.location}<br>
              Dedicated: ${temple.dedicated}<br>
              Area: ${temple.area} sqft
          `;
  
          templeCard.appendChild(templeImg);
          templeCard.appendChild(templeCaption);
          templesGallery.appendChild(templeCard);
      });
  }
  
  displayTemples(temples);

  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        let filter = event.target.textContent.toLowerCase();

        let filteredTemples;

        switch (filter) {
            case "old":
                filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
                break;
            case "new":
                filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
                break;
            case "large":
                filteredTemples = temples.filter(t => t.area > 90000);
                break;
            case "small":
                filteredTemples = temples.filter(t => t.area < 10000);
                break;
            case "home":
                filteredTemples = temples;
                break;
        }

        displayTemples(filteredTemples);
    });
});



  