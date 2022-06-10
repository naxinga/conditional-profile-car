import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let fullname = `<div class="name"><h1>${variables.name} ${variables.lastname}</h1>`;
  if (variables.name == null || variables.lastname == null)
    fullname = `<div class="name"> <h1>Nombre y Apellido </h1></div>`;

  let role = `<div class="role"><h2>${variables.role}</h2>`;
  if (variables.role == null) role = `<div class="role"> <h2></h2></div>`;

  let location = `<div class="country"><h3>${variables.country},${variables.city}</h3>`;
  if (variables.country == null || variables.city == null)
    location = `<div class="country"> <h3></h3></div>`;

  let newTwitter = `${variables.twitter}`;
  if (variables.twitter == null) newTwitter = ``;

  let GIT = `${variables.github}`;
  if (variables.github == null) GIT = ``;

  let newLinkedin = `${variables.linkedin}`;
  if (variables.linkedin == null) newLinkedin = ``;

  let newInstagram = `${variables.instagram}`;
  if (variables.instagram == null) newInstagram = ``;

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
            ${fullname}
            ${role}
            ${location}
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${newTwitter}"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://github.com/${GIT}"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${newLinkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${newInstagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
