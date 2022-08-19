import { INPUT_FIELD_MESSAGES } from "../Configs/Message";
import { validateEmail } from "./emailValidation";

export const validateInput = ({
  value = "",
  min = 3,
  max = 50,
  field = "",
}) => {
  if (!value)
    return INPUT_FIELD_MESSAGES.REQUIRED_MSG.required.replace("#INPUT#", field);

  if ((value && field !== "Message" && value.length < 3) || value.length > 50)
    return INPUT_FIELD_MESSAGES.RANGE_MSG.in_between.replace("#INPUT#", field);

  if (value && field === "Message" && value.length < 3)
    return INPUT_FIELD_MESSAGES.RANGE_MSG.msg_in_between.replace(
      "#INPUT#",
      field
    );

  if (field === "Email") {
    console.log(validateEmail(value));
  }
};
