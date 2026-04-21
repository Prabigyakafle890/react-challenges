import { useState } from "react"
export const DragAndDropList = () =>{
const [items, setItems] = useState(["A" , "B", "C"]);
const [draggedItem, setDraggedItem] = useState("");
const [dragOverItem, setDragOverItem] = useState("");

const handleDrop = (targetItem: string) =>{
    const updated = [...items];

    const draggedIndex = updated.indexOf(draggedItem);
    const targetIndex = updated.indexOf(targetItem);

    updated.splice(draggedIndex, 1);
    updated.splice(targetIndex,0,draggedItem);

    setItems(updated);
}
return(
    <div>
       {items.map((item)=>{
        return <li key={item}
          draggable
          onDragStart={()=>setDraggedItem(item)}
           onDragOver={(e) => {
            e.preventDefault();
            setDragOverItem(item);
          }}
          onDrop={()=> handleDrop(item)}
          className={
            dragOverItem === item
              ? "bg-blue-200 p-2 m-1"
              : "bg-gray-100 p-2 m-1"
          }
        >
            {item}</li>
       })}
    </div>
)
} 