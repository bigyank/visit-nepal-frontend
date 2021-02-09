import { useQuery, useMutation, queryCache } from "react-query";
import MaterialTable from "material-table";
import { toast } from "react-toastify";
import Avatar from "@material-ui/core/Avatar";
import LoadingIndicator from "../Components/LoadingIndicator";
import { tableIcons } from "../Components/Table/TableIconsFull";

import { getAllUser, deleteUser, updateUser } from "../services/admin";

const TablePage = () => {
  const [mutateDeleteUserAdmin] = useMutation(deleteUser, {
    onSuccess: () => {
      queryCache.refetchQueries("adminGetAllUser");
      toast.warn("user deleted");
    },
    onError: (error) => {
      const errMessage =
        error.response && error.response.data.error
          ? error.response.data.error.message
          : error.message;

      toast.error(errMessage);
    },
  });

  const [mutateUpdateUserAdmin] = useMutation(updateUser, {
    onSuccess: () => {
      queryCache.refetchQueries("adminGetAllUser");
      toast.success("user updated");
    },
    onError: (error) => {
      const errMessage =
        error.response && error.response.data.error
          ? error.response.data.error.message
          : error.message;

      toast.error(errMessage);
    },
  });

  const { isLoading, data } = useQuery("adminGetAllUser", getAllUser);
  if (isLoading || !data) return <LoadingIndicator />;

  return (
    <div>
      <MaterialTable
        icons={tableIcons}
        title="All Users"
        columns={[
          {
            field: "displayPicture",
            title: "Avatar",
            render: (rowData) => (
              <Avatar alt={rowData.displayName} src={rowData.displayPicture} />
            ),
          },
          { title: "Full Name", field: "displayName", type: "string" },
          { title: "Email", field: "email", type: "string" },
          { title: "Verified", field: "verified", type: "boolean" },
          {
            title: "Role",
            field: "role",
            type: "string",
            lookup: { traveller: "traveller", guide: "guide", admin: "admin" },
          },
          { title: "Created At", field: "createdAt", type: "datetime" },
          { title: "Last Updated", field: "updatedAt", type: "datetime" },
        ]}
        data={data}
        options={{
          exportButton: true,
        }}
        editable={{
          onRowDelete: (oldData) => mutateDeleteUserAdmin(oldData.id),
          onRowUpdate: (newData) => mutateUpdateUserAdmin(newData),
        }}
      />
    </div>
  );
};

export default TablePage;
