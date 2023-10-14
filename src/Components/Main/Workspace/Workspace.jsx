import React from 'react';

export default function Workspace() {
  return (
    <section className="workspace">
      <div className="workspace__wrapper">
        <input type="text" placeholder="Поиск" className="workspace__input" />
        <button className="workspace__filters">Фильтры</button>
      </div>
      <div className="workspace__wrapper">
        <select name="" id="">
          <option value="">Апрель</option>
          <option value="">Апрель</option>
          <option value="">Апрель</option>
          <option value="">Апрель</option>
        </select>
        <select name="" id="">
          <option value="">Апрель</option>
          <option value="">Апрель</option>
          <option value="">Апрель</option>
          <option value="">Апрель</option>
        </select>
      </div>
    </section>
  );
}
