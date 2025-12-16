import { useAppContext } from '../context/AppContext';

const Filters = () => {
  const { filters, updateFilters, uniqueCategories } = useAppContext();

  return (
    <div className="flex gap-4 p-4 bg-white shadow-md m-4 rounded-md items-stretch">
      <div className="flex flex-col flex-1 min-w-0">
        <label htmlFor="status-filter" className="text-sm font-medium text-gray-700">STATUS FILTER</label>
        <select
          id="status-filter"
          value={filters.status}
          onChange={(e) => updateFilters({ status: e.target.value as 'All' | 'Read' | 'Unread' })}
          className="mt-1 border border-gray-300 rounded-md p-2 w-full bg-gray-100 text-black"
          aria-label="Status Filter"
        >
          <option value="All">All</option>
          <option value="Read">Read</option>
          <option value="Unread">Unread</option>
        </select>
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <label htmlFor="category-filter" className="text-sm font-medium text-gray-700">CATEGORY FILTER</label>
        <select
          id="category-filter"
          value={filters.category}
          onChange={(e) => updateFilters({ category: e.target.value })}
          className="mt-1 border border-gray-300 rounded-md p-2 w-full bg-gray-100 text-black"
          aria-label="Category Filter"
        >
          <option value="All">All Categories</option>
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>
              Category {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <label htmlFor="sender-search" className="text-sm font-medium text-gray-700">SENDER SEARCH</label>
        <input
          id="sender-search"
          type="text"
          value={filters.search}
          onChange={(e) => updateFilters({ search: e.target.value })}
          placeholder="Search by email..."
          className="mt-1 border border-gray-300 rounded-md p-2 w-full bg-gray-100 text-black"
        />
      </div>
    </div>
  );
};

export default Filters;