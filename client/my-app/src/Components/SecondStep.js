import React, { useState } from 'react';
import { Button, TextField } from "@mui/material"
import { Link } from 'react-router-dom';

export default function SecondStep({
  onSubmit,
}) {

  const [newDataProduct, setNewDataProduct] = useState({
    nameProduct: '',
    code: '',
    unit: '',
    quantityAccording: '',
    quantityImported: '',
    price: '',
  });

  const handleOnSubmit = (newDataProduct) => {
    setNewDataProduct({
      nameProduct: '',
      code: '',
      unit: '',
      quantityAccording: '',
      quantityImported: '',
      price: '',
    });
    onSubmit(newDataProduct)
  }

  return (
    <form>
      <div>
        <TextField label="Tên nhãn hiệu" margin="normal" variant="outlined" color="primary" type="text" value={newDataProduct.nameProduct} onChange={e => setNewDataProduct({ ...newDataProduct, nameProduct: e.target.value })} />
      </div>
      <div>
        <TextField label="Mã số" margin="normal" variant="outlined" color="primary" type="text" value={newDataProduct.code} onChange={e => setNewDataProduct({ ...newDataProduct, code: e.target.value })} />
      </div>
      <div>
        <TextField label="Đơn vị tính" margin="normal" variant="outlined" color="primary" type="text" value={newDataProduct.unit} onChange={e => setNewDataProduct({ ...newDataProduct, unit: e.target.value })} />
      </div>
      <div>
        <TextField label="Số lượng theo chứng từ" margin="normal" variant="outlined" color="primary" type="text" value={newDataProduct.quantityAccording} onChange={e => setNewDataProduct({ ...newDataProduct, quantityAccording: e.target.value })} />
      </div>
      <div>
        <TextField label="Số lượng theo thực nhập" margin="normal" variant="outlined" color="primary" type="text" value={newDataProduct.quantityImported} onChange={e => setNewDataProduct({ ...newDataProduct, quantityImported: e.target.value })} />
      </div>
      <div>
        <TextField label="Đơn giá" margin="normal" variant="outlined" color="primary" type="text" value={newDataProduct.price} onChange={e => setNewDataProduct({ ...newDataProduct, price: e.target.value })} />
      </div>
      <div>
        <Button variant="contained" color="primary">
          <Link to={"/firstStep"}>Quay lại</Link>
        </Button>
      </div>
      <div>
        <Button type="button" variant="contained" color="primary" onClick={() => handleOnSubmit(newDataProduct)}>Lưu thông tin</Button>
      </div>
    </form>
  )
}