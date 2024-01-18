import React, { useState } from 'react';
import { TableContainer, TableHead, TableBody, TableRow, TableCell, Table, Typography } from '@mui/material';

export default function DisplayData({ products }) {
  const [setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    const totalPrice = products.reduce((sum, product) => sum + product.price * product.quantityAccording, 0);
    setTotalPrice(totalPrice);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedProducts = products.map(product =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    calculateTotalPrice(updatedProducts);
  }
  return (
    <div>
      <TableContainer style={{ display: "flex", justifyContent: "center" }}>
        <Table border="1" style={{ width: "70%", justifyContent: "center" }} size="normal" aria-label="caption table">
          <TableHead>
            <TableRow style={{ backgroundColor: "burlywood", color: "red" }}>
              <TableCell>STT</TableCell>
              <TableCell>Tên nhãn hiệu</TableCell>
              <TableCell>Mã số</TableCell>
              <TableCell>Đơn vị tính</TableCell>
              <TableCell>Số lượng theo chứng từ</TableCell>
              <TableCell>Số lượng theo thực nhập</TableCell>
              <TableCell>Đơn giá</TableCell>
              <TableCell>Thành tiền</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={product.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{product.nameProduct}</TableCell>
                <TableCell>{product.code}</TableCell>
                <TableCell>{product.unit}</TableCell>
                <TableCell>{product.quantityAccording}</TableCell>
                <TableCell>{product.quantityImported}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Typography type="number" value={product.quantityAccording} onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}>
                    {product.price * product.quantityAccording}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}