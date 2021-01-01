import React, {useState} from 'react';

function DragNDrop({data}) {
    const [list, setList ] = useState(data);

    const handleDragStart = (e, params) => {
        console.log('Drag Starting', params)
    }
    return (
    <div className="drag-n-drop">
    {list.map((grp, grpI)=> {
      return <div key={grp.title} className="dnd-group">
                  <div className="group-title">{grp.title}</div>
        {grp.items.map((item, itemI)=> {
          return <div draggable onDragStart={(e)=>handleDragStart(e, {grpI, itemI} )} key={item} className="dnd-item">{item}</div>
        })}
      </div>
    })}

</div>
);
}

export default DragNDrop;