import { useDispatch } from "react-redux";
import {deleteCollection} from "../../features/collections/collectionsSlice";
import { GrCircleAlert } from "react-icons/gr";


export default function ConfirmDelete({ onClose, collectionId }) {
  const dispatch = useDispatch();

  function handleDeleteCollection(collectionId) {
    dispatch(deleteCollection(collectionId));
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-1 flex-col gap-4 px-4 pb-0 pt-0">
        <div className="flex flex-col gap-3 text-center dark:text-white">
          <div className="flex items-center justify-center gap-2">
            <GrCircleAlert className="text-2xl" />
            <p className="text-2xl font-semibold">Heads up!</p>
          </div>
          <p className="text-lg">
            You&apos;re about to send this collecton into Oblivion!
          </p>
          <p className="text-lg font-semibold">Are you sure?</p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <button
            type="submit"
            className={`cursor-pointer rounded-md border px-3 py-1.5 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-drkbrd dark:text-white`}
            onClick={() => onClose()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`cursor-pointer rounded-md bg-red-500 px-3 py-1.5 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            onClick={() => handleDeleteCollection(collectionId)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
