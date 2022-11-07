import { render, cleanup } from '@testing-library/react';
import { LoadConfiguration } from 'components/LoadConfiguration';
import { widgetListData, configData, widgetNumberData } from 'testData';

describe('Load Configuration', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render empty column configuration', () => {
        const config = { columns: [] };
        const { getByText } = render(<LoadConfiguration configuration={config} />);
        expect(getByText(/invalid configuration/i)).toBeInTheDocument();
    });

    it('should render configuration title', () => {
        const config = configData;
        const { getAllByTestId } = render(<LoadConfiguration configuration={config} />);
        const widgetHeading = getAllByTestId('widget-heading').map((el) => el.textContent);
        const configHeading = configData.columns.map((el) => el.heading);
        expect(widgetHeading).toEqual(configHeading);
    });

    it('should render the configuration for the Widget with a type "list"', () => {
        const config = widgetListData;
        const { getAllByTestId } = render(<LoadConfiguration configuration={config} />);
        const widgetListName = getAllByTestId('widget-list-name').map((el) => el.textContent);
        const configListName = widgetListData.columns[0].widgets.map((el) => `List of ${el.title}`);
        expect(widgetListName).toEqual(configListName);
    });

    it('should render the configuration for the Widget with a type "number"', () => {
        const config = widgetNumberData;
        const { getAllByTestId } = render(<LoadConfiguration configuration={config} />);
        const widgetNumberName = getAllByTestId('widget-number-name').map((el) => el.textContent);
        const configNumberName = widgetNumberData.columns[0].widgets.map((el) => el.title);
        expect(widgetNumberName).toEqual(configNumberName);
    });
});
