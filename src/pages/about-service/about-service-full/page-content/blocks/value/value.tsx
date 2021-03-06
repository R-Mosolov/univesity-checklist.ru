import React from 'react';
import '../../css/desktop.css';
import FirstTable from './first-table';
import SecondTable from './second-table';

const Value = () => {
  return (
    <div>
      <h2>Цели/общественная ценность Программы</h2>
      <p className="mt-3 mb-0 text-justify">
        –{' '}
        <b>
          <i>сократить расход времени Преподавателей</i>
        </b>{' '}
        на регулярном повторении Студентам методов решения одних и тех же
        ошибок, которые являются наиболее частыми (типичными), с точки зрения
        Преподавателя, тем самым автоматизировав процесс отсеивания наиболее
        типичных ошибок (см. табл. 1-2);
      </p>
      <p className="mt-3 mb-0 text-justify">
        – сделать процесс проверки Работы более{' '}
        <b>
          <i>прозрачным</i>
        </b>
        ;
      </p>
      <p className="mt-3 mb-0 text-justify">
        – сформулировать и описать для Студентов{' '}
        <b>
          <i>лучшие практики*</i>
        </b>{' '}
        создания Работы, а также показать признаки градаций (уровней),
        добровольное стремление к которым позволит Студенту выполнять ровно тот
        список задач по подготовке Работы, который будет удовлетворять получению
        желаемой им Оценки;
      </p>
      <p className="mt-3 mb-0 text-justify">
        –{' '}
        <b>
          <i>конкретизировать</i>
        </b>
        , сколько баллов будет приносить Студенту исправление каждого недочета,
        насколько исправление совокупности недочетов будет влиять на конечную
        Оценку Работы;
      </p>
      <p className="mt-3 mb-0 text-justify">
        – описать не только формальные, наиболее частые ошибки студентов
        (например, несдача работы в указанный преподавательской комиссией срок),
        но и{' '}
        <b>
          <i>неформальные ошибки</i>
        </b>{' '}
        (например, звонок научному руководителю в 1 час ночи для вопросов по
        доработке Работы);
      </p>
      <p className="mt-3 mb-0 text-justify">
        –{' '}
        <b>
          <i>стандартизировать процесс проверки</i>
        </b>{' '}
        Работы Преподавателями, минимизировать вероятность появления
        субъективных, опирающихся на личные предпочтения Оценок;
      </p>
      <p className="mt-3 mb-0 text-justify">
        – по итогам ответов на вопросы Программы, показывать Студенту{' '}
        <b>
          <i>список конкретных действий</i>
        </b>
        , которые ему необходимо выполнить, чтобы получить желаемую Оценку;
      </p>
      <p className="mt-3 mb-0 text-justify">
        – показывать Студенту, по его выбору,{' '}
        <b>
          <i>отрывки из примеров лучших</i>
        </b>{' '}
        Работ др. Студентов, которые имели опыт сдачи Работы на «отлично»; при
        этом продумать и реализовать такую форму показа лучших примеров Работ,
        чтобы Студент не мог их скопировать и бездумно вставить** в версию своей
        работы; это позволит автоматизировать один из педагогических методов –
        метод упрощения материала посредством примера, о котором Я.А. Коменский
        писал «Каждое правило должно сопровождаться многочисленными примерами,
        чтобы стало достаточно ясно, как разнообразно его применение» [2, с.
        344] – то есть повысить вероятность, что Студент поймет, что именно от
        него требуется, поскольку будет видеть уже реализованный аналог
        требуемого;
      </p>
      <p className="mt-3 mb-0 text-justify">
        – сделать Программу{' '}
        <b>
          <i>адаптивной</i>
        </b>
        , то есть такой, использование которой при наличии Интернета будет
        возможно с любого технического устройства (смартфона, компьютера,
        ноутбука, планшета);
      </p>
      <p className="mt-3 mb-0 text-justify">
        – адаптировать систему проверки Работ к{' '}
        <b>
          <i>новым требованиям времени</i>
        </b>{' '}
        («… лишь каждый третий (36%) россиянин старше 55 лет пользуется
        Интернетом. Для сравнения, в возрастной группе 30-54 лет этот показатель
        составил к началу 2018 года 83%, а среди молодежи – 98%» [5]; по этой
        причине разработка специализированного Интернет-сайта повышает
        вероятность того, что Студент будет ознакомлен со списком рекомендаций
        по написанию работы, поскольку посредством сайта мы входим в среду, где
        сконцентрировано внимание большого числа Студентов, то есть в Интернет;
        также данная Программа могла бы оказаться более эффективной, чем методы,
        используемые ранее, когда все рекомендации по написанию Работ хранились
        в библиотеках, в специальных методических пособиях. – Р.М.);
      </p>
      <p className="mt-3 mb-0 text-justify">
        –{' '}
        <b>
          <i>дополнить программу «Антиплагиат»</i>
        </b>
        , сегментирующую Студентов по уровню уникальности текста, данной
        Программой, которая будет сегментировать Студентов по уровню формального
        качества проделанной работы и времени, которое было затрачено на нее;
      </p>
      <p className="mt-3 text-justify">
        – сделать список рекомендаций{' '}
        <b>
          <i>максимально понятным</i>
        </b>{' '}
        для разных сегментов студентов («отличников», «хорошистов»,
        «троечников»); в частности, «троечникам», часть которых нередко на
        протяжении нескольких лет может не посещать занятий, может быть не ясна
        научная терминология, используемая в вопросах; чтобы «троечнику» было
        понятно, что от него требуется, а также чтобы др. сегменты студентов
        («отличники», «хорошисты)» могли уточнить непонятное или двузначное
        слово, при наведении ими курсора «мыши» на вопрос будет даваться
        детализация вопроса, содержащая ту же самую мысль, но без использования
        специальных терминов либо с гиперссылкой на сайт, где этот термин можно
        уточнить.
      </p>
      <FirstTable />
      <SecondTable />
    </div>
  );
};

export default Value;
