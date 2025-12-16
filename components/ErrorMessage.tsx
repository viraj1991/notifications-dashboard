import { useAppContext } from '../context/AppContext';

const ErrorMessage = () => {
  const { refreshData } = useAppContext();

  return (
    <div className="flex justify-center items-center h-screen bg-red-100 text-red-700">
      <div>
        <p>Error fetching data.</p>
        <button onClick={refreshData} className="underline">
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;