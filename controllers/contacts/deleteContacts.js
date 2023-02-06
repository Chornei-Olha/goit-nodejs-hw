const createError = require("http-errors");
const Contact = require("../../models/contacts");

const deleteContacts = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await Contact.findByIdAndRemove(contactId);
    if (!contact) {
      throw createError(404, `${contactId} not found`);
    }
    res.json({
      status: "success",
      message: "contact deleted",
      code: 200,
      data: {
        result: contact,
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteContacts;