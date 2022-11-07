import { ConfigType } from 'model';
export const widgetNumberData: ConfigType = {
    columns: [
        {
            // Second column
            size: 2, // The size of the column
            heading: 'Pokemon counts',
            widgets: [
                {
                    title: 'Genderless count',
                    type: 'number',
                    api: 'https://pokeapi.co/api/v2/gender/3/'
                },
                {
                    title: 'Female count',
                    type: 'number',
                    api: 'https://pokeapi.co/api/v2/gender/1/'
                },
                {
                    title: 'Male count',
                    type: 'number',
                    api: 'https://pokeapi.co/api/v2/gender/2/'
                }
            ]
        }
    ]
};
