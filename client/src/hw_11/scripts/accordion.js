import '../styles/accordion.scss';

export function accordion() {
  const accordionTitle = document.getElementsByClassName("accordion__section_title");

  for (let i = 0; i < accordionTitle.length; i++) {
      accordionTitle[i].addEventListener("click", function() {
        accordionTitle[i].classList.toggle("active");
          const accContent = accordionTitle[i].nextElementSibling;
          if (accContent.style.display === "block") {
              accContent.style.display = "none";
          } else {
              accContent.style.display = "block";
              accContent.style.visibility = "visible";
          }
      });
  }
}