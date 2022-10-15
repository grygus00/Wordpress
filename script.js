const endpoint = "https://grygomarcin.one/wordpress/wp-json/wp/v2/bike?_embed";

async function getData() {
  let result = await fetch(endpoint);
  showBike(await result.json());
}

let number = -1;
function showBike(bike) {
  bike.forEach(() => {
    console.log("name", bike[1]);
    number++;

    //template
    const template = document.querySelector("template").content;

    //clone
    const clone = template.cloneNode(true);

    clone.querySelector("h1").textContent = bike[number].title.rendered;
    clone.querySelector("p").textContent = bike[number].bike_price;
    clone.querySelector("img").src =
      bike[number]._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium.source_url;
    clone.querySelector("h1").textContent = bike[number].title.rendered;
    clone.querySelector("h1").textContent = bike[number].title.rendered;

    const parent = document.querySelector(".bike");
    parent.appendChild(clone);
  });
}

getData();
