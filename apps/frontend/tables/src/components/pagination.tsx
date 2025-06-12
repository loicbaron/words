type PaginationProps = {
  currentPage: number;
  total: number;
  nbRows: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  total,
  nbRows,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / nbRows); // Assuming 10 items per page
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          disabled={p === currentPage}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
