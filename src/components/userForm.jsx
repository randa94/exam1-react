import useForm from "../hooks/useForm";
import Joi from "joi-browser";

const schema = {
  first_name: Joi.string().min(4).max(9).required().label("first name"),
  last_name: Joi.string().min(5).max(7).required().label("last name"),
  email: Joi.string().required().label("Email"),
  gender: Joi.string(),
  country: Joi.string(),
};

const UserForm = ({ data, setData, selectedItem }) => {
  const initialState = {
    id: null,
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    country: "",
  };
  const { values, renderInput, renderButton, handleSubmit } = useForm(
    initialState,
    schema,
    data,
    setData,
    selectedItem
  );

  return (
    <form onSubmit={handleSubmit}>
      {renderInput("first_name", "first_name", values.first_name)}
      {renderInput("last_name", "last_name", values.last_name)}
      {renderInput("E-mail", "email", values.email)}
      {renderInput("gender", "gender", values.gender)}
      {renderInput("country", "country", values.country)}
      {renderButton("Submit")}
    </form>
  );
};

export default UserForm;
