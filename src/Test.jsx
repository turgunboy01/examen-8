// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addTodo,
//   removeTodo,
//   startEditing,
//   cancelEditing,
//   updateTodo,
//   setEditingTodo,
//   incrementCount,
//   decrementCount,
//   selectTodos,
//   selectCounts,
//   selectEditingIndex,
//   selectEditingTodo,
// } from "./redux/test";

// function Test() {
//   const dispatch = useDispatch();
//   const todos = useSelector(selectTodos);
//   const counts = useSelector(selectCounts);
//   const editingIndex = useSelector(selectEditingIndex);
//   const editingTodo = useSelector(selectEditingTodo);
//   const [newTodo, setNewTodo] = useState("");

//   const handleAddTodo = () => {
//     if (newTodo.trim()) {
//       dispatch(addTodo({ todo: newTodo.trim() }));
//       setNewTodo("");
//     }
//   };

//   const handleEditTodo = (index) => {
//     dispatch(startEditing(index));
//   };

//   const handleCancelEditing = () => {
//     dispatch(cancelEditing());
//   };

//   const handleUpdateTodo = () => {
//     dispatch(updateTodo());
//   };

//   const handleIncrementCount = (index) => {
//     dispatch(incrementCount(index));
//   };

//   const handleDecrementCount = (index) => {
//     if (counts[index] > 0) {
//       if (counts[index] === 1) {
//         // Remove the todo item if count is 1
//         dispatch(removeTodo(index));
//       } else {
//         // Otherwise, just decrement the count
//         dispatch(decrementCount(index));
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-4">Todo List</h1>
//         <div className="flex mb-4">
//           <input
//             type="text"
//             className="border p-2 flex-grow rounded-l"
//             placeholder="New Todo"
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//           />
//           <button
//             className="bg-blue-500 text-white p-2 rounded-r"
//             onClick={handleAddTodo}
//           >
//             Add
//           </button>
//         </div>
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index} className="flex justify-between items-center mb-2">
//               {editingIndex === index ? (
//                 <>
//                   <input
//                     type="text"
//                     className="border p-2 flex-grow rounded"
//                     value={editingTodo}
//                     onChange={(e) => dispatch(setEditingTodo(e.target.value))}
//                   />
//                   <button
//                     className="bg-green-500 text-white p-2 rounded ml-2"
//                     onClick={handleUpdateTodo}
//                   >
//                     Save
//                   </button>
//                   <button
//                     className="bg-gray-500 text-white p-2 rounded ml-2"
//                     onClick={handleCancelEditing}
//                   >
//                     Cancel
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <span>{todo}</span>
//                   <div className="flex items-center">
//                     <button
//                       className="bg-green-500 text-white p-2 rounded mr-2"
//                       onClick={() => handleIncrementCount(index)}
//                     >
//                       Increment Count ({counts[index]})
//                     </button>
//                     <button
//                       className={`bg-red-500 text-white p-2 rounded ${
//                         counts[index] === 0
//                           ? "opacity-50 cursor-not-allowed"
//                           : ""
//                       }`}
//                       onClick={() => handleDecrementCount(index)}
//                       disabled={counts[index] === 0}
//                     >
//                       Decrement Count
//                     </button>
//                   </div>
//                   <button
//                     className="bg-yellow-500 text-white p-2 rounded ml-2"
//                     onClick={() => handleEditTodo(index)}
//                   >
//                     Edit
//                   </button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Test;
