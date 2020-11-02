const dictionaries = {
  demo: "案例一",
};

function findVueName(key) {
  return dictionaries[key] || null;
}
export { findVueName };
