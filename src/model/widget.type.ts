export interface WidgetType {
    title: string;
    subtitle?: string;
    type: 'list' | 'number';
    api: string;
}

export interface WidgetListResponseType {
    count: number;
    results: WidgetListResult[];
}

export interface WidgetListResult {
    name: string;
    url: string;
}

export interface WidgetNumberResponseType {
    id: number;
    name: string;
    pokemon_species_details: PokemonSpeciesDetail[];
}

export interface PokemonSpeciesDetail {}
