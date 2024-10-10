import { useState, useRef, useEffect } from "react";
import { PiPlusBold } from "react-icons/pi";
import {
  createNewCollection,
  updateCollection,
} from "../../../features/collections/collectionsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function AddToCollection({ onClose, gameObj }) {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections);

  const [newCollectionValue, setNewCollectionValue] = useState("");
  const [newCollectionField, setNewCollectionField] = useState(false);

  const inputRef = useRef(null);

  function handleAddCollectionSubmit(e) {
    e.preventDefault();

    const newCollection = {
      id: collections.length + 1,
      title: newCollectionValue,
      games: [gameObj],
    };

    dispatch(createNewCollection(newCollection));

    setNewCollectionValue("");
    setNewCollectionField(false);
    onClose();
  }

  const handleCheckboxChange = (id) => {
    const collectionToUpdate = collections.find((c) => c.id === id);
    if (collectionToUpdate) {
      const isGameInCollection = collectionToUpdate.games.some(
        (game) => game.id === gameObj.id,
      );
      if (!isGameInCollection) {
        dispatch(updateCollection({ id, game: gameObj }));
      }
      onClose();
    }
  };

  useEffect(() => {
    if (newCollectionField && inputRef.current) {
      inputRef.current.focus();
    }
  }, [newCollectionField]);

  return (
    <div className="flex flex-col">
      <div className="flex-1 px-4 pb-0 pt-0">
        <form onSubmit={handleAddCollectionSubmit}>
          <p className="text-xl font-medium xs:text-2xl">Save game to...</p>
          <div className="mt-2 flex flex-col gap-5">
            <div>
              {collections.length !== 0
                ? collections.map((c) => (
                    <div key={c.id} className="flex items-center gap-2">
                      <label
                        htmlFor={`task-${c.id}`}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id={`task-${c.id}`}
                          className="h-4 w-4"
                          checked={c.games.some(
                            (game) => game.id === gameObj.id,
                          )} 
                          onChange={() => handleCheckboxChange(c.id)}
                        />
                        <p className="font-light xs:text-lg">{c.title}</p>
                      </label>
                    </div>
                  ))
                : null}
            </div>
            <div id="new_collection">
              {newCollectionField ? (
                <div>
                  <input
                    ref={inputRef}
                    type="text"
                    value={newCollectionValue}
                    placeholder="Enter new collection name..."
                    onChange={(e) => setNewCollectionValue(e.target.value)}
                    className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 dark:text-drkbg"
                  />
                </div>
              ) : (
                <div
                  className="flex cursor-pointer items-center gap-2"
                  onClick={() => setNewCollectionField(true)}
                >
                  <PiPlusBold />
                  <p className="text-lg font-light xs:text-xl">
                    Create new collection
                  </p>
                </div>
              )}
            </div>
          </div>
          {newCollectionField && (
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                disabled={!newCollectionValue}
                className={`cursor-pointer rounded-md ${
                  newCollectionValue
                    ? `bg-gradient-to-br from-pink-500 to-orange-500`
                    : `bg-gray-500`
                } px-3 py-1.5 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                Create
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

// import { useState, useRef, useEffect } from "react";
// import { PiPlusBold } from "react-icons/pi";
// import {createNewCollection} from "../../../features/collections/collectionsSlice";
// import { useDispatch, useSelector } from "react-redux";

// export default function AddToCollection() {
//   const dispatch = useDispatch();
//   const collections = useSelector((state) => state.collections);

//   const [newCollectionValue, setNewCollectionValue] = useState("");
//   const [newCollectionField, setNewCollectionField] = useState(false);

//   const inputRef = useRef(null);

//   function handleAddCollectionSubmit() {
//     const newCollection = {
//       id: 100,
//       title: newCollectionValue,
//       games: []
//     };

//     dispatch(createNewCollection(newCollection));

//   }
//   useEffect(() => {
//     if (newCollectionField && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [newCollectionField]);

//   return (
//     <div className="flex flex-col">
//       <div className="flex-1 px-4 pb-0 pt-0">
//         <form onSubmit={handleAddCollectionSubmit}>
//           <p className="text-xl font-medium xs:text-2xl">Save game to...</p>
//           <div className="mt-2 flex flex-col gap-5">
//             <div className="">
//               {collections.length !== 0 ?
//                 collections.map((c) => (
//                   <div key={c.id} className="flex items-center gap-2">
//                     <label
//                       htmlFor={`task-${c.id}`}
//                       className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         id={`task-${c.id}`}
//                         className="h-4 w-4"
//                       />
//                       <p className="font-light xs:text-lg">{c.title}</p>{" "}
//                     </label>
//                   </div>
//                 ))
//               : null}
//             </div>
//             <div id="new_collection">
//               {newCollectionField ? (
//                 <div>
//                   <form>
//                     <input
//                       ref={inputRef}
//                       type="text"
//                       value={newCollectionValue}
//                       placeholder="Enter new collection name..."
//                       onChange={(e) => setNewCollectionValue(e.target.value)}
//                       className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 dark:text-drkbg"
//                     />
//                   </form>
//                 </div>
//               ) : (
//                 <div
//                   className="flex cursor-pointer items-center gap-2"
//                   onClick={() => setNewCollectionField(true)}
//                 >
//                   <PiPlusBold />
//                   <p className="text-lg font-light xs:text-xl">
//                     Create new collection
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//           {newCollectionField && (
//             <div className="mt-6 flex items-center justify-end gap-x-6">
//               <button
//                 type="submit"
//                 disabled={!newCollectionValue}
//                 className={`cursor-pointer rounded-md ${newCollectionValue ? `bg-gradient-to-br from-pink-500 to-orange-500` : `bg-gray-500`} px-3 py-1.5 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
//               >
//                 Create
//               </button>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }
