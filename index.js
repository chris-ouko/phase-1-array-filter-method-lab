// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  const drivers = [
    { name: "John", hometown: "New York" },
    { name: "Jane", hometown: "Los Angeles" },
    { name: "James", hometown: "Chicago" },
    { name: "Jerry", hometown: "New York" },
  ];
  
  console.log(findMatching(drivers, "John")); // Returns [{ name: "John", hometown: "New York" }]
  console.log(fuzzyMatch(drivers, "ja")); // Returns [{ name: "Jane", hometown: "Los Angeles" }, { name: "James", hometown: "Chicago" }]
  console.log(matchName(drivers, "Jerry")); // Returns [{ name: "Jerry", hometown: "New York" }]