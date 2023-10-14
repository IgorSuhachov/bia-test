import React from 'react';
import Calendar from './Calendar/Calendar';

export default function Workspace() {
  return (
    <section className="workspace">
      <div className="workspace__heading">
        <div className="workspace__wrapper">
          <input type="text" placeholder="Поиск" className="workspace__input" />
          <button className="workspace__filters">Фильтры</button>
        </div>
        <div className="workspace__wrapper">
          <select name="" id="">
            <option value="">Январь</option>
            <option value="">Февраль</option>
            <option value="">Март</option>
            <option value="">Апрель</option>
            <option value="">Май</option>
            <option value="">Июнь</option>
            <option value="">Июль</option>
            <option value="">Август</option>
            <option value="">Сентябрь</option>
            <option value="">Октябрь</option>
            <option value="">Ноябрь</option>
            <option value="">Декабрь</option>
          </select>
          <select name="" id="">
            <option value="">Москва</option>
            <option value="">Санкт-Петербург</option>
            <option value="">Казань</option>
            <option value="">Сочи</option>
            <option value="">Волгоград</option>
            <option value="">Новосибирск</option>
          </select>
        </div>
      </div>
      <Calendar />
    </section>
  );
}
