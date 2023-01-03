import { useState } from "react";
import { toast } from "react-toastify";
import Table from "./common/table";
import Spinner from "./common/spinner";
import Pagination from "./common/pagination";
import useFetch from "../hooks/useFetch";
import UserForm from "./userForm";
import { Link } from "react-router-dom";

const Users = () => {
  const { data: users, setData: setUsers } = useFetch("/users.json");
  const [paginatedData, setPaginatedData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const columns = [
    { path: "id", label: "ID" },
    { path: "first_name", label: "First_Name" },
    { path: "last_name", label: "Last_Name" },
    { path: "email", label: "E-mail" },
    { path: "gender", label: "Gender" },
    { path: "country", label: "Country" },
    {
      lable: "Actions",
      content: (item) => (
        <>
          <button
            className="btn btn-danger m-2"
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>
          <button
            className="btn btn-warning m-2"
            onClick={() => setSelectedItem(item)}
          >
            Edit
          </button>
          <Link className="btn btn-primary " to={`/users/${item.id}`}>
            View
          </Link>
        </>
      ),
    },
  ];
  const handleDelete = (item) => {
    const newData = users.filter((user) => user.id !== item.id);
    setUsers(newData);
    toast.error("User is deleted successfly...", { theme: "colored" });
  };
  return (
    <>
      <div className="row">
        <div className="col-8">
          {users ? (
            <>
              <Table data={paginatedData} columns={columns} />
              <Pagination setPaginatedData={setPaginatedData} data={users} />
            </>
          ) : (
            <Spinner />
          )}
        </div>
        <div className="col-4">
          <UserForm
            selectedItem={selectedItem}
            data={users}
            setData={setUsers}
          />
        </div>
      </div>
    </>
  );
};

export default Users;
