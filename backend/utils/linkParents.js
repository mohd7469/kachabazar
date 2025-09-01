async function linkParents(Model, nameField = "name.en", parentNameField = "parentName", parentIdField = "parentId") {
  // fetch all docs
  const all = await Model.find();
  
  for (let i = 0; i < all.length; i++) {
    const doc = all[i]; // by index
    const parentName = doc.get(parentNameField);
    
    if (parentName) {
      // look up parent by name.en (exact match)
      const parent = all.find(p => p.get(nameField) === parentName);
      if (parent) {
        doc.set(parentIdField, String(parent._id)); // set parentId
      }
    }
    
    await doc.save(); // save with whatever it has now,
  }
}

module.exports = linkParents;