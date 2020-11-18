let moduleMe = (function () {
  let name;
  let age;

  function setName(nameParam) {
    name = nameParam;
  }
  function getName() {
    name = name;
  }

  function setAge(ageParam) {
    age = ageParam;
  }
  function getAge() {
    age = age;
  }
  function getNameWithAge() {
    return "Mon nom est " + name + " et j'ai " + age;
  }

  return {
    setName: setName,
    getName: getName,
    setAge: setAge,
    getAge: getAge,
    nameWithAge: getNameWithAge,
  };
})();

moduleMe.setName("Caroline");
console.log(moduleMe.getName());
moduleMe.setAge("23 ans");
console.log(moduleMe.getAge());
console.log(moduleMe.nameWithAge());
