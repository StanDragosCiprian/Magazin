import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
interface IProduct {
  product: Promise<any[]>;
  productKey: string[];
  setUpdate: React.Dispatch<React.SetStateAction<string>>;
  setProductAll: React.Dispatch<React.SetStateAction<any>>;
  getProductName: (clothesName: string) => Promise<any>;
  deleteFromDatabase: (id: string) => Promise<any>;
}

export const ProductTable: React.FC<IProduct> = ({
  product,
  productKey,
  setUpdate,
  setProductAll,
  getProductName,
  deleteFromDatabase,

}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await product;
      setData(response);
    };
    fetchData();
  }, [product]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleUpdate = async (rowData: any) => {
    await getProductName(rowData).then((resp) => {
      setProductAll(resp);
      setUpdate(rowData);
    });
  };
  return (
    <>
      {/* {} */}
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {productKey.map((key, id) => (
                  <TableCell key={id}>{key}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((rowData, id) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                    {productKey.map((key, id) => (
                      <TableCell key={id}>
                        {rowData[key]}
                        {key === "update" ? (
                          <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => handleUpdate(rowData["product_id"])}
                            sx={{ mr: 2 }}
                          >
                            <UpdateIcon />
                          </IconButton>
                        ) : null}
                        {key === "delete" ? (
                          <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            id={rowData["product_id"]}
                            sx={{ mr: 2 }}
                            onClick={() => deleteFromDatabase(rowData["product_id"])}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        ) : null}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};
