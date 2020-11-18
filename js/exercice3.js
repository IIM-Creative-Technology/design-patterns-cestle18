let moduleMovie = (function () {
  let title;
  let year;

  function setTitle(titleParam) {
    title = titleParam;
  }
  function getTitle() {
    title = title;
  }

  function getTitleWithLike() {
    return "J aime" + title;
  }

  return {
    setTitle: setTitle,
    getTitle: getTitle,
    like: getTitleWithLike,
  };
})();

moduleMovie.setTitle("Titanic");
console.log(moduleMovie.getTitle());
console.log(moduleMovie.like());
