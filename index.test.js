// index.test.js

const { agregarTarea, tareaRealizada, tareaEliminada } = require('./index');

describe('Funciones de gestión de tareas', () => {
  test('agregarTarea agrega una nueva tarea a la lista', () => {
    // Arrange
    const tarea = 'Hacer la compra';
    const id = 1;
    const realizado = false;
    const eliminado = false;
    const mockLista = [];
    const mockInsertAdjacentHTML = jest.fn();

    document.querySelector = jest.fn().mockReturnValue({ insertAdjacentHTML: mockInsertAdjacentHTML });

    // Act
    agregarTarea(tarea, id, realizado, eliminado);

    // Assert
    expect(mockInsertAdjacentHTML).toHaveBeenCalledWith(
      "beforeend",
      expect.stringContaining('<li id="elemento">')
    );
  });

  test('tareaRealizada marca una tarea como realizada', () => {
    // Arrange
    const element = document.createElement('i');
    element.classList.add('far', 'fa-circle');
    const mockToggle = jest.spyOn(element.classList, 'toggle');

    // Act
    tareaRealizada(element);

    // Assert
    expect(mockToggle).toHaveBeenCalledWith('fa-check-circle');
    expect(mockToggle).toHaveBeenCalledWith('fa-circle');
  });

  test('tareaEliminada elimina una tarea de la lista', () => {
    // Arrange
    const element = document.createElement('i');
    const parentElement = document.createElement('li');
    parentElement.appendChild(element);
    const mockRemoveChild = jest.fn();
    parentElement.parentNode = { removeChild: mockRemoveChild };

    // Act
    tareaEliminada(element);

    // Assert
    expect(mockRemoveChild).toHaveBeenCalledWith(parentElement);
  });
});
