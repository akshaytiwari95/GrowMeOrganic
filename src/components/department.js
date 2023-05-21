import departmentData from '../departmentData';
import { Button, FormGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
function Department() {
  const [department, setDepartment] = useState([]); //  state that hold the department data  for all the departments
  const [subdepartment, setSubDepartment] = useState([]); // state that hold the subdepartment data
  const [count, setCount] = useState(0); // count which gets updated on selection of the checkboxes
  const [begin, setBegin] = useState(0); // state that holds the id of the department
  const [show, setShow] = useState(true); // state for showing and hiding checkboxes
  function findbeginpoint(begin) {
    if (
      departmentData[begin].sub_departments.every(el =>
        subdepartment.includes(el)
      )
    ) {
      setDepartment(() => [...department, departmentData[begin].department]);
    }
  }
  function handleExpandEvent(e) {
    setShow(!show);
  }
  useEffect(() => {
    findbeginpoint(begin);
  }, [count, begin]);

  console.log(department);
  console.log(subdepartment);

  const handleDepartmentChange = function (item, e) {
    console.log('hey');
    if (department.includes(item.department)) {
      setDepartment(() =>
        department.filter(element => element !== item.department)
      );
      setSubDepartment(
        subdepartment.filter(element => !item.sub_departments.includes(element))
      );
    } else {
      setDepartment([...department, item.department]);
      console.log(department);
      setSubDepartment([...subdepartment, ...item.sub_departments]);
    }
  };
  const handleSubDepartmentChange = function (item) {
    if (subdepartment.includes(item)) {
      setSubDepartment(subdepartment.filter(element => element !== item));
    } else {
      setSubDepartment([...subdepartment, item]);
      setCount(prev => prev + 1);
      departmentData.forEach(
        element =>
          element.sub_departments.includes(item) && setBegin(element.id)
      );

      console.log(subdepartment);
    }
  };

  const data = departmentData.map(item => {
    return (
      <div>
        {' '}
        <FormControlLabel
          key={item.id}
          control={
            <Checkbox
              checked={department.includes(item.department)}
              onChange={e => handleDepartmentChange(item)}
            />
          }
          label={item.department}
        />{' '}
        <Button
          onClick={handleExpandEvent}
          variant="outlined"
          color="secondary"
          size="small"
        >
          expand/reduce
        </Button>
        <FormGroup
          sx={
            show
              ? { display: 'flex', flexDirection: 'column', ml: 3 }
              : { display: 'none' }
          }
        >
          {' '}
          {item.sub_departments.map(item => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={subdepartment.some(el => item.includes(el))}
                  onChange={e => handleSubDepartmentChange(item)}
                />
              }
              label={item}
            />
          ))}
        </FormGroup>
      </div>
    );
  });

  return data;
}
export default Department;
