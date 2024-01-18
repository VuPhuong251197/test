import React, { useState } from 'react';
import { Button, TextField } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom';
export default function FirstStep({
  onSubmit
}) {

  const navigate = useNavigate()

  const [newDataUser, setNewDataUser] = useState({
    nameShipper: '',
    follow: '',
    number: '',
    date: '',
    month: '',
    year: '',
    of: '',
    importAtWarehouse: '',
    address: ''
  });

  const handleOnSubmit = (newDataUser) => {
    setNewDataUser({
      nameShipper: '',
      follow: '',
      number: '',
      date: '',
      month: '',
      year: '',
      of: '',
      importAtWarehouse: '',
      address: ''
    });
    onSubmit(newDataUser)
    navigate("/secondStep")
  }
  return (
    <form>
      <div>
        <TextField label="Họ và tên người giao" margin="normal" variant="outlined" color="primary" type="text" value={newDataUser.nameShipper} onChange={e => setNewDataUser({ ...newDataUser, nameShipper: e.target.value })} />
      </div>
      <div>
        <TextField label="Theo" margin="normal" variant="outlined" color="primary" type="text" required="true" value={newDataUser.follow} onChange={e => setNewDataUser({ ...newDataUser, follow: e.target.value })} />
      </div>
      <div>
        <TextField label="Số" margin="normal" variant="outlined" color="primary" type="text" value={newDataUser.number} onChange={e => setNewDataUser({ ...newDataUser, number: e.target.value })} />
      </div>
      <div>
        <TextField label="Ngày" margin="normal" variant="outlined" color="primary" type="text" value={newDataUser.date} onChange={e => setNewDataUser({ ...newDataUser, date: e.target.value })} />
      </div>
      <div>
        <TextField label="Tháng" margin="normal" variant="outlined" color="primary" type="text" value={newDataUser.month} onChange={e => setNewDataUser({ ...newDataUser, month: e.target.value })} />
      </div>
      <div>
        <TextField label="Năm" margin="normal" variant="outlined" color="primary" type="text" value={newDataUser.year} onChange={e => setNewDataUser({ ...newDataUser, year: e.target.value })} />
      </div>
      <div>
        <TextField label="Của" margin="normal" variant="outlined" color="primary" type="text" value={newDataUser.of} onChange={e => setNewDataUser({ ...newDataUser, of: e.target.value })} />
      </div>
      <div>
        <TextField label="Nhập tại kho" margin="normal" variant="outlined" color="primary" type="text" value={newDataUser.importAtWarehouse} onChange={e => setNewDataUser({ ...newDataUser, importAtWarehouse: e.target.value })} />
      </div>
      <div>
        <TextField label="Địa điểm" margin="normal" variant="outlined" color="primary" type="text" value={newDataUser.address} onChange={e => setNewDataUser({ ...newDataUser, address: e.target.value })} />
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={() => handleOnSubmit(newDataUser)}>
          <Link to={"/secondStep"}>Lưu thông tin</Link>
        </Button>
      </div>
    </form>
  )
}