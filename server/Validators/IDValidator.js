const isValidID = (id) => {
  console.log(`isValidID:${id}`);
  const result = id.match(/^[0-9a-fA-F]{24}$/);
  if (result === null) {
    return false;
  } else {
    return true;
  }
};

export default isValidID;
