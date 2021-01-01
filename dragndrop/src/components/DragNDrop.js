import React, {useState, useRef } from 'react';

function DragNDrop({data}) {
    const [list, setList ] = useState(data);
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();

    const handleDragStart = (e, params) => {
        console.log('Drag Starting', params)
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(()=> {
            
        })
        setDragging(true);
    }

    const handleDragEnd = () => {
        setDragging(false);
        console.log('ending drag')
        dragNode.current.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null;
        dragNode.current = null;
    }
    const getStyles = (params) => {
        const currentItem = dragItem.current;
        if(currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) {
            return 'current dnd-item'
        }
       return 'dnd-item' 
    }

    return (
    <div className="drag-n-drop">
    {list.map((grp, grpI)=> {
      return <div key={grp.title} className="dnd-group">
                  <div className="group-title">{grp.title}</div>
        {grp.items.map((item, itemI)=> {
          return <div 
          draggable 
          onDragStart={(e)=>handleDragStart(e, {grpI, itemI} )} key={item} 
          className={dragging ? getStyles({grpI, itemI}) : "dnd-item"}>{item}</div>
        })}
      </div>
    })}

</div>
);
}

export default DragNDrop;