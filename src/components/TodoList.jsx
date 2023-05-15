import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';


/*Acá le voy a pasar como prop los todos que inicie en el app.jsx y voy a recorrer esa lista de todos usando un todo al estilo que recorre el foreach*/

const TodoList = ({ todos, deleteTodo, updateTodo, setTodos }) => {


  const handleDragEnd = resultado => {
    console.log(resultado)

    const destino = resultado.destination.index
    const inicio = resultado.source.index

    console.log("movido desde:" + inicio)
    console.log("movido a:" + destino)

    //cuando destination es null , osea lo tira afuera del area droppable
    if (resultado.destination === null) {
      console.log("fueraaaaaaaaa")
      return;
    } else {

      //copio una copia de los todos que recibo originales para usar el spread operator
      const copiaTodosDrag = [...todos]

      //necesito que el splice me devuelva el elemento del array
      const [elementoDragueado] = copiaTodosDrag.splice(inicio, 1)
      console.log(elementoDragueado)

      //volver el elemento dragueado en la lista de todos, en la copia de la lista de todos
      copiaTodosDrag.splice(destino, 0, elementoDragueado)
      setTodos(copiaTodosDrag)
    }
    console.log("adentroooooo")
  }


  return (

    <DragDropContext onDragEnd={handleDragEnd}>

      <Droppable droppableId="todos">
        {
          (areaDropable) => (
            <div ref={areaDropable.innerRef}
              {...areaDropable.droppableProps}
              className="mt-8 rounded-t-md overflow-hidden 
              transition-all duration-1000
             border-b-gray-800 dark:bg-gray-800
              bg-white [&>article]:p-4">



              {todos.map((todo, index) => (
                <Draggable index={index} key={todo.id} draggableId={`${todo.id}`}>

                  {
                    (elementoDraggeable) => (
                      <TodoItem key={todo.id}
                        ref={elementoDraggeable.innerRef}
                        {...elementoDraggeable.dragHandleProps}
                        {...elementoDraggeable.draggableProps}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo} />
                    )
                  }


                </Draggable>
              ))}

              {areaDropable.placeholder}
            </div>

          )


        }


      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
