import React, {useEffect, useMemo} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {animateScroll as scroll} from 'react-scroll';
import {useTypedSelector} from "@hooks/useTypedSelector";
import {VACANCIES_ACTION_TYPE} from "@store/types/vacancies";

const PageManager = () => {
  const dispatch = useDispatch();
  const {page} = useParams();
  const {pageCount} = useTypedSelector((state) => state.vacancies);

  const pageNum = useMemo(() => Number(page), [page]);
  const isPrev = useMemo(() => pageNum > 1, [page]);
  const isNext = useMemo(() => pageCount ? pageNum < pageCount : false, [page]);

  useEffect(() => {
    if (!pageCount) {
      dispatch({
        type: VACANCIES_ACTION_TYPE.GET_ERROR,
        payload: {
          Code: 50001,
          Value: 'The pageCount parameter is null'
        }
      })
    } else if (isNaN(pageNum) || pageNum < 1 || pageNum > pageCount) {
      dispatch({
        type: VACANCIES_ACTION_TYPE.GET_ERROR,
        payload: {
          Code: 404,
          Value: 'Page not found'
        }
      })
    }
  }, [page]);

  const visiblePages: (number | null)[] = useMemo(() => {
    if (pageCount) {
      if (pageCount < 10) {
        const res = [];

        for (let i = 2; i < pageCount; i++)
          res.push(i);

        return res;
      } else if (pageNum < 5) {
        return [2, 3, 4, 5, 6, 7, null];
      } else if (pageCount && pageNum > pageCount - 4) {
        let it = pageCount - 6;

        return [null, it, ++it, ++it, ++it, ++it, ++it];
      } else {
        let it = pageNum - 2;

        return [null, it, ++it, ++it, ++it, ++it, null];
      }
    } else return [];
  }, [page]);

  const onClick = () => {
    dispatch({type: VACANCIES_ACTION_TYPE.CLEAN_VACANCIES_STATE});
  }

  return (
    <div className={'flex flex-row justify-center flex-wrap gap-2 text-xs md:text-sm'}>
      <Link
        className={`${!isPrev
          ? 'cursor-default text-gray-400 border-gray-400 dark:text-gray-500 dark:border-gray-500 '
          : 'cursor-pointer text-gray-800 border-gray-800 dark:text-gray-200 dark:border-gray-200 ' +
          'hover:border-sky-600 hover:text-sky-600 dark:hover:border-sky-200 dark:hover:text-sky-200'} 
          pl-3 pr-2 py-1 border rounded-l-xl uppercase`}
        to={isPrev ? `/vacancies/${pageNum - 1}` : '/vacancies/prev'}
        onClick={(e) => {
          if (!isPrev) e.preventDefault(); else onClick()
        }}>
        prev
      </Link>

      <Link
        className={`cursor-pointer px-2 py-1 border uppercase  
          hover:border-sky-600 hover:text-sky-600 dark:hover:border-sky-200 dark:hover:text-sky-200
          ${pageNum === 1 ? 'border-sky-600 text-sky-600 dark:border-sky-200 dark:text-sky-200'
          : 'text-gray-800 border-gray-800 dark:text-gray-200 dark:border-gray-200 '}`}
        to={`/vacancies/1`}
        onClick={onClick}>
        1
      </Link>

      {visiblePages.map((link, index) => {
        if (!link) return <div key={index}>...</div>
        else return <Link
          key={index}
          className={`cursor-pointer px-2 py-1 border uppercase  
          hover:border-sky-600 hover:text-sky-600 dark:hover:border-sky-200 dark:hover:text-sky-200
          ${pageNum === link ? 'border-sky-600 text-sky-600 dark:border-sky-200 dark:text-sky-200'
            : 'text-gray-800 border-gray-800 dark:text-gray-200 dark:border-gray-200 '}`}
          to={`/vacancies/${link}`}
          onClick={onClick}>
          {link}
        </Link>
      })}

      <Link
        className={`cursor-pointer px-2 py-1 border uppercase 
          hover:border-sky-600 hover:text-sky-600 dark:hover:border-sky-200 dark:hover:text-sky-200          
          ${pageNum === pageCount ? 'border-sky-600 text-sky-600 dark:border-sky-200 dark:text-sky-200'
          : 'text-gray-800 border-gray-800 dark:text-gray-200 dark:border-gray-200 '}`}
        to={`/vacancies/${pageCount}`}
        onClick={onClick}>
        {pageCount}
      </Link>

      <Link
        className={`${!isNext
          ? 'cursor-default text-gray-400 border-gray-400 dark:text-gray-500 dark:border-gray-500 '
          : 'cursor-pointer text-gray-800 border-gray-800 dark:text-gray-200 dark:border-gray-200 hover:border-sky-600 hover:text-sky-600 dark:hover:border-sky-200 dark:hover:text-sky-200'} 
          pl-2 pr-3 py-1 border rounded-r-xl uppercase`}
        to={isNext ? `/vacancies/${pageNum + 1}` : '/vacancies/next'}
        onClick={(e) => {
          if (!isNext) e.preventDefault(); else onClick()
        }}>
        next
      </Link>
    </div>
  );
};

export default PageManager;