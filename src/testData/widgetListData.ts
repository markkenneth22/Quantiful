import { ConfigType } from 'model';
export const widgetListData: ConfigType = {
    columns: [
        {
            // First column
            size: 1, // The size of the column
            heading: 'General Pokemon information',
            widgets: [
                {
                    title: 'Pokemon colours',
                    subtitle: 'List of all the colours',
                    type: 'list',
                    api: 'https://pokeapi.co/api/v2/pokemon-color/'
                },
                {
                    title: 'Pokemon Gender',
                    subtitle: 'List of all the genders',
                    type: 'list',
                    api: 'https://pokeapi.co/api/v2/gender/'
                }
            ]
        }
    ]
};
