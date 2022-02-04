var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("gallery-filter-sorting");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");

    // Appelle la fonction de tri
    const selectedSortingOption = document.querySelector(".select-selected").textContent
    reorderMedias(selectedSortingOption);
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

// Fonction de tri des médias

function reorderMedias(selectedSortingOption){
  if(selectedSortingOption == "Popularité"){
    const allPhotographerMediasByLikes = document.querySelectorAll(".gallery")[0].children
    const allPhotographerMediasByLikesArray = Array.from(allPhotographerMediasByLikes)
    let sortedByLikes = allPhotographerMediasByLikesArray.sort(likesSorter)
    sortedByLikes.forEach(e => document.querySelector(".gallery").appendChild(e));
  }
  else if(selectedSortingOption == "Titre"){
    const allPhotographerMediasByTitle = document.querySelectorAll(".gallery")[0].children
    const allPhotographerMediasByTitleArray = Array.from(allPhotographerMediasByTitle)
    let sortedByTitle = allPhotographerMediasByTitleArray.sort(titleSorter)
    sortedByTitle.forEach(e => document.querySelector(".gallery").appendChild(e));
  }
  else if(selectedSortingOption == "Date"){
    const allPhotographerMediasByDate = document.querySelectorAll(".gallery")[0].children
    const allPhotographerMediasByDateArray = Array.from(allPhotographerMediasByDate)
    let sortedByDate = allPhotographerMediasByDateArray.sort(dateSorter)
    sortedByDate.forEach(e => document.querySelector(".gallery").appendChild(e));
  }
}

function likesSorter(a,b) {
  if(parseInt(a.dataset.mediaLikes) > parseInt(b.dataset.mediaLikes)) return -1;
  if(parseInt(a.dataset.mediaLikes) < parseInt(b.dataset.mediaLikes)) return 1;
  return 0;
}

function titleSorter(a,b) {
  if(a.dataset.mediaTitle < b.dataset.mediaTitle) return -1;
  if(a.dataset.mediaTitle > b.dataset.mediaTitle) return 1;
  return 0;
}

function dateSorter(a,b) {
  const date1 = new Date(b.dataset.mediaDate)
  const date2 = new Date(a.dataset.mediaDate)

  return date2 - date1
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

