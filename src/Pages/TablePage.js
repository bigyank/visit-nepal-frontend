import { useQuery } from "react-query";
import MaterialTable from "material-table";
import Avatar from "@material-ui/core/Avatar";
import LoadingIndicator from "../Components/LoadingIndicator";
import { tableIcons } from "../Components/Table/TableIconsFull";

import { getAllUser } from "../services/admin";

const TablePage = () => {
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
          { title: "Role", field: "role", type: "string" },
          { title: "Verified", field: "verified", type: "boolean" },
          { title: "Created At", field: "createdAt", type: "datetime" },
          { title: "Last Updated", field: "updatedAt", type: "datetime" },
        ]}
        data={data}
        options={{
          exportButton: true,
        }}
      />
    </div>
  );
};

export default TablePage;
