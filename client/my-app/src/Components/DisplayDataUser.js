import React from 'react';
import { TableContainer, TableHead, TableBody, TableRow, TableCell, Table } from '@mui/material';

export default function DisplayDataUser({ users }) {
  return (
    <div>
      <TableContainer style={{ display: "flex", justifyContent: "center" }}>
        <Table border="1" style={{ width: "70%", justifyContent: "center" }} size="normal" aria-label="caption table">
          <TableHead>
            <TableRow style={{ backgroundColor: "burlywood", color: "red" }}>
              <TableCell>Họ và tên người giao</TableCell>
              <TableCell>Theo</TableCell>
              <TableCell>Số</TableCell>
              <TableCell>Ngày</TableCell>
              <TableCell>Tháng</TableCell>
              <TableCell>Năm</TableCell>
              <TableCell>Của</TableCell>
              <TableCell>Nhập tại kho</TableCell>
              <TableCell>Địa điểm</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.nameShipper}</TableCell>
                <TableCell>{user.follow}</TableCell>
                <TableCell>{user.number}</TableCell>
                <TableCell>{user.date}</TableCell>
                <TableCell>{user.month}</TableCell>
                <TableCell>{user.year}</TableCell>
                <TableCell>{user.of}</TableCell>
                <TableCell>{user.importAtWarehouse}</TableCell>
                <TableCell>{user.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}