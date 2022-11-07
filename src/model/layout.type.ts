import { WidgetType } from './widget.type';

export interface LayoutType {
    size: number;
    heading: string;
    widgets: WidgetType[];
}

export interface ConfigType {
    columns: LayoutType[];
}
