import React from 'react';
import {View} from 'react-native';
import Todo from './Todo';

const TodoList = ({todos, deleteTodo, toggleComplete, type}) => {
  const getVisibleTodos = (todos, type) => {
    switch (type) {
      case 'Todos':
        return todos;
      case 'Ativos':
        return todos.filter((t) => t.complete);
      case 'Completados':
        return todos.filter((t) => !t.complete);
    }
  };

  todos = todos.map((todo, i) => {
    return (
      <Todo
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        key={i}
        todo={todo}
      />
    );
  });
  return <View>{todos}</View>;
};

export default TodoList;
