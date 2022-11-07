import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { WidgetListResponseType, WidgetNumberResponseType } from 'model';
import useFetch from 'utils/useFetch';
import { initialValueWidgetList, initialValueWidgetNumber } from 'components/widgets';

describe('useFetch', () => {
    it('should perform Get Request', async () => {
        const initialValue = initialValueWidgetList;
        const mock = new MockAdapter(axios);

        const mockData: WidgetListResponseType = initialValueWidgetList;
        const url = 'https://pokeapi.co/api/v2/gender/';
        mock.onGet(url).reply(200, mockData);

        const { result, waitForNextUpdate } = renderHook(() => useFetch(url, initialValue));

        expect(result.current.data).toEqual(initialValueWidgetList);
        expect(result.current.loading).toBeTruthy();

        await waitForNextUpdate();

        expect(result.current.data).toEqual(initialValueWidgetList);
        expect(result.current.loading).toBeFalsy();
    });

    it('should performs multiple GET requests for different URLs', async () => {
        // fetch 1
        const initialValue = initialValueWidgetList;
        const mock = new MockAdapter(axios);

        const mockData: WidgetListResponseType = initialValueWidgetList;
        const url = 'https://pokeapi.co/api/v2/pokemon-color/';
        mock.onGet(url).reply(200, mockData);

        const { result, waitForNextUpdate } = renderHook(() => useFetch(url, initialValue));

        expect(result.current.data).toEqual(initialValueWidgetList);
        expect(result.current.loading).toBeTruthy();

        await waitForNextUpdate();

        expect(result.current.data).toEqual(initialValueWidgetList);
        expect(result.current.loading).toBeFalsy();

        // fetch 2
        const url2 = 'https://pokeapi.co/api/v2/gender/3/';
        const initialValue2 = initialValueWidgetNumber;

        const mockData2: WidgetNumberResponseType = initialValueWidgetNumber;
        mock.onGet(url2).reply(200, mockData2);

        const { result: result2, waitForNextUpdate: waitForNextUpdate2 } = renderHook(() =>
            useFetch(url2, initialValue2)
        );

        expect(result2.current.data).toEqual(initialValueWidgetNumber);
        expect(result2.current.loading).toBeTruthy();

        await waitForNextUpdate2();

        expect(result2.current.data).toEqual(initialValueWidgetNumber);
        expect(result2.current.loading).toBeFalsy();
    });

    it('should set loading to false and returns inital value on Network Error', async () => {
        const mock = new MockAdapter(axios);

        const initialValue: [] = [];
        const url = 'http://mocknetworkerror';

        mock.onGet(url).networkError();

        const { result, waitForNextUpdate } = renderHook(() => useFetch(url, initialValue));

        expect(result.current.data).toEqual([]);
        expect(result.current.loading).toBeTruthy();

        await waitForNextUpdate();

        expect(result.current.loading).toBeFalsy();
        expect(result.current.data).toEqual([]);
    });
});
