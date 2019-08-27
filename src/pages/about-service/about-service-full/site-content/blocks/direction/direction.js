import React from 'react';
import '../../css/desktop.css';
import FirstPicture from './first-picture.jpg';
import './first-picture.css';

const Direction = () => {
  return (
    <div className="direction">
      <h2>Направления дальнейшего совершенствования Программы</h2>
      <p className="mt-3 mb-0 text-justify">
        В идеале, Программа должна концентрировать не только лучшие практики,
        применяемые в Казани, а лучшие практики, применяемые в России и на
        Западе. Для этого перед конструированием Программы полезно изучить опыт
        работы Преподавателей со Студентами на кафедрах ведущих ВУЗ-ов России, в
        частности, МГУ и НИУ ВШЭ.
      </p>
      <p className="mt-3 mb-0 text-justify">
        Особое внимание стоит уделить открытой базе выпускных квалификационных
        работ студентов НИУ ВШЭ [3], поскольку это одна из единственных баз,
        которая:
      </p>
      <p className="mt-3 mb-0 text-justify">
        1) принадлежит университету, по словам ряда преподавателей ИСФН КФУ,
        входящего в тройку лучших в стране по качеству образования социологов;
      </p>
      <p className="mt-3 mb-0 text-justify">
        2) лишь единичные университеты публикуют в открытом доступе работы своих
        студентов, что связано с рядом причин, таких как, низкое качество работ
        большинства студентов (что будет количественно подтверждено далее. –
        Р.М.) и низкая репрезентативность информации в данных работах,
        засоряющих научное поле малоприменимой информацией.
      </p>
      <p className="mt-3 mb-0 text-justify">
        Перед подготовкой данной работы была изучена структура вышеупомянутой
        базы НИУ ВШЭ посредством описательных статистик. В ходе статистического
        одномерного анализа на выборочной совокупности в 20744 выпускных
        квалификационных работ (ВКР) было обнаружено следующее:
      </p>
      <p className="mt-3 mb-0 text-justify">
        – 72,37% Работ имеют оценку преподавательской комиссией НИУ ВШЭ менее 7
        баллов, их полные версии не опубликованы на сайте;
      </p>
      <p className="mt-3 mb-0 text-justify">
        – 22,99% Работ имеют оценку от 7 до 9 баллов, их полные версии
        опубликованы на сайте;
      </p>
      <p className="mt-3 mb-0 text-justify">
        – лишь 4,64% Работ имеют высшую оценку в 10 баллов (именно поэтому с них
        стоит брать пример при конструировании Программы, опираясь на них как на
        лучшие практики и адаптируя некоторые из них к требованиям написания
        работ в ИСФН КФУ. – Р.М.).
      </p>
      <p className="mt-3 mb-0 text-justify">
        Приведем характеристики выборочной совокупности, детализирующие
        устройство структуры проанализированной базы (см. рис. 1):
      </p>
      <p className="mt-3 mb-0 text-justify">
        – кампус / факультет: НИУ ВШЭ - Москва (без МИЭМ);
      </p>
      <p className="mt-3 mb-0 text-justify">– годы защиты: 2013-2018;</p>
      <p className="mt-3 mb-0 text-justify">
        – уровень образования: бакалавриат (42,93%) и магистратура (42,93%);
      </p>
      <p className="mt-3 mb-0 text-justify">
        – оценка: все баллы (от 1 до 10);
      </p>
      <p className="mt-3 mb-0 text-justify">
        – программа обучения: все, кроме программ МИЭМ;
      </p>
      <p className="mt-3 mb-0 text-justify">
        – язык ВКР: русский (87,11%) и английский (12,89%).
      </p>
      <p className="mt-3 text-justify">
        Стоит отметить, что вышеописанная Программа не будет определять полную,
        конечную Оценку за Работу. Она будет определять лишь ее часть, например,
        будет оценивать долю в 50% от проделанной Студентом Работы. Причина
        этого состоит в том, что часть оценки преподаватели формируют по
        неформальным характеристикам студента (соблюдении сроков и этапов
        выполнения работы, стилю общения с научным руководителем и т.д.).
      </p>
      <p className="table__number font-italic text-right mt-0 mb-0">
        Рисунок 1
      </p>
      <br />
      <p className="table__title font-weight-bold text-center mt-0">
        Процентное соотношение выпускных квалификационных работ студентов НИУ
        ВШЭ по степени их качества на основе выборочной совокупности в 20744
        работ (%). Источник: открытая база ВКР НИУ ВШЭ
      </p>
      <img src={FirstPicture} alt="Рисунок 1" className="first-picture" />
      <p className="mt-3 mb-0 text-justify">
        Поскольку для проверки качества Работы Студенту будет необходимо
        ответить более, чем на 30 вопросов, то в Программе будет создана
        возможность регистрации и авторизации, что позволит сохранять предыдущие
        ответы Студентов и восстанавливать их с небольшими правками спустя
        время, тем самым минимизируя рутинные действия и экономя время
        Студентов, которое они смогут направить на улучшение Работы.
      </p>
      <p className="mt-3 mb-0 text-justify">
        Программу возможно адаптировать под потребности др. кафедр и ВУЗ-ов,
        создав систему поддоменов, где страница (вопросы анкеты) каждого
        поддомена будет хранить специфические требования конкретной
        кафедры/ВУЗ-а. Пример:
      </p>
      <p className="mt-3 mb-0 text-justify">
        – http://<b>kfu-isfn</b>.u-ch.ru («Казанский Федеральный Университет»,
        институт социально-философских наук);
      </p>
      <p className="mt-3 mb-0 text-justify">
        – http://<b>kfu-ipo</b>.u-ch.ru («Казанский Федеральный Университет»,
        институт психологии и образования);
      </p>
      <p className="mt-3 mb-0 text-justify">
        – http://<b>hse-cs</b>.u-ch.ru («Высшая школа экономики», факультет
        компьютерных наук).
      </p>
      <p className="mt-3 text-justify">
        Планируемое название сайта программы – u-ch.ru (лаконичное сочетание
        англ. слов <i>«university»</i> и<i>«checklist»</i>). На момент написания
        данной работы этот домен свободен для покупки и создания в рамках него
        описанной программы. Второй планируемый вариант названия домена –
        univer-checklist.ru (хотя данное название менее лаконично, скорее всего,
        его будет легче запомнить студентам).
      </p>
    </div>
  );
};

export default Direction;
