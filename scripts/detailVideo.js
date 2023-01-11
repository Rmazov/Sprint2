let posVideo = sessionStorage.getItem("posDetailVideo")
  ? JSON.parse(sessionStorage.getItem("posDetailVideo"))
  : [];

  let video = sessionStorage.getItem("personajes")
  ? JSON.parse(sessionStorage.getItem("personajes"))
  : [];
 
  const contenedorCards = document.getElementById("contenedorCards");
console.log(video[posVideo]);
let videoActual = video[posVideo];

  const printPersonajes = (videoActual, contenedor) => {
    //1. Vaciemos el contenido del contenedor
    contenedor.innerHTML = "";
    console.log("hola",videoActual);
   console.log(videoActual.video);
 
  
      const article = document.createElement("article");
      article.classList.add("main__card");
      article.innerHTML = `
          <figure class="card__image">
         
          <iframe width="849" height="477" src=${videoActual.video} class="embed-responsive-item"></iframe>
          
          <p  >${videoActual.name} </p>
          <p  >Duracion: ${videoActual.length} </p>
          </figure>
          `;
  
      contenedor.appendChild(article);
  
  };
  
 printPersonajes(videoActual, contenedorCards);

 document.addEventListener("DOMContentLoaded", () => {

// Get a reference to the search form and results div

const resultsDiv = document.getElementById('results');

// Add an event listener to the form to handle the search request

  // Prevent the form from reloading the page
  
  console.log("query");
  // Get the search query from the form
  const query = document.getElementById('query').value;
console.log("videoaca",video);
var videosRecom = video.slice(0, 5);
  // Send a GET request to the YouTube API search endpoint
  // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=1&key=AIzaSyBVXhye656oZ6YF7p3P8JfNr4cQr3KOjDk`)
    //fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=cats&type=video&maxResults=10&key=AIzaSyBVXhye656oZ6YF7p3P8JfNr4cQr3KOjDk`) 
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data.items);

      // Clear the results div
     resultsDiv.innerHTML = '';

      // Loop through the search results and add them to the page
      videosRecom.forEach(item => {
        // const videoId = item.id.videoId;
        // const title = item.snippet.title;
        // const channelId = item.snippet.channelId;
        // const thumbnailUrl = item.snippet.thumbnails.default.url;

        const result = `
               <div>
               <iframe width="195" height="109" src="${item.video}" class="embed-responsive-item"></iframe>
                           
                 </a>
               </div>
               <div>
               <p >${item.name}</p>

                               
                 </a>
               </div>
             `;
        resultsDiv.innerHTML += result;
     
      });
    // });



}); 


