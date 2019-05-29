import React from 'react'
import {Menu, Input} from 'semantic-ui-react'

const Filter = ({setFilter, filter, searchQuery, setQuery}) => {
    return (
        <Menu secondary>
            <Menu.Item
                active={filter === 'all'}
                onClick={() => setFilter('all')}
            >
                Все
            </Menu.Item>
            <Menu.Item
                active={filter === 'price_high'}
                onClick={() => setFilter('price_high')}
            >
                Цена (по убыванию)
            </Menu.Item>
            <Menu.Item
                active={filter === 'price_low'}
                onClick={() => setFilter('price_low')}
            >
                Цена (по возрастанию)
            </Menu.Item>
            <Menu.Item
                active={filter === 'author'}
                onClick={() => setFilter('author')}
            >
                Автор
            </Menu.Item>
            <Menu.Item>
                <Input
                    onChange={(e) => setQuery(e.target.value)}
                    value={searchQuery}
                    icon='search'
                    placeholder='Search...'
                />
            </Menu.Item>
        </Menu>
    )
};

export default Filter