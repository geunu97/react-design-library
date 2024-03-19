import React from 'react';
import { PaginationProps } from './type';
import PrevIcon from '../../../assets/icons/Prev';
import NextIcon from '../../../assets/icons/Next';
import './index.css';

const Pagination = ({
  type = 'danger-dark',
  iconType = 'black',
  textType = 'gray-dark',
  weight = 'inline',
  shape = 'circle',
  page,
  pageSize,
  total,
  maxPageButtons = 5,
  showPrevButtonIcon = true,
  showNextButtonIcon = true,
  prevButtonText,
  nextButtonText,
  onChangePage,
  onShowContent,
  className,
}: PaginationProps) => {
  const totalPage = total > 0 ? Math.ceil(total / pageSize) : 1;
  const halfMaxButtons = Math.floor(maxPageButtons / 2);

  const renderPageButtons = () => {
    let startPage = page - halfMaxButtons;
    let endPage = page + halfMaxButtons - (maxPageButtons % 2 === 0 ? 1 : 0);

    // 시작 페이지가 1보다 작으면 조정
    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(startPage + maxPageButtons - 1, totalPage);
    }
    // 끝 페이지가 totalPage보다 크면 조정
    if (endPage > totalPage) {
      endPage = totalPage;
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`gw-pagination-pagebutton ${i === page ? 'active' : ''}`}
          onClick={() => onChangePage(i)}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  return (
    <div
      className={`gw-pagination gw-pagination-type--${type} gw-pagination-textType--${textType} gw-pagination-iconType--${iconType} gw-pagination-weight--${weight} gw-pagination-shape--${shape} ${
        className ? className : ''
      }`}
    >
      {page > 1 ? (
        <button className="gw-pagination-prevbutton" onClick={() => onChangePage(page - 1)}>
          {showPrevButtonIcon && (
            <span className="gw-pagination-prevbutton-icon">
              <PrevIcon width="26px" height="26px" />
            </span>
          )}
          {prevButtonText && <span className="gw-pagination-prevbutton-text">{prevButtonText}</span>}
        </button>
      ) : (
        <button className="gw-pagination-prevbutton" disabled>
          {showPrevButtonIcon && (
            <span className="gw-pagination-prevbutton-icon">
              <PrevIcon width="26px" height="26px" />
            </span>
          )}
          {prevButtonText && <span className="gw-pagination-prevbutton-text">{prevButtonText}</span>}
        </button>
      )}

      {onShowContent ? (
        <span className="gw-pagination-showcontent">{onShowContent(page, pageSize)}</span>
      ) : (
        <span className="gw-pagination-pagebuttons">{renderPageButtons()}</span>
      )}

      {page < totalPage ? (
        <button className="gw-pagination-nextbutton" onClick={() => onChangePage(page + 1)}>
          {nextButtonText && <span className="gw-pagination-nextbutton-text">{nextButtonText}</span>}
          {showNextButtonIcon && (
            <span className="gw-pagination-nextbutton-icon">
              <NextIcon width="26px" height="26px" />
            </span>
          )}
        </button>
      ) : (
        <button className="gw-pagination-nextbutton" disabled>
          {nextButtonText && <span className="gw-pagination-nextbutton-text">{nextButtonText}</span>}
          {showNextButtonIcon && (
            <span className="gw-pagination-nextbutton-icon">
              <NextIcon width="26px" height="26px" />
            </span>
          )}
        </button>
      )}
    </div>
  );
};

export default Pagination;
