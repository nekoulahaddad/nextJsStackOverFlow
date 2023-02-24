import React, {useState} from 'react'
import { SORT_OPTIONS, ORDER_OPTIONS } from './consts'
import {ISortOption} from '@/types/main'
import { handleChangeSortBy, handleChangeSortTerm } from '@/store/reducers/mainSlice';
import { useAppDispatch } from '@/hooks/toolkitHook';
import { SortElement, SortOrderContainer } from './styles';

const SortBlock = () => {
    const [showSortOptions, setShowSortOptions] = useState<boolean>(false)
    const [showOrderOptions, setShowOrderOptions] = useState<boolean>(false)
    const dispatch = useAppDispatch();

    const handleChooseSortTerm = (option:ISortOption) => {
        dispatch(handleChangeSortTerm(option.value))
        setShowSortOptions(false)
    }

    const handleChooseOrder = (option:ISortOption) => {
        dispatch(handleChangeSortBy(option.value))
        setShowOrderOptions(false)
    }

  return (
    <SortOrderContainer>
        <div>
            <SortElement onClick={() => setShowSortOptions(!showSortOptions)}>Фильтр</SortElement>
            {showSortOptions && SORT_OPTIONS.map((option:ISortOption) => (
                <SortElement onClick={() => handleChooseSortTerm(option)} key={option.id}>
                    {option.text}
                </SortElement>
            ))}
        </div>
        <div>
            <SortElement onClick={() => setShowOrderOptions(!showOrderOptions)}>Сортировка</SortElement>
            {showOrderOptions && ORDER_OPTIONS.map((option:ISortOption) => (
                <SortElement onClick={() => handleChooseOrder(option)} key={option.id}>
                    {option.text}
                </SortElement>
            ))}
        </div>
    </SortOrderContainer>
  )
}

export default SortBlock