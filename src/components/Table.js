import React from 'react';
import millis_to_date from "../helpers/millis_to_date";

const Table = ({items}) => {
    return (
        <div>
            <table className="table">
                <thead>
					<tr>
						<th>Игрок</th>
						<th>Арбитр</th>
						<th>Причина</th>
						<th>Дата</th>
						<th>Окончание</th>
					</tr>
                </thead>
                <tbody>
					{items.map(item => <tr key={item.id}>
						<td data-name="Игрок" className="column1 th-left">
							<div className="user">
								<img src={`https://minotar.net/avatar/${item.name}/25`} alt={item.name} className="avatar"/>
								<div className="name">{item.name}</div>
							</div>
						</td>
						<td data-name="Арбитр" className="column2">
							<div className="user">
								<img
									src={['Консоль', 'Судья'].includes(item.banned_by_name) ? 'img/console.png' : `https://minotar.net/avatar/${item.banned_by_name}/25`}
									alt={item.banned_by_name} className="avatar"/>
								<div className="name">{item.banned_by_name}</div>
							</div>
						</td>
						<td data-name="Причина" className="column3">{item.reason}</td>
						<td data-name="Дата" className="column4 date">{millis_to_date(item.time)}</td>
						<td data-name="Истекается"
							className="column5 date">{item.until ? millis_to_date(item.until) : 'Постоянный Бан'}</td>
					</tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default Table;