import { removeData } from '../api/Todo';
import { updateData } from '../api/Todo';
import { useState } from 'react';

const List = ({ item, handleGetdata }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(item.title || ''); // Fallback สำหรับ title

  const handleDelete = async (id) => {
    try {
      const res = await removeData(id);
      console.log('Deleted:', res);
      handleGetdata(); // รีเฟรชข้อมูลหลังลบ
    } catch (err) {
      console.error('Delete Error:', err);
    }
  };

  const handleEdit = () => {
    setIsEdit(!isEdit); // สลับสถานะการแก้ไข
  };

  const handleOnChange = (e) => {
    setTitle(e.target.value); // อัปเดต title
  };

  const handleConfirm = async (id) => {
    try {
      await updateData(id, { title });
      console.log('Updated successfully');
      setIsEdit(false); 
      handleGetdata(); 
    } catch (err) {
      console.error('Update Error:', err);
    }
  };

  return (
    <div>
      {isEdit ? (
        <input type="text" onChange={handleOnChange} value={title} />
      ) : (
        <span>{item.title}</span>
      )}

      {isEdit ? (
        <button onClick={() => handleConfirm(item.id)}>Confirm</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}

      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </div>
  );
};

export default List;
