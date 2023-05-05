

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../actions';
import { useHttp } from '../../hooks/http.hook';

const HeroesAddForm = () => {
    const { filters, filtersLoadingStatus } = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const { request } = useHttp();
    const initialForm = {
        name: '',
        description: '',
        element: 'Я владею элементом...'
    }
    const [formState, setFormState] = useState(initialForm);
    const { name, description, element } = formState;

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
            id: uuidv4()
        })
    }

    const onAdd = (formState) => {
        request(`http://localhost:3001/heroes`, 'POST', JSON.stringify(formState))
            .then(data => console.log(data, 'Posted successfully'))
            .then(dispatch(addItem(formState)))
            .catch(error => console.log(error))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        setFormState(initialForm);
        onAdd(formState)
    }

    const optionsForSelect = (filters, status) => {
        if (status === 'loading') {
            return <option>Загрузка элементов</option>
        } else if (status === 'error') {
            return <option>Ошибка загрузки</option>
        }

        if (filters.length > 0 && filters) {
            return filters.map(({ name, label }) => {
                // eslint-disable-next-line
                if (name === "all") return;
                return <option key={name} name={name} value={name}>{label}</option>
            })
        }
    }

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input
                    required
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleFormChange}
                    className="form-control"
                    id="name"
                    placeholder="Как меня зовут?" />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="description"
                    value={description}
                    onChange={handleFormChange}
                    className="form-control"
                    id="description"
                    placeholder="Что я умею?"
                    style={{ "height": '130px' }} />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    required
                    className="form-select"
                    id="element"
                    name="element"
                    value={element}
                    onChange={handleFormChange}>
                    <option value="">Я владею элементом...</option>
                    {optionsForSelect(filters, filtersLoadingStatus)}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;