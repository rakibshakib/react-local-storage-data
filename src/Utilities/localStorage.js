const getDB = () => localStorage.getItem("user-info");
const updateDB = (cart) => {
    localStorage.setItem("user-info", JSON.stringify(cart));
}

const addToDb = (id) => {
  const exits =getDB();
  let userInfo = {};
  if (!exits) {
    userInfo[id] = 1;
  } else {
    userInfo = JSON.parse(exits);
    if (userInfo[id]) {
      const newCount = userInfo[id] + 1;
      userInfo[id] = newCount;
    } else {
      userInfo[id] = 1;
    }
  }
  updateDB(userInfo)
};

const removeFromDb = (id) => {
    const exits = getDB();
    if(!exits){

    }
    else{
        const userInfo = JSON.parse(exits);
        delete userInfo[id];
        updateDB(userInfo)
    }

}

export { addToDb, removeFromDb };
