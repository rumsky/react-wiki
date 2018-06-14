/**
 * Created by harry on 2018/4/12.
 */
import React from 'react';
import {Mutation, Query} from 'react-apollo';
import addTodo from '../../gql/addTodo.graphql'
import getTodos from '../../gql/getTodo.graphql'

const AddTodo = ()=> {
    let input;

    return (
        <div>
            <Query
                query={getTodos}
                pollInterval={1000}
            >
                {
                    (loading, data) => {
                        if(loading) return <p>loading</p>
                        return data.todos.map(item => {
                            return <p>item</p>
                        })
                    }
                }
            </Query>
            <Mutation
                mutation={addTodo}
                update={(cache, {data: { addTodo}}) => {
                    const { todos } = cache.readQuery({query: getTodos});
                    cache.writeQuery({
                        query: getTodos,
                        data: {todos: todos.concat([addTodo])}
                    });
                }}
            >
                {
                    (addTodo, {data}) => {

                        return (
                            <div>
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    addTodo({ variables: {type: input.value}});
                                    input.value = "";
                                }}>
                                    <input type="text" ref={node => {input = node;}}/>

                                    <button type="submit">Add Todo</button>
                                </form>
                            </div>
                        )
                    }
                }

            </Mutation>
        </div>

    );
}
export default AddTodo;
