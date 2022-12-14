import React, { useState } from 'react';
import mapContext from './map-context';
import paths from './path';

const MapProvider = (props) => {
    const busanState = [
        {
            name: '북구',
            id: 'Buk-gu',
            coord: paths[0],
            bakery: []
        },
        {
            name: '부산진구',
            id: 'Busanjin-gu',
            coord: paths[1],
            bakery: []
        },
        {
            name: '동구',
            id: 'Dong-gu',
            coord: paths[2],
            bakery: []
        },
        {
            name: '동래구',
            id: 'Dongnae-gu',
            coord: paths[3],
            bakery: []
        },
        {
            name: '금정구',
            id: 'Geumjeong-gu',
            coord: paths[4],
            bakery: []
        },
        {
            name: '해운대구',
            id: 'Haeundae-gu',
            coord: paths[5],
            bakery: []
        },
        {
            name: '중구',
            id: 'Jung-gu',
            coord: paths[6],
            bakery: []
        },
        {
            name: '남구',
            id: 'Nam-gu',
            coord: paths[7],
            bakery: []
        },
        {
            name: '사하구',
            id: 'Saha-gu',
            coord: paths[8],
            bakery: []
        },
        {
            name: '사상구',
            id: 'Sasang-gu',
            coord: paths[9],
            bakery: []
        },
        {
            name: '서구',
            id: 'Seo-gu',
            coord: paths[10],
            bakery: []
        },
        {
            name: '수영구',
            id: 'Suyeong-gu',
            coord: paths[11],
            bakery: [
                {name: '옵스', isChecked: false},
                {name: '빵은 이지비아', isChecked: false},
                {name: '릴리 케이크', isChecked: false},
                {name: '마린느', isChecked: false},
                {name: '브레드 슈가', isChecked: false},
                {name: '무띠', isChecked: false},
                {name: '브랑제리 구제', isChecked: false}
            ]
        },
        {
            name: '영도구',
            id: 'Yeongdo-gu',
            coord: paths[12],
            bakery: []
        },
        {
            name: '연제구',
            id: 'Yeonje-gu',
            coord: paths[13],
            bakery: []
        }
    ]

    const [bakeryList, setBakeryList] = useState([])

    const stateClickHandler = (index) => {
        console.log('stateClickHandler:', busanState[index].name)
        setBakeryList(busanState[index].bakery)
    }

    return (
        <mapContext.Provider
            value={{
                states:busanState,
                bakeryList: bakeryList,
                onClickState: stateClickHandler
            }}>
            {props.children}
        </mapContext.Provider>
    );
};

export default MapProvider;