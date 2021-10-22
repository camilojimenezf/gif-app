import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe retornar el estado inicial', async () => {
        const category = 'One Punch'
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));
        const {data , loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        const category = 'One Punch'
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));

        await waitForNextUpdate();

        const {data , loading} = result.current;
        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    });
});
