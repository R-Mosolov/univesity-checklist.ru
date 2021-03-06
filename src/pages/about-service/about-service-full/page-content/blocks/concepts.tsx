import React from 'react';
import '../css/desktop.css';

const Concepts = () => {
  return (
    <div>
      <h2>Уточнения понятий, действующих в рамках настоящей работы</h2>
      <p className="mt-3 mb-0 text-justify">
        <b>
          <i>Программа</i>
        </b>{' '}
        – это информационная система, функциональная совокупность которой
        направлена на цели, ради достижения которых она была создана и которые
        будут описаны далее. Под этим понятием, с технической точки зрения,
        будет подразумеваться сайт, размещенный в Интернете, пользоваться
        которым будет возможно с любого наиболее популярного устройства
        (смартфона, компьютера, ноутбука, планшета).
      </p>
      <p className="mt-3 mb-0 text-justify">
        <b>
          <i>Работа</i>
        </b>{' '}
        – это объект, на проверку и улучшение качества которого направлено
        внимание сотрудников ИСФН КФУ. Его основным выражением являются курсовая
        или дипломная (ВКР) работы. Аспирантура, в рамках данной информационной
        системы, не рассматривается.
      </p>
      <p className="mt-3 mb-0 text-justify">
        <b>
          <i>Преподаватель</i>
        </b>{' '}
        – это каждый участник, в той или иной степени участвующий в подготовке
        курсовой или дипломной работы (научные руководители, члены комиссии,
        любые др. преподаватели, часть деятельности которых направлена на
        регулярное напоминание студентам о необходимости своевременной сдачи
        работы и коррекцию их ошибок).
      </p>
      <p className="mt-3 mb-0 text-justify">
        <b>
          <i>Студент</i>
        </b>{' '}
        – это участник всей совокупности студентов, обучающихся в ИСФН КФУ.
      </p>
      <p className="mt-3 text-justify">
        <b>
          <i>Оценка</i>
        </b>{' '}
        – это количественный индикатор, измеряемый в баллах, позволяющий оценить
        качество проделанной студентом работы, где каждый балл принадлежит к
        определенному диапазону, выражающему характерный для школьной системы РФ
        тип оценки («тройку», «четверку», «пятерку»). Согласно «Регламенту о
        балльно-рейтинговой системе знаний…» КФУ от 02.08.2012:
        <br />
        «– 86 баллов и более – “отлично” (отл.);
        <br />– 71-85 баллов – “хорошо” (хор.);
        <br />– 55 −70 баллов – “удовлетворительно” (удов.);
        <br />– 54 балла и менее – “неудовлетворительно” (неуд.)» [4].
      </p>
    </div>
  );
};

export default Concepts;
