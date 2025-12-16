import { CheckCircle, Eye, EyeOff } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const NotificationsTable = () => {
  const { filteredNotifications, toggleRead, markAllVisibleAsRead } =
    useAppContext();

  return (
    <div className="p-4 bg-white shadow-md m-4 mt-0 rounded-md text-gray-600">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">
          Notifications List ({filteredNotifications.length})
        </h3>
        <button
          onClick={markAllVisibleAsRead}
          className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 flex items-center gap-2"
        >
          <CheckCircle className="h-5 w-5" />
          Mark all visible as read
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white border-b">
              <th className="p-2 text-left">TITLE</th>
              <th className="p-2 text-left">SENDER</th>
              <th className="p-2 text-left">CATEGORY</th>
              <th className="p-2 text-left">MESSAGE</th>
              <th className="p-2 text-left">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {filteredNotifications.map((notif) => (
              <tr key={notif.id} className="border-b border-gray-200">
                <td className="p-2">{notif.title}</td>
                <td className="p-2">{notif.sender}</td>
                <td className="p-2">Category {notif.categoryId}</td>
                <td className="p-2">{notif.message.substring(0, 100)}...</td>
                <td className="p-2">
                  <button
                    onClick={() => toggleRead(notif.id)}
                    className={`px-4 py-2 cursor-pointer rounded-md min-w-28 font-medium flex items-center gap-2 transition-all ${
                      notif.isRead
                        ? "bg-green-500/20 text-green-500 border border-green-500 hover:bg-green-600/20 "
                        : "bg-red-500/20 text-red-500 border border-red-500 hover:bg-red-600/20 "
                    }`}
                  >
                    {notif.isRead ? (
                      <>
                        <Eye className="h-4 w-4" />
                        Read
                      </>
                    ) : (
                      <>
                        <EyeOff className="h-4 w-4" />
                        Unread
                      </>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotificationsTable;
