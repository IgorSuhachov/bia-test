import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';

import { styled } from '@mui/material/styles';

const daysInMonth = 30; // Задаем количество дней в месяце
const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; // Задаем дни недели

const cellStyle = {
  // Задаем стили для ячеек таблицы
  color: '#F0303F',
  background: '#FEEAEC',
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // Создаем стилизованный компонент для ячейки таблицы
  border: '1px solid #B8C4DB',
  padding: '8px',
  textAlign: 'center',
}));

export default function Calendar() {
  const [employees, setEmployees] = useState([
    // Используем useState для установки начального состояния с информацией о сотрудниках
    { name: 'Петров И. А.', attendance: Array(daysInMonth).fill('') },
    { name: 'Степанов Л. А', attendance: Array(daysInMonth).fill('') },
    { name: 'Семин М. С', attendance: Array(daysInMonth).fill('') },
  ]);

  const [isEditing, setIsEditing] = useState(false);

  // Функция для добавления нового сотрудника
  const handleAddEmployee = () => {
    const newEmployee = { name: '', attendance: Array(daysInMonth).fill('') };
    setEmployees([...employees, newEmployee]); // Добавляем нового сотрудника в массив сотрудников
    const newCellOptions = Array(daysInMonth).fill('');
    setCellOptions([...cellOptions, newCellOptions]); // Добавляем новые опции ячеек для нового сотрудника
  };

  // Функция для изменения посещаемости сотрудника
  const handleAttendanceChange = (employeeIndex, dayIndex, value) => {
    if (isEditing) {
      // Проверяем, находимся ли в режиме редактирования
      const updatedEmployees = [...employees];
      updatedEmployees[employeeIndex].attendance[dayIndex] = value; // Обновляем посещаемость для указанного сотрудника и дня
      setEmployees(updatedEmployees); // Обновляем состояние с информацией о сотрудниках
    }
  };

  // Функция для создания опций ячеек
  const createCellOptions = () => {
    const options = [];
    for (let i = 0; i < employees.length; i++) {
      // Проходим по каждому сотруднику
      const cellOptions = [];
      for (let j = 0; j < daysInMonth; j++) {
        // Создаем опции для каждого дня
        cellOptions.push('');
      }
      options.push(cellOptions);
    }
    return options; // Возвращаем массив опций ячеек
  };

  const [cellOptions, setCellOptions] = useState(createCellOptions());

  return (
    <section className="calendar">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              {Array.from(
                { length: daysInMonth },
                (
                  _,
                  i // Создаем заголовки для каждого дня месяца
                ) => (
                  <StyledTableCell
                    key={i}
                    style={{
                      border: '1px solid #B8C4DB',
                      padding: '8px',
                      textAlign: 'center',
                      color: daysOfWeek[i % 7] === 'сб' || daysOfWeek[i % 7] === 'вс' ? cellStyle.color : 'inherit',
                      background:
                        daysOfWeek[i % 7] === 'сб' || daysOfWeek[i % 7] === 'вс' ? cellStyle.background : 'transparent',
                    }}
                  >
                    {daysOfWeek[i % 7]}
                  </StyledTableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell>Сотрудник</StyledTableCell>
              {Array.from(
                { length: daysInMonth },
                (
                  _,
                  i // Создаем заголовки для каждого дня месяца
                ) => (
                  <StyledTableCell
                    key={i}
                    style={{
                      border: '1px solid #B8C4DB',
                      padding: '8px',
                      textAlign: 'center',
                      color: daysOfWeek[i % 7] === 'сб' || daysOfWeek[i % 7] === 'вс' ? cellStyle.color : 'inherit',
                      background:
                        daysOfWeek[i % 7] === 'сб' || daysOfWeek[i % 7] === 'вс' ? cellStyle.background : 'transparent',
                    }}
                  >
                    {i + 1}
                  </StyledTableCell>
                )
              )}
            </TableRow>
            {employees.map(
              (
                employee,
                employeeIndex // Проходим по каждому сотруднику
              ) => (
                <TableRow key={employeeIndex}>
                  <StyledTableCell>
                    {isEditing ? ( // Проверяем, находимся ли в режиме редактирования
                      <TextField
                        id={`name-${employeeIndex}`}
                        name={`name-${employeeIndex}`}
                        value={employee.name}
                        onChange={(e) => {
                          const updatedEmployees = [...employees];
                          updatedEmployees[employeeIndex].name = e.target.value;
                          setEmployees(updatedEmployees); // Обновляем имя сотрудника
                        }}
                      />
                    ) : (
                      employee.name
                    )}
                  </StyledTableCell>
                  {employee.attendance.map(
                    (
                      attendance,
                      dayIndex // Проходим по посещаемости каждого дня сотрудника
                    ) => (
                      <StyledTableCell
                        key={dayIndex}
                        style={{
                          border: '1px solid #B8C4DB',
                          padding: '8px',
                          textAlign: 'center',
                          color:
                            daysOfWeek[dayIndex % 7] === 'сб' || daysOfWeek[dayIndex % 7] === 'вс'
                              ? cellStyle.color
                              : 'inherit',
                          background:
                            daysOfWeek[dayIndex % 7] === 'сб' || daysOfWeek[dayIndex % 7] === 'вс'
                              ? cellStyle.background
                              : 'transparent',
                        }}
                      >
                        {isEditing ? ( // Проверяем, находимся ли в режиме редактирования
                          <Select
                            id={`name-${employeeIndex}`}
                            name={`name-${employeeIndex}`}
                            value={cellOptions[employeeIndex][dayIndex]}
                            onChange={(e) => {
                              handleAttendanceChange(employeeIndex, dayIndex, e.target.value);
                              const updatedCellOptions = [...cellOptions];
                              updatedCellOptions[employeeIndex][dayIndex] = e.target.value;
                              setCellOptions(updatedCellOptions); // Обновляем посещаемость сотрудника
                            }}
                          >
                            <MenuItem value="1">Рабочий день</MenuItem>
                            <MenuItem value="В">Выходной</MenuItem>
                            <MenuItem value="О">Отпуск</MenuItem>
                            <MenuItem value="Б">Больничный</MenuItem>
                            <MenuItem value="У">Увольнение</MenuItem>
                          </Select>
                        ) : (
                          attendance
                        )}
                      </StyledTableCell>
                    )
                  )}
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
        <Button onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Сохранить' : 'Редактировать'}</Button>
        <Button onClick={handleAddEmployee}>Добавить сотрудника</Button>
      </TableContainer>
    </section>
  );
}
