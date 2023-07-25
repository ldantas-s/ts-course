const EventComponent = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('I am being dragged');
    console.log(event);
  };

  return (
    <>
      <input type="text" onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me!
      </div>
    </>
  );
};

export default EventComponent;
