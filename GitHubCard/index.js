/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');
const followers = document.querySelector('.followers');
axios.get('https://api.github.com/users/RobertDGordon')
.then(response => {
  console.log (response)
  cards.append(createMyCard(response.data));
  getFollowers(response.data)
  })
  .catch(error =>{
    console.log(error);
  });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

function getFollowers(obj){
  axios.get(obj.followers_url)
  .then(response => {
    console.log ('follower url data',response)
    response.data.forEach(item =>{
      // followersArray.push(item.url)
      axios.get(item.url)
      .then (response => {
        followers.append(createCard(response.data))
      })
      .catch (error =>{
        console.log(error)
      })
    })
  })
  .catch (error =>{
    console.log(error)
  })
    
    // .then(response => {
    //   response.data.forEach (item => {

    //   })
    // })
}

// console.log (followersArray)



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>


*/

function createCard(obj){
  const newCard = document.createElement('div');

  newCard.classList.add('card');

  newCard.innerHTML = `<img src=${obj.avatar_url} />
  <div class="card-info">
    <h3 class="name">${obj.name}</h3>
    <p class="username">${obj.login}</p>
    <p>${checkWebsite(obj.blog)}</p>
    <p>Location: ${checkNull(obj.location)}</p>
    <p>Profile:  
      <a href=${obj.html_url}>${obj.html_url}</a>
    </p>
    <p>Followers: ${obj.followers}</p>
    <p>Following: ${obj.following}</p>
    <p>Bio: <span class="bio">${checkNull(obj.bio)}</span></p>
  </div>`;
  console.log('website here',obj.blog)
  return newCard
}

function checkWebsite(item){
  if (item !== ''){
    return `Website: <a href=${item}>${item}</a>`
  }
  return ''
}

function checkNull(item){
  if (item === null){
    return 'N/A';
  } else{
    return item;
  }
}






function createMyCard(obj){
  const newCard = document.createElement('div');
        // newImage = document.createElement('img'),
        // newCardinfo = document.createElement('div'),
        // newName = document.createElement('h3'),
        // newUsername = document.createElement('p'),
        // newLocation = document.createElement('p'),
        // newPLink = document.createElement('p'),
        // newLink = document.createElement('a'),
        // newFollowers = document.createElement('p'),
        // newFollowing = document.createElement('p'),
        // newBio = document.createElement('bio');

  newCard.classList.add('card');
  // newName.classList.add('name');
  // newCard.appendChild(newImage);
  // newCard.appendChild(newCardinfo);
  // newCard.appendChild(newName);
  newCard.innerHTML = `<img src=${obj.avatar_url} />
  <div class="card-info">
    <h3 class="name">${obj.name}</h3>
    <p class="username">${obj.login}</p>
    <p>Website: <a href=${checkNull(obj.blog)}>${checkNull(obj.blog)}</a></p>
    <p>Location: ${obj.location}</p>
    <p>Profile:  
      <a href=${obj.html_url}>${obj.html_url}</a>
    </p>
    <p>Followers: ${obj.followers},462,821</p>
    <p>Following: ${obj.following}6</p>
    <p>Bio: <span class="bio">${checkNull(obj.bio)}</span></p>
  </div>`;
  

  // newImage.src = obj.avatar_url;
  // console.log(newImage)
  // newName.textContent = obj.name;
  // newUsername.textContent = obj.login;
  // newLocation.textContent = obj.location;
  // newLink.src = obj.url;
  // newLink.textContent = obj.url;
  // newPLink.textContent = `Profile: ${newLink}`;
  // newFollowers.textContent = `Followers: ${obj.followers}`;
  // newFollowing.textContent = `Following: ${obj.following}`;
  // newBio.textContent = `Bio: ${obj.bio}`;

  return newCard;

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
