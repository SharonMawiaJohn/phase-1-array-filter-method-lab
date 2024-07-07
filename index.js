// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver =>
      driver.toLowerCase() === name.toLowerCase()
    );
  }
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(letters.toLowerCase())
    );
  }
  function matchName(drivers, name) {
    return drivers.filter(driver =>
      driver.name.toLowerCase() === name.toLowerCase()
    );
  }
  const drivers = [
    { name: "John", hometown: "New York" },
    { name: "Jane", hometown: "Los Angeles" },
    { name: "Sally", hometown: "Chicago" },
    // Add more drivers as needed
  ];
  
  console.log(findMatching(drivers.map(driver => driver.name), "John")); // Output: ["John"]
  console.log(fuzzyMatch(drivers.map(driver => driver.name), "Ja")); // Output: ["Jane"]
  console.log(matchName(drivers, "Jane")); // Output: [{ name: "Jane", hometown: "Los Angeles" }]